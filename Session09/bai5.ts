class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }

  remove(index: number): void {
    this.data.splice(index, 1);
  }
}

let numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
numberStore.remove(0);
console.log(numberStore.getAll()); 

let userStore = new DataStore<{ name: string }>();
userStore.add({ name: "Alice" });
console.log(userStore.getAll()); 
