class Employee {
  name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(){
    console.log(`Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`);
  };
}
let employee = new Employee("khanh", "khanh", "0123456789");
employee.printInfo();
let employee1 = new Employee("dong", "dong", "0123456789");
employee1.printInfo();