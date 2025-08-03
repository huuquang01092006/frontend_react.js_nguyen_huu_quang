function chenMang(mang1, mang2, viTri) {
  if (viTri < 0 || viTri > mang1.length) {
    console.log("vi tri khong hop le");
    return mang1;
  }

  const ketQua = [...mang1.slice(0, viTri), ...mang2, ...mang1.slice(viTri)];

  return ketQua;
}

console.log(chenMang([1, 2, 3, 7, 8], [4, 5, 6], 3));
console.log(chenMang(["a", "b", "e", "f"], ["c", "d"], 2));
console.log(chenMang(["a", "b"], ["x", "y"], 5));
