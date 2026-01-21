// Napraviti klasu BankAccount sa:

// Svojstvima: owner, balance
// Metodama:
// deposit(amount) - dodaje novac
// withdraw(amount) - skida novac (ako ima dovoljno)
// getBalance() - vraća trenutno stanje
// transfer(amount, targetAccount) - prebacuje novac na drugi račun

class  BankAccount{
    constructor(owner,balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance > amount){
            this.balance -= amount;
        }
        else{
            console.log('Trenutno nema dovoljno novca na racunu');
        }
    }
    getBalance(){
        console.log(`Trenutno stanje na ${this.owner}-ovom racunu je:${this.balance}`);
    }
    transfer(amount,targetAccount){
        targetAccount.balance += amount;
        this.balance -= amount;
    }
}

let racun1 = new BankAccount('Tarik',10000);
let racu2 = new BankAccount('Bakir',2000);
racun1.deposit(5000);
racun1.withdraw(3000);
racun1.transfer(3000,racu2);


racun1.getBalance();
racu2.getBalance();
