const createUser = (name, age = 18, role = "user") => {
  {
    name: name;
    age: age;
    role: role;
  }
  console.log(name, age, role);
};
createUser("DEV", 20, "admin");
