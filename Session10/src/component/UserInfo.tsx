const userInfo = {
  name: "Nguyen Van A",
  sex: "Nam",
  birthday: "01/01/2000",
  email: "nva@gmail.com",
  address: "thanh xuan, ha noi",
};
function User() {
  return (
    <div>
      <h1>Thong tin ca nhan</h1>
      <ul>
        <li>Ho va ten: {userInfo.name}</li>
        <li>Gioi tinh: {userInfo.sex}</li>
        <li>Ngay sinh: {userInfo.birthday}</li>
        <li>Email: {userInfo.email}</li>
        <li>Dia chi: {userInfo.address}</li>
      </ul>
    </div>
  );
}

export default User;
