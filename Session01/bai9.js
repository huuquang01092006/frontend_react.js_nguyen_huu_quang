function hopMangTangDan(arr1, arr2) {
  const hopMang = [...arr1, ...arr2];
  return hopMang.sort((a, b) => a - b);
}

console.log(hopMangTangDan([1, 2, 3, 5, 9], [4, 6, 7, 8]));
