interface changeSpeed {
  speedUp(): void;
  slowDown(): void;
  stop(): void;
}
class Vehicle implements changeSpeed {
  private speed: number;

  constructor() {
    this.speed = 0;
  }

  speedUp(): void {
    this.speed += 10;
    console.log(`tang toc: ${this.speed} km/h`);
  }

  slowDown(): void {
    this.speed = Math.max(0, this.speed - 5);
    console.log(`giam toc: ${this.speed} km/h`);
  }

  stop(): void {
    this.speed = 0;
    console.log(`dung lai: ${this.speed} km/h`);
  }
}
let myVehicle = new Vehicle();

myVehicle.speedUp();  
myVehicle.speedUp();  
myVehicle.slowDown(); 
myVehicle.stop();     
