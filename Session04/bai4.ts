function test(value: number | string): void {
  if (typeof value === "string") {
    console.log(value.length);
  }
  if (typeof value === "number") {
    if(value % 2 == 0){
        console.log(`Day la so chan`);
    }else{
        console.log(`Day la so le`);
    }
  }
}
test(12);
test("Khanh");
test(123);