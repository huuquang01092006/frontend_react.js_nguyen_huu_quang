class Vehicle {
  name: string;
  protected year: number;
  private company: string;
  readonly id: number;
  constructor(name: string, year: number, company: string, id: number) {
    this.name = name;
    this.year = year;
    this.company = company;
    this.id = id;
  }
}
let vehicle = new Vehicle("Honda Civic", 2022, "Honda", 1);
console.log(vehicle);
