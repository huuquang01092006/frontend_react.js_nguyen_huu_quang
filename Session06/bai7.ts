let allStudents: Student[] = [];

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

  setName(newName: string): void {
    this.name = newName;
  }
}
class Classroom {
  private students: Student[] = [];

  showStudents(): void {
    console.log("Danh sach hoc sinh trong lop:");
    this.students.forEach((student) => console.log(student.getInfo()));
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  removeStudent(id: number): void {
    let index = this.students.findIndex((student) => student.getId() === id);
    let removed = this.students.splice(index, 1)[0];
    if (removed) {
      allStudents.push(removed);
      console.log(`Da xoa hoc sinh ID ${id} khoi lop.`);
    } else {
      console.log(`Khong the xoa hoc sinh ID ${id}.`);
    }
    
  }

  editStudent(id: number, newName: string): void {
    let student = this.students.find((student) => student.getId() === id);
    if (student) {
      student.setName(newName);
      console.log(`Da cap nhat ten hoc sinh ID ${id} thanh ${newName}.`);
    } else {
      console.log(`Khong tim thay hoc sinh ID ${id} de cap nhat.`);
    }
  }
}
allStudents.push(
  new Student(1, "quang"),
  new Student(2, "vinh"),
  new Student(3, "dong")
);
let classA = new Classroom();
for (let i = 0; i < 3; i++) {
  let student = allStudents.shift();
  if (student) {
    classA.addStudent(student);
  }
}

classA.showStudents();

classA.removeStudent(2);
classA.showStudents();

classA.editStudent(1, "khanh");
classA.showStudents();
