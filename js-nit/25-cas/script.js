class User {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    great() {
        console.log(`Zdravo ja sam ${this.name}`);
    }

    getInfo(){
        return `${this.name},${this.age} godina`;
    }
    introduce(){
        console.log(`Dozvolite da se predstavim ${this.getInfo()}`);
    }
}

const classUser1 = new User("Marko",25);
const classUser2 = new User("Ana",22);


class Product {
    constructor(name,price){
        this.name = name,
        this.price = price
    }

    getLabel(){
        return `${this.name} - ${this.price} RSD`;
    }
}

const product1 = new Product('Plazma',150);
console.log(product1.getLabel());

//TODO:Napraviti klasu car sa
//svojstvima:brand,model,year,
// metodama:start(),stop(),getAge()

class Car{
    constructor(brand,model,year,isWork){
        this.brand = brand,
        this.model = model,
        this.year = year,
        this.isWork = isWork,
        this.message = ''
    }
    start(){
        if(!this.isWork){
            this.message = 'Auto je pokrenut i trenutno radi'
        }
        else{
            this.message = 'Auto je vec upaljen'
        }
        return this.message;
    }
    stop(){
        if(this.isWork){
            this.message = 'Auto radi pokrenuli ste gasenje';
        }
        else{
            this.message = 'Auto nije upaljen i nije moguce ugasiti ga';
        }
        return this.message;
    }
    getAge(){
        const d = new Date();
        let currentYear = d.getFullYear();
        let old = currentYear - this.year;
        console.log(old); 

    }
}

const car = new Car('BMW','E30',1987,true);

console.log(car.start());


class Student{
    constructor(name){
        this.name = name,
        this.grades = [] 
    }
    addGrade(grade){
        this.grades.push(grade);
    }
    getAvarage(){
         let zbirOcena = 0;
        for(let i = 0;i < this.grades.length;i++){
            zbirOcena += this.grades[i];               
        }

        let prosek = zbirOcena / this.grades.length;
        console.log(prosek);
    }
    isPassing(){
        let passed;
        for(let i = 0;i < this.grades.length;i++){
            if(this.grades[i] > 1){
                passed = true;
            }else{
                passed = false;
            }               
        
        }
        if(passed){
            console.log('Prolazi');
        }
        else{
            console.log('Ne prolazi');
        }
    }
}

const student = new Student('Tarik');
student.addGrade(2);
student.addGrade(3);
student.addGrade(4);
student.addGrade(5);

console.log(student.grades);

student.getAvarage();

student.isPassing();