class BankAccount {
    constructor(holder, balance) {
        this.holder = holder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited Rs.${amount}. New balance: Rs.${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient balance";
        }

        this.balance -= amount;
        return `Withdraw Rs.${amount}. Remaining balance: Rs.${this.balance}`;
    }
}

const account1 = new BankAccount("Raj", 5000);

console.log(account1.deposit(3000));
console.log(account1.withdraw(4000));
console.log(account1.withdraw(5000));