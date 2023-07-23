class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposit successful. New balance: ${this.balance}`;
    } else {
      return "Invalid deposit amount. Please deposit an amount greater than 0.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrawal successful. New balance: ${this.balance}`;
    } else if (amount <= 0) {
      return "Invalid withdrawal amount. Please withdraw an amount greater than 0.";
    } else {
      return "Insufficient funds. Please withdraw an amount within your available balance.";
    }
  }

  checkBalance() {
    return `Account Holder: ${this.accountHolder}, Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
  }

  transfer(amount, targetAccount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      targetAccount.balance += amount;
      return `Transfer successful. New balance: ${this.balance}`;
    } else if (amount <= 0) {
      return "Invalid transfer amount. Please transfer an amount greater than 0.";
    } else {
      return "Insufficient funds. Please transfer an amount within your available balance.";
    }
  }
}

// Creating two instances of the BankAccount class
const account1 = new BankAccount("123456789", "Raam");
const account2 = new BankAccount("987654321", "Shaam", 500);

// Performing various operations on the accounts
console.log(account1.deposit(100));
console.log(account2.withdraw(200)); 
console.log(account1.checkBalance());
console.log(account2.checkBalance());

console.log(account1.transfer(50, account2)); 

console.log(account1.checkBalance()); 
console.log(account2.checkBalance()); 
