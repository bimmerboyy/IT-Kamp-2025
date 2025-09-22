/*

function isParan(broj){
    if(broj % 2 == 0){
        console.log("Broj je paran")
    }
    else{
        console.log("Broj je neparan");
    }
}


isParan(4);


let brojevi = [10,30,75,45,32,5]

let zbir = 0;

brojevi.forEach(function (broj){
    zbir += broj;
});

console.log(zbir);


let person = prompt("Unesite vase ime");

if(person != NULL){
    console.log(person);
}
*/

/*
let student = {
    ime:'Tarik',
    prezime:'Kucevic',
    godine:'23',
    prosek:'8.7',
    fakultet: 'DUNP'

};


for(mucenik in student){
    console.log(student[mucenik]);
}
*/


/*

let automobili = {
    bmw: ['M3','2018','70000'],
    audi: ['RS7','2024','120000'],
    porshce: ['GT3','2020','200000'],
    mercedes: ['SLK 63','2016','85000'],
};

let prosecnaCena = 0;
let zbirCena = 0;

let podaci_vozilu;

for(automobil in automobili){
    // console.log(automobil);

    podaci_vozilu = automobili[automobil];



    zbirCena += parseInt(podaci_vozilu[2]);
    
}

let automobili_duzina = Object.keys(automobili).length;

prosecnaCena = zbirCena / automobili_duzina;

console.log(prosecnaCena);


*/

//usd -> rsd i rsd -> usd

/*
let konvertovaniNovac = 0;
function konvertuj(baznaValuta,iznos){
    if(baznaValuta === 'rsd'){
      konvertovaniNovac =  iznos * 0.01;
      console.log(`${iznos} rsd je:${konvertovaniNovac} usd `);
    }
    else{
        konvertovaniNovac = iznos * 99.61;
        console.log(`${iznos} usd je:${konvertovaniNovac} rsd `);
    }

    

}


konvertuj('usd',200);
konvertuj('rsd',200);

*/
/*
let nekretnine = 
    stan: 70000,
    kuca: 15000,
    plac: 30000
};


function racunanje_mesecne_rate(godine,vrsta_nekretnine,kamata){

    let mjeseci = godine * 12;
    let rata = nekretnine[vrsta_nekretnine] / mjeseci;
    let godistnja_kamata = 0;
    rata = rata.toFixed(2);
    godistnja_kamata = rata * 12 * (kamata / 100);
    console.log("Godisnja kamata iznosi:" + godistnja_kamata);
    console.log("Mjesecna rata za " + vrsta_nekretnine + " iznosi " + rata + " na " + godine +  " godina");

}

racunanje_mesecne_rate(15,'kuca',5);

racunanje_mesecne_rate(5,'plac',10);

racunanje_mesecne_rate(20,'kuca',15);

*/

/*

let bankovni_racun = {
    banka: 'UniCredit Bank',
    broj_kartice:'3453 2345 1574 2355',
    cvv:'455',
    datum:'31/07',
    iznos:1000
};

 let trenutno_stanje;
 let novo_stanje;
function uplati(iznos){
    trenutno_stanje = bankovni_racun.iznos;
    novo_stanje = trenutno_stanje + iznos;
    console.log(novo_stanje);

    for(racun in bankovni_racun){
        bankovni_racun.iznos = novo_stanje;
    }
    
}

function podigni(iznos){
    trenutno_stanje = bankovni_racun.iznos;
    novo_stanje = trenutno_stanje - iznos;
    console.log(novo_stanje);

    for(racun in bankovni_racun){
        bankovni_racun.iznos = novo_stanje;
    }
    
}

uplati(12)
podigni(100)


for(racun in bankovni_racun){
    console.log(bankovni_racun[racun])
}

*/