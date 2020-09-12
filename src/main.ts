// import { EcApp } from './ec-app/ec-app';
// import './ddd-ex1';
// import './generators/create-fibonacci-generator';
// import './design-pattern';
//
// const ecApp = new EcApp();
// ecApp.serve();

// import { main } from './error-handling';

// main();
// import './sandbox2';

const M = 10;
const N = 100;

/**
 *
 * @param remain 残った人数
 * @param pre 前のテーブルに配置した人数
 */
const check = (remain: number, pre: number): number => {
  // 残った人数がいなくなると終了
  if (remain < 0) {
    return 0;
  }
  if (remain === 0) {
    return 1;
  }

  let count = 0;
  for (let i = pre; i <= M; i++) {
    count += check(remain - i, i);
  }
  return count;
};

console.log(check(N, 2));
