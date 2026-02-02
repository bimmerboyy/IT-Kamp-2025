// class BankAccount{
//     constructor(owner,balance){
//         this.balance = balance;
//         this.owner = owner;
//     }
//     deposit(amount){
//         this.balance += amount;
//     }
//     withdraw(amount){
//         this.balance -= amount;
//     }

// }

// let bankacc = new BankAccount('Tarik',10000);

// bankacc.deposit(5000);

// console.log(bankacc.balance);

class Circle{
    #radius;
    constructor(){
        
    }

    getRadius(){
        return this.#radius;
    }

    setRadius(value){
        if(value < 0){
            console.log('GRESKA Poluprecnik ne moze biti negativan');
            return;
        }
        this.#radius = value;
    }

    precnik(){
        return 2*this.#radius;
    }
    obim(){
        return 2*this.#radius*Math.PI;
    }
    povrsina(){
       return (Math.PI * this.#radius) **2
    }
}

let circle = new Circle();

circle.setRadius(5);

console.log(circle.povrsina().toFixed(2));  