function findElement<T>(arr: T[], element: T): T | undefined {
  return arr.find((item) => item === element);
}
console.log(findElement([1, 2, 3, 4, 3], 3));
console.log(findElement([1, 2, 3, 4, 5], 6));
