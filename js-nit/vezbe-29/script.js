//ZADATAK 1 Geometrijski oblici

class Shape3D{
    constructor(){}

    volume(){
        return 0;
    }
    describe(){
        return '3D onlik';
    }
}

class Cube extends Shape3D{
    constructor(side){
        super();
        this.side = side;
    }
    volume(){
        return Math.pow(this.side,3);
    }
    describe(){
        return 'Kocka sa zabpreminom X';
    }
}

class Sphere extends Shape3D{
    constructor(radius){
        super();
        this.radius = radius;
    }

    volume(){
        return (4/3) * Math.PI * Math.pow(this.radius,3);
    }

    describe(){
        return 'Lopta sa zapreminom X'
    }
}

class Cylinder extends Shape3D{
    constructor(radius,height){
        super();
        this.radius = radius;
        this.height = height;
    }

    volume(){
        return Math.PI * Math.pow(this.radius,2) * this.height;
    }
    describe(){
        return 'Cilindar sa zapreminom X'
    }
}


 const cube = new Cube(3);
const sphere = new Sphere(5);
const cylinder = new Cylinder(3, 10);
console.log(cube.describe());
console.log(sphere.describe());
console.log(cylinder.describe());

//ZADATAK 2 BIBLIOTEKA


class LibraryItem{
    constructor(title,year){
        this.title = title;
        this.year = year;
    }

    getInfo(){
        return `${this.title}(${this.year})`;
    }

    calculateLateFee(daysLate){
        return daysLate * 10;
    }
}

class Book extends LibraryItem{
    constructor(title,year,author){
        super(title,year);
        this.author = author;
    }

    getInfo(){
        return `${this.title}  by ${this.author} ${this.year} years`;
    }

    calculateLateFee(daysLate){
        return daysLate*20;
    }
}

class Magazine extends LibraryItem{
    constructor(title,year,issueNumber){
        super(title,year);
        this.issueNumber = issueNumber;
    }

    getInfo(){
        return `${this.title} ${this.year} years with ${this.issueNumber} issue number`;
    }

    calculateLateFee(daysLate){
        return daysLate * 5;
    }
}

class DVD extends LibraryItem{
     constructor(title,year,director){
        super(title,year);
        this.director = director;
    }
    getInfo(){
        return `${this.title} ${this.year} years and ${this.director} director`;
    }

    calculateLateFee(daysLate){
      return  50 + daysLate * 15;
    }
}

function calculateTotalFees(items, daysLate){
    let penalty = 0;
    items.forEach(i => {
        penalty += i.calculateLateFee(daysLate);
    })
    return penalty;
}


const items = [
  new Book("Harry Potter", 1997, "J.K. Rowling"),
  new Magazine("National Geographic", 2023, 145),
  new DVD("Inception", 2010, "Christopher Nolan")
];
items.forEach(item => console.log(item.getInfo()));
console.log(`Ukupna kazna za 5 dana: ${calculateTotalFees(items, 5)} RSD`);


//ZADATAK 3 placanja 

class Payment{
    constructor(amount){
        this.amount = amount;
    }
    process(){
        return 'Processing payment of amount RSD';
    }
    getFee(){
        return 0;
    }
    
}

class CreditCardPayment extends Payment{
    constructor(amount,cardNumber){
        super(amount),
        this.cardNumber = cardNumber.toString().split('').map(Number)
        .slice(-4).join('');
    }

    process(){
        return 'via Credit Card ending in XXXX';
    }
    getFee(){
        return this.amount * (2 / 100);
    }
}

class PayPalPayment extends Payment{
    constructor(amount,email){
        super(amount),
        this.email = email;
    }

    process(){
        return `via PayPal ${email}`;
    }
    getFee(){
        return this.amount * (3 / 100);
    }
}

class CryptoPayment extends Payment{
    constructor(amount,cryptoType){
        super(amount),
        this.cryptoType = cryptoType;
    }

    process(){
        return 'via cryptoType';
    }
    getFee(){
        return this.amount * (1 / 100);
    }
}

class CashPayment extends Payment{
    constructor(amount){
        super(amount)
    }

    process(){
        return `Cash payment of ${this.amount} RSD - No fees!`;
    }
    getFee(){
        return this.amount * (0 / 100);
    }
}

function processAllPayments(payments){
    let iznos = 0,provizije = 0;
    payments.forEach(p =>{
        iznos += p.amount;
        provizije += p.getFee();
    })
    return `Iznos:${iznos}  -  provizije:${provizije}`;
}


const payments = [
  new CreditCardPayment(10000, "1234"),
  new PayPalPayment(5000, "user@example.com"),
  new CryptoPayment(20000, "Bitcoin"),
  new CashPayment(3000)
];
console.log(processAllPayments(payments)); 


//ZADATAK 4 NOTIFIKACIJE










let c = new CreditCardPayment(10,12345678);

console.log(c.cardNumber);

