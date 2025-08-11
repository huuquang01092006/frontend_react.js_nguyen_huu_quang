class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getInfo(): string {
    return `ID: ${this.id}, Name: ${this.name}`;
  }

  getId(): number {
    return this.id;
  }
}
let allStudents: Student[] = [];

allStudents.push(
  new Student(1, "quang"),
  new Student(2, "vinh"),
  new Student(3, "dong"),
  new Student(4, "khanh"),
  new Student(5, "nam"),
  new Student(6, "phuong")
);
class Classroom {
  private students: Student[] = [];

  showStudents(): void {
    console.log("danh sach hoc sinh trong lop:");
    this.students.forEach((student) => console.log(student.getInfo()));
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  filterStudent(id: number): Student | undefined {
    return this.students.find((student) => student.getId() === id);
  }

  addStudentInClass(): void {
    if (allStudents.length > 0) {
      let student = allStudents.shift(); 
      if (student) {
        this.addStudent(student);
      }
    }
  }
}
let classA = new Classroom();
let classB = new Classroom();

for (let i = 0; i < 3; i++) {
  classA.addStudentInClass();
  classB.addStudentInClass();
}

classA.showStudents();
classB.showStudents();
