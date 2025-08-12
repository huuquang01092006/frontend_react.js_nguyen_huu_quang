abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo(): void {
    console.log(`Name: ${this.name}`);
  }
}
class Student extends Person {
  id: number;
  constructor(name: string, id: number) {
    super(name);
    this.id = id;
  }
  displayInfo(): void {
    super.displayInfo();
    console.log(`Student ID: ${this.id}`);
  }
}
class Teacher extends Person {
  subject: string;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }
  displayInfo(): void {
    super.displayInfo();
    console.log(`Subject: ${this.subject}`);
  }
}

let student = new Student("John Doe", 123);
student.displayInfo();

let teacher = new Teacher("Jane Doe", "Math");
teacher.displayInfo();