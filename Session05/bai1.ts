class Vehicle {
  name: string;
  year: number;
  company: string;
  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }
}
let vehicle = new Vehicle("Honda Civic", 2022, "Honda");
console.log(vehicle);
let vehicle1 = new Vehicle("Lamborghini", 2015, "Lamborghini");
console.log(vehicle1);
