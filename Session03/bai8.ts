function add(a: number | string, b: number | string): number | string {
  let numA = typeof a === "string" ? parseFloat(a) : a;
  let numB = typeof b === "string" ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return "Du lieu khong hop le";
  }

  return numA + numB;
}

console.log(add("10", 5));
console.log(add("abc", 5)); 
