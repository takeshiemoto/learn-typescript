const multi = (a: number, b: number) => a * b;
const multiCurried = (a: number) => (b: number) => a * b;
export const double = multiCurried(2);
export const trriple = multiCurried(3);

console.log(double(5)); // 10
console.log(trriple(5)); // 15
