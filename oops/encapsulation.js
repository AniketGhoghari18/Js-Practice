// Encapsultion
// Encapsulation is a programming technique that restricts access to some parts of an object. 
// Allows access only through public methods

class BankAccount {
    #balance;
    constructor(name , account_no , balance) {
        this.name = name;
        this.account_no = account_no;
        this.#balance = balance;
    }
 
    getBalance() {
        console.log(this.#balance);
    }
}

const account1 = new BankAccount('Warner', 123456789, 1000); 
// In this example, you pass 1000 as the balance, and it is set to a private variable. However, you cannot access it directly using account1.balance; instead, you must use a public method to access it.

account1.getBalance();
