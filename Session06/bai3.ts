abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const myDog = new Dog();
myDog.makeSound(); 
myDog.move(); 
