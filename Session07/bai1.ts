class Employee {
  name: string;
  protected company: string;
  private phone: string;
  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo() {
    console.log(
      `Name: ${this.name}, Company: ${this.company}, Phone: ${this.phone}`
    );
  }
  getPhone() {
    return this.phone;
  }
}
class Manager extends Employee {
  teamSize: string;
  constructor(name: string, company: string, phone: string, teamSize: string) {
    super(name, company, phone);
    this.teamSize = teamSize;
    this.getPhone();
  }
  
  printInfo() {
    console.log(
      `Name: ${this.name}, Company: ${this.company}, Phone: ${this.getPhone()}, Team Size: ${this.teamSize}`
    );
  }
}

const employee = new Employee("Khanh", "FPT", "0123456789");
const manager = new Manager("Khanh", "FPT", "0123456789", "10");
employee.printInfo();
manager.printInfo();
