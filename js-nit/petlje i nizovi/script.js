/*var a = 5;

var a = "neki text0;"

console.log(a);
*/

//Ispisace neki text ali ovde vidimo gresku gde sa var definisanjem varijabli mozemo da definisemo dve 
//varijable pod istim imenom

/*const a = 10;

a = 10;

const obj = {
    ime: "Marko",
    prezime: "Markovic",
    godine: 21
};
obj.godina = 25;
console.log(obj);
*/

//U prvom slucaju ne mozemo da promenimo const zato sto je to vrednost dok u drugom slucaju mozemo
//jer ne menjamo vrednost bojekat ostaje objekat vec menjamo njegov property


//Poredjenja 
//= -> dodela vrednosti
//== -> poredjenje vrednosti
//=== -> poredjenje vrednosti i tipa

/*
const a = 5;
const b = "5"

console.log(a == b) //True

console.log(a === b) //False

*/

/*

let prvi_broj = 7;
let drugi_broj = 7.0;

console.log(prvi_broj === drugi_broj);


//Uslovi

let broj = 10;

if(broj > 5){
    console.log("Broj je veci od 5")
}
else{
    console.log("Broj je manji od 5")
}


//Resenja sa if else if uslovom
let dan = "petak";

if(dan === "ponedeljak"){
    console.log("ponedeljak");
}else if(dan === "utorak"){
    console.log("utorak");
}
else if(dan === "sreda"){
    console.log("sreda");
}
else if(dan === "cetvrtak"){
    console.log("cetvrtak");
}
else if(dan === "petak"){
    console.log("petak");
}
else if(dan === "subota"){
    console.log("subota");
}
else if(dan === "nedelja"){
    console.log("nedelja");
}
else{
    console.log("Nepoznat dan");
}


//Resenje sa switch casom

switch(dan){
    case "ponedeljak":
        console.log("Ponedeljak");
    break;
    case "utorak":
        console.log("utorak");
    break;
    case "sreda":
        console.log("sreda");
    break;
    case "cetvrtak":
        console.log("cetvrtak");
    break;
    case "petak":
        console.log("petak");
    break;
    case "subota":
        console.log("subota");
    break;
    case "nedelja":
        console.log("nedelja");
    break;
    default : 
    console.log("Nepoznat dan");
}

*/

//for
/*
for(let i = 1;i <= 10;i++){
    console.log(i);
}

for(let i = 10;i >= 1;i--){
    console.log(i);
}

//while

let i = 1;

while(i <= 10){
    console.log(i);
    i++;
}

*/
//Ispisati sve parne brojeve od 1 do 20

for(let i = 1;i <= 20;i++){
    if(i % 2 == 0){
        console.log(`Parni broj:${i}`);
    }
    else{
        console.log(`Neparan broj:${i}`);
    }
}


//Imamo brojeve od 1 do 50 i treba pretraziti brojeve vece od 30 i ispisati ih

console.log("Brojevi veci od 30 su:")
for(let i = 1;i <= 50;i++){
    if(i > 30){
        console.log(i); 
    }
}




