function sabiranje(a,b){
    console.log(a + b);
}
sabiranje(5,6);

function oduzimanje(a,b){
    console.log(a - b);
}
oduzimanje(6,5);

function pozdrav(ime){
    console.log("Zdravo " + ime);
}
pozdrav("Petar");


// (function main() {
//     console.log('Hello World');
// }());


const pozdrav2 = (ime,prezime,godine) => { 
     return `Zdravo,ja sam ${ime} ${prezime} i imam ${godine} godina`;
};

console.log(pozdrav2("Nikola","Nikolic",22));

//Nadji najveci broj u nizu

const najveci_broj = (niz) =>{
    let max = niz[0];
    for(let i = 0;i <= niz.length;i++){    
        if(niz[i] > max){
            max = niz[i];
        }
    }
     return `Najveci broj u nizu je ${max}`;
};

let niz = [3,7,9,3,4,2,1];

console.log(najveci_broj(niz));



const najmanji_broj = (niz) =>{
    let min = niz[0];
    for(let i = 0;i <= niz.length;i++){    
        if(niz[i] < min){
            min = niz[i];
        }
    }
     return `Najmanji broj u nizu je ${min}`;
};

console.log(najmanji_broj(niz));

