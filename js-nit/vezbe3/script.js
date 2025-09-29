//MAP metoda
//1. Imas niz brojeva [1,2,3,4,5]
//Napravi novi niz gde ce svi brojevi biti kvadrirani

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num)=>{
    return num * 2;
});
console.log("1.Niz od kvadriranih brojeva:")
console.log(squaredNumbers);

//2. Imas niz stringova,pretvori ih sve u velika slova.Koristi toUpperCase
const strings = ["hello","world","javascript"];

const toUpperCase = strings.map((str) =>{
   return str.toUpperCase();
});

console.log("2.Niz od velikih slova")
console.log(toUpperCase);

//FILTER metoda
//3. Iz datog niza izdvoj samo parne brojeve
const numbers2 = [1,2,3,4,5,6,7,8];

const parni = numbers2.filter((num) =>{
    return (num % 2 === 0);
});

console.log("3.Niz od parnih brojeva");
console.log(parni);
//4.Iz datog niza izdvoj samo reci koje imaju vise od 3 slova
const words = ["sun","mountian","tree","river","sky"];

const threeWords = words.filter((word) => {
    return word.length > 3;
    
});

console.log("4.Niz od reci koje imaju vise od 3 slova");
console.log(threeWords);
/*
//5. Izracunaj zbir svih parnih brojeva u nizu



const parni2 = brojevi.filter((num) =>{
    return (num % 2 === 0);
});

const zbirParnih = parni2.reduce((total,br) =>{
    return total + br;
});

console.log(zbirParnih);

//5. II nacin

const zbirParnih2 = brojevi.reduce((akumulator,br) =>{
    return br % 2 === 0 ? akumulator + br : akumulator; 
},0);

console.log(zbirParnih2);
*/

//5.Izracunati pozitive brojeve

const brojevi = [3,-1,7,2,-5,8];

const zbirPozitivnih = brojevi.reduce((akumulator,br) =>{
    return (br > 0) ? akumulator + br : akumulator
},0);

console.log("5.Suma pozitivnih brojeva");
console.log(zbirPozitivnih);