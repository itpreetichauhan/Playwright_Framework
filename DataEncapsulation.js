// Data Encapsulation in JavaScript

// Using closure-based encapsulation (pre-ES2022)
function createBankAccount(initialBalance) {
    // Private variable - not accessible from outside
    let _balance = initialBalance;
    
    // Public methods
    return {
        deposit: function(amount) {
            if (amount > 0) {
                _balance += amount;
                return `Deposited: $${amount}. New balance: $${_balance}`;
            }
            return "Invalid deposit amount";
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= _balance) {
                _balance -= amount;
                return `Withdrew: $${amount}. Remaining: $${_balance}`;
            }
            return "Invalid withdrawal or insufficient funds";
        },
        getBalance: function() {
            return _balance;
        }
    };
}

// Using ES2022 private class fields
class BankAccount {
    #balance;  // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited: $${amount}. New balance: $${this.#balance}`;
        }
        return "Invalid deposit amount";
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew: $${amount}. Remaining: $${this.#balance}`;
        }
        return "Invalid withdrawal or insufficient funds";
    }
    
    getBalance() {
        return this.#balance;
    }
}

// Usage examples
const account1 = createBankAccount(100);
console.log(account1.deposit(50));
console.log(account1.withdraw(30));
console.log("Account 1 balance:", account1.getBalance());

const account2 = new BankAccount(500);
console.log(account2.deposit(100));
console.log(account2.withdraw(200));
console.log("Account 2 balance:", account2.getBalance());