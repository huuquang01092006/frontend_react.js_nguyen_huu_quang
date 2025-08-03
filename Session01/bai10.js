function nhomChuoi(arr) {
  const nhom = new Map();

  for (const chuoi of arr) {
    const key = chuoi.split("").sort().join("");
    if (!nhom.has(key)) {
      nhom.set(key, []);
    }
    nhom.get(key).push(chuoi);
  }

  return Array.from(nhom.values());
}

console.log(nhomChuoi(["eat", "tea", "tan", "ate", "nat", "bat"]));