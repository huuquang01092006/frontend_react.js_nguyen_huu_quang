class Account {
  id: number;
  userName: string;
  private password: string;
  isLogin: boolean;
  role: string;
  constructor(
    id: number,
    userName: string,
    password: string,
    isLogin: boolean,
    role: string
  ) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = isLogin;
    this.role = role;
  }
  login() {
    this.isLogin = true;
  }
  logout() {
    if (this.isLogin) {
      console.log("Dang xuat thanh cong");
      this.isLogin = false;
    }
  }
}
class userAcc extends Account {
  status: string;
  constructor(
    id: number,
    userName: string,
    password: string,
    isLogin: boolean,
    role: string,
    status: string
  ) {
    super(id, userName, password, isLogin, role);
    this.status = status;
  }
  login(): void {
    if (this.status == "active") {
      super.login();
      console.log("Dang nhap thanh cong");
      this.isLogin = true;
    } else {
      console.log("Tai khoan da bi khoa");
    }
  }
}
let user1 = new userAcc(1, "quang", "quang", false, "admin", "active");
user1.login();
user1.logout();
