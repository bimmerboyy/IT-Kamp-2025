const image = document.getElementsByTagName('image');
//  

const crveniTekst = document.getElementById('crveni-tekst');

crveniTekst.textContent = "Ovaj tekst je crvene boje";

crveniTekst.style.color = "red";

const uzmiId = document.querySelector('#crveni-tekst');

const uzmiKlasu = document.querySelector('.klasa');

const uzmiTag = document.getElementsByTagName('p');


// console.log(uzmiId);
// console.log(uzmiKlasu);
// console.log(uzmiTag);

let skupDivova = document.querySelectorAll('.skup');

for(let i = 0;i <= skupDivova.length;i++){
    skupDivova[i].textContent = i+1;
}