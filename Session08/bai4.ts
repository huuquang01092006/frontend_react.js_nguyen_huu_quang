function spreadOperator<T, U>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}

console.log(spreadOperator({ name: "quang", age: 20 }, { email: "quang@gmail", job: "dev" }));
