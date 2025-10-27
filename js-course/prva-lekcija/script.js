// console.log("Pozdrav iz konzole") //odnosi se na konzolu

// document.write("pozdrav sa satranice") // odnosi se na stranicu

//window.alert("pozdrav iz pop-apa") // odnosi se na prozor

// console.error("Error")

// console.warn("Warn")

// console.log(5 + 5)

// console.log(5 === 6)

// window.open()


//document.getElementById('poruka').innerText = 'Pozdrav!' //Selektovanje elementa po id-iju i upisivanje texta


//ovo je kod koji ce u konzoli ispisati test.
//console.log('test');

/*Ovo je kod koji ce da uzme div elemet preko
 njegovog id-ija i onda ce da mu uspise ovaj cao text
*/

// document.getElementById('poruka').innerText = 'Cao';


//Varijable

//definisanje varijable
// let cysecor;
// //String
// cysecor = 'Subscribe na moj kanal!!!';

// let godine = '5';
// //Float
// let dani = 5.4

// let mjesec = 3;
//35 ce biti jer ce se samo nadodati string na broj
// let rezultat = mjesec + godine;

// console.log(cysecor);

// console.log(rezultat);

// let cysecor_broj_subscribera = "Cysecor ima 45 hiljada subscribera";
// //Ako zelimo da saznamo tip nase varijable
// console.log(typeof(godine));

// console.log(cysecor_broj_subscribera);

/*
let neki_broj = 65;

let drugi_broj = '5';

console.log(typeof(drugi_broj))

drugi_broj = parseInt(drugi_broj);

console.log(typeof(drugi_broj))

let rezultat = neki_broj + drugi_broj;

console.log(rezultat);

*/



//Zamena brojeva uz pomicu temp varijable

/*
let prvi_broj = 5;

let drugi_broj = 10;

let treci_tmp;

console.log("Prvi broj " + prvi_broj);
console.log("Drugi broj " + drugi_broj);

treci_tmp = prvi_broj;
prvi_broj = drugi_broj;
drugi_broj = treci_tmp;

console.log("### POSLE ZAMENE ###")


console.log("Prvi broj " + prvi_broj);
console.log("Drugi broj " + drugi_broj);
console.log(treci_tmp);

*/

/*
let prvi_broj = 5;
const drugi_broj = 10;

drugi_broj = prvi_broj; //Izbacice gresku jer pokusavamo da dodamo vrednost konstanti koja se ne moze menjati

console.log(drugi_broj);

*/

/* 

rad sa stringovima

let ime = "Cysecor";
let prezime = "Sigurnost";
let godine = 11;

console.log(ime);
console.log(prezime);
console.log(godine);

console.log("ove godine imam " + godine + " godina");

//let recenica = "Moje ime i prezime je " + ime + " " + prezime + " i imam "  + godine + " godina"

// godine++;

// let recenica = "Sledece godine cu imati " + godine + " godina";

godine += 2;

// recenica = "za dvije godine cu imati " + godine + " godina";

let recenica = `Ja sam ${ime} imam ${godine} godina`; 
console.log(recenica);

*/

/*
let prvi_broj = 10;

let drugi_broj = 5;

let treci_broj = 7;

let cetvrti_broj = 8;

console.log(prvi_broj > drugi_broj)

console.log(treci_broj > cetvrti_broj)
//Za and je bitno da su oba tacna da bi bilo tacno dok za ili je bitno samo da je jedan tacan
console.log((prvi_broj > drugi_broj) && (treci_broj > cetvrti_broj));

console.log((prvi_broj > drugi_broj) || (treci_broj > cetvrti_broj));

*/
/*
let prvi_broj =  5;
let drugi_broj = 10;
//If se izvrsava samo ako je true ukoliko nije ide na else
if(prvi_broj < drugi_broj){
    console.log("Prvi broj je manji od drugog");
}
else{
    console.log("Prvi broj nije manji od drugog");
}
*/

/*
let vreme = 21;

if(vreme < 10){
    console.log("Dobro jutro");
}
else if(vreme < 20){
    console.log("Dobar dan");
}
else{
    console.log("Dobro vece");
}

*/

// let mjesec = 9;
/*
if(mjesec === 1){
    console.log('Januar');
}
else if(mjesec === 2){
    console.log('Februar');
}
*/

/*

switch(mjesec){
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Avgust");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("Oktobar");
        break;
    case 11:
        console.log("Novembar");
        break; 
    case 12:
        console.log("Decembar");
        break;
    default:
        console.log("Nedozvoljen mesec");
        break;
}

*/

/*
let novcanice = 25; // 25 novcanica
let vrijednost_novcanice = 10; // 10 eura

//borjac


//izbrojane novcanice

let izbrojane_novcanice = 0;
//Broji novcanice sve dok je brojac manji od broja novcanica

while(izbrojane_novcanice < novcanice){
    izbrojane_novcanice++;
}

console.log(izbrojane_novcanice);

console.log(izbrojane_novcanice * vrijednost_novcanice);

*/


