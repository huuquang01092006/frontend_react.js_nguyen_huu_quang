abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  abstract getSize(): string;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getSize(): string {
    return `Rectangle ${this.getName()} has width ${this.width} and height ${
      this.height
    }.`;
  }
}

let myRectangle = new Rectangle("myRectangle", 10, 20);
console.log(myRectangle.getName());
console.log(myRectangle.getSize());

