/*1.Konvertovanje celzijusa u farenhajt
Formula je za konvertovanje celzijusa u farenhajt je 9/5 + 32
Potrebno je kreirati funkciju i u njoj konvertovati celzijus u farenhajt
*/


const celzijus_u_farenhajt = (celzijus) =>{
    let vrednost_u_farenhajt = (celzijus * 9/5) + 32;

    console.log(`Vrednost ${celzijus}°C je:${vrednost_u_farenhajt}°F`);
};


celzijus_u_farenhajt(5);

/*2.Preokreni niz
Potrebno je kreirati funkciju koja vraca rec "hello" i u samoj funkciji implementirati logiku
gde ces datu rec napasti naopako ("olleh")
.join().reverse().split()
*/ 


const preokreni_niz = (rec) =>{
    return rec.split('').reverse('').join('');
};


console.log(preokreni_niz("hello"));


//Napravi niz nekih reci i naci najduzu rec


const najduza_rec = (niz) => {
    let uzeta_rec;
    let niz_najduzih = [];
    let index;
    for(let i = 0;i <= niz.length - 1;i++){
        uzeta_rec = niz[i].split('');
        niz_najduzih.push(uzeta_rec.length);
    }
    let max = Math.max.apply(null,niz_najduzih);
    for(let i = 0;i <= niz_najduzih.length;i++){
        if(max == niz_najduzih[i]){
            index = i;
        }
    }
    console.log(niz[index]);
    
};


najduza_rec(['kratka','maloduza','najduzarecunizu']);

