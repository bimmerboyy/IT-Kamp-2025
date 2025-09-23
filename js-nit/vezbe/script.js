//Imamo niz brojeva
//Treba da izdvojimo sve parne brojeve u novi niz a sve neparne brojeve u drugi niz
let brojevi = [3,6,12,15,18,21];
let parni = [];
let neparni = [];

for(let i = 0;i <= brojevi.length;i++){
    if(brojevi[i] % 2 == 0){
        parni.push(brojevi[i]);
    }
    else{
        neparni.push(brojevi[i]);
    }
}

console.log("Parni\n--------");

parni.forEach(function (elemet){
    console.log(elemet);
});

console.log("Neparni\n--------");

parni.forEach(function (elemet){
    console.log(elemet);
});


//Izdvojiti najveci broj iz niza brojevi

let najveci_broj = brojevi[0];
let najmanji_broj = 1;

for(let i = 0;i < brojevi.length;i++){

    if((i+1) == brojevi.length){
        console.log("Najveci broj u nizu je:" +najveci_broj);
    }

    if(najveci_broj > brojevi[i + 1]){
        najveci_broj = brojevi[i]
    }
    else{
        
        najveci_broj = brojevi[i + 1];
        
    }
}

//Izdvojiti najmanji broj
let usao = 1;

for(let i = 0;i < brojevi.length;i++){

    if((i+1) == brojevi.length){
        console.log("Najmanji broj u nizu je:" + najmanji_broj);
    }

    if(najmanji_broj < brojevi[i + 1]){
        najmanji_broj = brojevi[i]
        usao = 0;
        
    }
    else{
        najmanji_broj = brojevi[i + 1];
        
    }
    
}

