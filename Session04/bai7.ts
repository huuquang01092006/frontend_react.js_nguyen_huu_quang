function processInput(input: string | number | boolean): void {
  if (typeof input === "string") {
    if (/^\d+$/.test(input)) {
      let num = Number(input);
      console.log(num * num);
    } else {
      let letters = input.match(/[a-zA-Z]/g);
      let count = letters ? letters.length : 0;
      console.log(`${count} ky tu chu cai`);
    }
  } else if (typeof input === "number") {
    if (isPrime(input)) {
      console.log("La so nguyen to");
    } else {
      console.log("khong phai so nguyen to");
    }
  } else if (typeof input === "boolean") {
    if (input) {
      console.log("Gia tri la true - tien hanh xu ly");
    } else {
      console.log("Gia tri la false - dung xu ly");
    }
  }
}
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
processInput("123");
processInput("a1b2c");
processInput(7);
processInput(8);
processInput(true);