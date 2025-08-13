function isEven<T extends number>(arr: T[]): T | undefined {
  return arr.find((item) => item % 2 === 0);
}
console.log(isEven([1, 21, 3, 4, 5]));
