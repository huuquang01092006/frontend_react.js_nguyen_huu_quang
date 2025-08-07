type student = {
  name: string;
  age: number;
  email: string;
};
let displayStudent = ({ name, age, email }: student) => {
  console.log(
    `Ten toi la ${name}, toi ${age} tuoi va email cua toi la ${email}`
  );
};
displayStudent({ name: "dong", age: 19, email: "dong19@gmail" });
