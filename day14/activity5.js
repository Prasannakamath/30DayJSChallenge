//task9: create class Account with private property Balance.
//Balance can only be updated via deposit and withdraw methods of same class.
//task10: test the deposit and withdraw functions and check if balance is properly updated.
class Account {
  #balance = 0;
  static #accountPrefix = "ABC";
  static #accountNumCounter = 0;
  #accountId = "";
  constructor(initbal) {
    this.#balance = initbal;
    this.#accountId = this.#generateAccountNumber();
  }
  #generateAccountNumber() {
    Account.#accountNumCounter++;
    return `${Account.#accountPrefix}${Account.#accountNumCounter
      .toString()
      .padStart(3, "0")}`;
  }
  deposit(amount) {
    console.log(`${amount} getting deposited in account.`);
    this.#balance += amount;
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient Balance");
    }
    console.log(`${amount} getting withdrawn from account`);
    this.#balance -= amount;
  }
  getAccountDetails() {
    return { accountId: this.#accountId, balance: this.#balance };
  }
}
const account1 = new Account(900);
console.log(account1.getAccountDetails());

const account2 = new Account(500);
console.log(account2.getAccountDetails());

account1.withdraw(200);
account2.deposit(200);
console.table([account1.getAccountDetails(), account2.getAccountDetails()]);
try {
  account1.withdraw(701);
} catch (e) {
  console.log(e.message);
}
