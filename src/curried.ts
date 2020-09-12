const multi = (a: number, b: number) => a * b;
const multiCurried = (a: number) => (b: number) => a * b;
export const double = multiCurried(2);
export const trriple = multiCurried(3);

console.log(double(5)); // 10
console.log(trriple(5)); // 15

const hello = (n: number) => {
  function myFunc() {
    if (n % 3 === 0) {
      console.log('Fizz');
    } else if (n % 5) {
      console.log('Buzz');
    } else {
      console.log('FizzBuzz');
    }
  }

  myFunc();
};

hello(100);
