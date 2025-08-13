function partialUpdate <T>(obj: T, updates: Partial<T>): T {
    return { ...obj, ...updates }
}
let obj = {name: "quang", age: 20, job: "dev"};
let updates = {name: "khanh", job: "designer"};

console.log(partialUpdate(obj, updates));