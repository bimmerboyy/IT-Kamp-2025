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