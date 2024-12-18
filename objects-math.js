function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. Remaining balance: $${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            console.log("Withdrawal amount must be positive.");
        }
    };

    this.calculateCompoundInterest = function (rate, years, compoundsPerYear = 1) {
        const principal = this.balance;
        const amount = principal * Math.pow((1 + rate / compoundsPerYear), compoundsPerYear * years);
        const interest = amount - principal;
        return interest;
    };

    this.display = function() {
        console.log(`Account Number: ${this.accountNumber}, Owner: ${this.owner}, Balance: $${this.balance}`);
    };
}

const accounts = [];

function addAccount(accountNumber, balance, owner) {
    const newAccount = new Account(accountNumber, balance, owner);
    accounts.push(newAccount);
    console.log(`Account "${accountNumber}" added successfully!`);
}

addAccount(100, 500, 'Alex');
addAccount(101, 900, 'Vitoria');
addAccount(102, 1000, 'Claudia');

console.log('\nCurrent Accounts:')
accounts.forEach(account => account.display());