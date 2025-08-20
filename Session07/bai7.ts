class Account {
  accountNumber: number;
  protected balance: number;
  protected history: number[] = [];
  protected status: string;
  constructor(
    accountNumber: number,
    balance: number,
    history: number[],
    status: string
  ) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.history = history;
    this.status = status;
  }
  deposit(amount: number) {
    this.balance += amount;
    this.history.push(amount);
  }
  withdraw(amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.history.push(-amount);
    } else {
      console.log("So du khong du");
    }
  }
  showHistory() {
    console.log(this.history);
  }
}
class SavingAccount extends Account {
  interestRate: number;
  constructor(
    accountNumber: number,
    balance: number,
    history: number[],
    status: string,
    interestRate: number
  ) {
    super(accountNumber, balance, history, status);
    this.interestRate = interestRate;
  }
  withdraw(amount: number): void {
    while (this.balance > 0) {
      if (this.balance >= amount) {
        super.withdraw(amount);
      } else {
        
        super.withdraw(this.balance);
      }
    }
  }
}
const acc = new SavingAccount(1, 10000, [], "active", 0.1);
acc.deposit(2000);     
acc.withdraw(3000);    
acc.deposit(5000);   
acc.showHistory();     