/*

let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10];


let izbrojane_novcanice = 0;

let broj_novacnica = novcanice.length;

// console.log(`Broj izbrojanih novcanica je:${broj_novacnica}`);
let brojac = 0;
while(brojac < broj_novacnica){
    console.log(novcanice[brojac]);
    brojac++;
}

*/


// let novcanice = [10, 5, 20, 50, 5, 10, 100, 20, 50, 5, 10];


// let izbrojane_novcanice = 0;

// let broj_novacnica = novcanice.length;

// let ukupno_novca = 0;

//Prvi nacin

/*
for(let brojac = 0;brojac < broj_novacnica;brojac++){
    console.log(novcanice[brojac]);

    ukupno_novca += novcanice[brojac];

}

console.log(ukupno_novca);
*/

//Drugi nacin
/*
for(let brojac in novcanice){
    console.log(novcanice[brojac]);

    ukupno_novca += novcanice[brojac];

}

console.log(ukupno_novca);

*/

//Treci nacin

// for(let novcanica of novcanice){
//     console.log(novcanica);
// }


// let automobili = ['Audi', 'BMW', 'Porchse', 'Mercedes']
//Cetvrti nacin
// for(let automobil of automobili){
//     console.log(automobil)
// }

//Peti nacin

// automobili.forEach(function (automobil) {
//     console.log(automobil);
// });

// let automobili = {
//    audi: ['70000','2017','Q7'],
//    bmw: ['50000','2018','330D'],
//    porsche: ['60000','2016','Boxter'],
//    mercedes: ['100000','2019','S400']
// };
/*
for(automobil in automobili){
    let naziv = automobil;
    let podaci_vozilu = automobili[automobil];

    console.log(`${naziv} model: ${podaci_vozilu[2]},
        godiste ${podaci_vozilu[1]}
        cena:${podaci_vozilu[0]} eura`);
}
        */

/*
console.log(automobili.audi)

let osoba = {
    ime:'Cysecor',
    prezime:'Sigurnost',
    godine:'12',
    grad:'Peking'
};

console.log(`
            Ime:${osoba.ime}
            Prezime:${osoba.prezime}
            Godine:${osoba.godine}
            Grad:${osoba.grad}`);


*/

// let nekretnine = {
//     stan: 70000,
//     kuca: 15000,
//     plac: 30000
// };
/*
//STAN

let godine = 10

let mjeseci = godine * 12;
let rata = nekretnine.stan / mjeseci;
rata = rata.toFixed(2);

console.log(mjeseci + " mjeseci")
console.log(rata + "eura");
console.log("Mjesecna rata za stan iznosi " + rata + " na " + godine +  " godina");

//PLAC

godine = 5;
mjeseci = godine * 12;
rata = nekretnine.plac / mjeseci;

console.log("--------------");
console.log(mjeseci + " mjeseci")
console.log(rata + "eura");
console.log("Mjesecna rata za plac iznosi " + rata + " na " + godine +  " godina");


//KUCA


godine = 20;
mjeseci = godine * 12;
rata = nekretnine.kuca / mjeseci;

console.log("--------------");
console.log(mjeseci + " mjeseci")
console.log(rata + "eura");
console.log("Mjesecna rata za kuca iznosi " + rata + " na " + godine +  " godina");
*/

//Da se ne bi ponavljao kod imamo funkcije


//ova funkicja izracunava mesecnu ratu za nekretninu za odredjeni broj godina

/*
function racunanje_mesecne_rate(godine,vrsta_nekretnine){

    let mjeseci = godine * 12;
    let rata = nekretnine[vrsta_nekretnine] / mjeseci;
    rata = rata.toFixed(2);
    console.log("Mjesecna rata za " + vrsta_nekretnine + " iznosi " + rata + " na " + godine +  " godina");

}

racunanje_mesecne_rate(15,'kuca');

racunanje_mesecne_rate(5,'plac');

racunanje_mesecne_rate(20,'kuca');

*/

/*
let brend = document.getElementsByTagName('span');

for(let auto of brend){
    console.log(auto.innerText);
}

console.log('-------------------')


let modeli = document.getElementsByClassName('automobil-model');

for(let model of modeli){
    console.log(model.innerText);
}

let najbolji = document.getElementById('recenica');

console.log('-------------------')


console.log(najbolji.innerText)

console.log('-------------------')

*/

/*
let brend = document.querySelectorAll('span');

console.log(brend);


for(let auto of brend){
    console.log(auto.innerText);
}
*/

/*
//Selektovanje element po idiju i brisanje
let recenica = document.querySelector('#recenica');
recenica.remove();

let novi_el = document.createElement('div');
novi_el.classList = 'novi-element'; //Dodajemo klasu
novi_el.innerHTML = '<hr> Pozdrav'; //Dodajemo html i text
let body = document.querySelector('body'); //Selektujemo body tag

body.appendChild(novi_el); //Na kraju body taga dodajemo nas element


console.log(novi_el);
*/

