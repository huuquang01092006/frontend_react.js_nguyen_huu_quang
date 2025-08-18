function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

let person = { name: "Alice" };
let job = { role: "Developer" };
let result = mergeObjects(person, job);
console.log(result);
