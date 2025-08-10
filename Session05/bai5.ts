class Rectangle {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  get Width() {
    return this.width;
  }
  get Height() {
    return this.height;
  }
  set Width(width: number) {
    this.width = width;
  }
  set Height(height: number) {
    this.height = height;
  }
  mathArea(): number {
    return this.width * this.height;
  }
  mathPerimeter(): number {
    return (this.width + this.height) * 2;
  }
}
let rectangle = new Rectangle(2, 3);
console.log(rectangle.Height);
console.log(rectangle.Width);
console.log(rectangle.mathArea());
console.log(rectangle.mathPerimeter());
