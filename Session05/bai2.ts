
class Student {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}
let students: Student[] = [
    new Student("khanh", 20, "khanh@gmail"),
    new Student("dong", 20, "dong@gmail"),
    new Student("phuong", 20, "phuong@gmail"),
]
students.forEach((student) => {
    console.log(`Ten toi la ${student.name}, toi ${student.age} tuoi va email cua toi la ${student.email}`)
})