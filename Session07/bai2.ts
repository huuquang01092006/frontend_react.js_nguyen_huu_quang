class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: number;
  constructor(name: string, speed: number, id: number) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  slowDown(): void {
    this.speed = Math.max(0, this.speed - 5);
    console.log(`giam toc: ${this.speed} km/h`);
  }
  speedUp(): void {
    this.speed += 10;
    console.log(`tang toc: ${this.speed} km/h`);
  }
  showSpeed(): void {
    console.log(`toc do hien tai cua ${this.name} la ${this.speed} km/h`);
  }
}
class Bicycle extends Vehicle {
  private gear: number;
  constructor(gear: number, name: string, speed: number, id: number) {
    super(name, speed, id);
    this.gear = gear;
  }
  showInfo(): void {
    console.log(
      `toc do hien tai cua ${this.name} la ${this.speed} km/h, gear la ${this.gear}, id la ${this.id}`
    );
  }
}
let bicycle = new Bicycle(1, "quang", 10, 1);
bicycle.speedUp();
bicycle.slowDown();
bicycle.showSpeed();
bicycle.showInfo();
