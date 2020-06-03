import { interval, Observable, of } from 'rxjs';
import { concatMap, map, switchMap, takeWhile, tap } from 'rxjs/operators';

export interface MockResponse {
  status: string;
  value?: string;
}

export const sleep = (n: number) =>
  new Promise((resolve) => setTimeout(resolve, n));

export class MockApiService {
  private callCount = 0;
  async getList(): Promise<MockResponse> {
    // await sleep(1000);

    this.callCount++;

    if (this.callCount === 5) {
      this.callCount = 0;
      return { status: 'done', value: 'hello' };
    }

    return { status: 'pending' };
  }
}

/**
 * Polling v1
 * 課題: getListがポーリング機構と密結合
 */
export class MockRepositoryService {
  constructor(private mockApiService = new MockApiService()) {}

  async getListWithPolling(retries = 0): Promise<MockResponse> {
    const res = await this.mockApiService.getList();
    if (res.status === 'done') {
      return Promise.resolve(res);
    }
    if (retries >= 15) {
      return Promise.reject(res);
    }
    await sleep(1000);
    return this.getListWithPolling(retries + 1);
  }

  getList(): Promise<MockResponse> {
    return this.mockApiService.getList();
  }
}

/**
 * Polling v2
 *  - getList リスト取得
 *  - poll ポーリング機構
 * */
const poll = (fn: () => unknown, retries = 10, interval = 1000) => {
  return Promise.resolve()
    .then(fn)
    .catch(async function retry(res): Promise<unknown> {
      console.log(res);
      if (retries-- > 0) {
        return sleep(interval).then(fn).catch(retry);
      }
      throw res;
    });
};

async function main2() {
  const mock = new MockRepositoryService();
  const validate = (res: MockResponse) => {
    if (res.status !== 'done') {
      return Promise.reject(res);
    }
    return Promise.resolve(res);
  };
  const res = await poll(() => mock.getList().then(validate), 10, 500);
  // console.log(res);
}

// main2();
