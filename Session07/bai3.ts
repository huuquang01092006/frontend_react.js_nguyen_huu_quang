abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeNoise(): void;
  printName(): void {
    console.log(`do la con ${this.name}`);
  }
}
class Cat extends Animal {
  makeNoise(): void {
    console.log("meo meo");
  }
}
class Dog extends Animal {
  makeNoise(): void {
    console.log("gau gau");
  }
}
let cat = new Cat("meo");
let dog = new Dog("cho");
cat.makeNoise();
cat.printName();
dog.makeNoise();
dog.printName();