type User = {
  id: number;
  name: string;
  email: string;
  age?: number;
};

function updateUser(
  user: User,
  updates: Partial<Omit<User, "id">> & { id?: number }
): User | string {
  if ("id" in updates) {
    return "Id khong the thay doi";
  }

  return {
    ...user,
    ...updates,
  };
}

let user1: User = {
  id: 1,
  name: "quang",
  email: "quang@gmail.com",
};

console.log(updateUser(user1, { name: "dong" }));
console.log(updateUser(user1, { id: 2, name: "dong" }));

