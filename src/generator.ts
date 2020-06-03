import { MockApiService, MockResponse, sleep } from './polling';

const mockApiService = new MockApiService();

function* pollForApi() {
  while (true) {
    yield mockApiService.getList();
  }
}

const poll: symbol = pollForApi();

poll.next();

console.log(poll.next());
console.log(poll.next());
console.log(poll.next());

// const runPolling = async (generator: any) => {
//   if (!generator) {
//     generator = pollForApi();
//   }
//
//   const val: any = generator.next();
//   console.log(val)
//
//   val.then(async (res: any) => {
//     if (res.status !== 'done') {
//       await sleep(1000);
//       runPolling(generator);
//     }
//     return res
//   })
// };
//
// runPolling(undefined).then(res => {
//   console.log('-----')
//   console.log(res)
// });

class Human {}
