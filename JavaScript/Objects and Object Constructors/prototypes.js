class Account {
  constructor(name, current = 0) {
    this.name = name;
    this.current = current;
  }

  iban() {
    const num = 'GR' + Math.floor(Math.random() * 100000000);

    return `New account created for: ${this.name}.IBAN: ${num}`;
  }
}

const newAccount = new Account('Kostas Minaidis');
Account.prototype.getBalance = function () {
  return this.current;
};
Account.prototype.deposit = function (deposit) {
  this.current = deposit + this.current;
  return this.current;
};
Account.prototype.withdraw = function (withdraw) {
  if (withdraw < 0) {
    return 'Error invalid amount';
  } else if (typeof withdraw !== 'number') {
    return 'Error invalid amount';
  } else if (withdraw > this.current) {
    return 'Insufficient balance!';
  } else {
    this.current = this.current - withdraw;
    return this.current;
  }
};

console.log(newAccount.deposit(700));
console.log(newAccount.getBalance());
console.log(newAccount.withdraw(800));
console.log(newAccount.getBalance());
