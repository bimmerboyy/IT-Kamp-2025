const stavke = document.querySelector('.stavke');
const dodajStavku = document.querySelector('.dodaj-stavku');
let brojac = 0;

dodajStavku.addEventListener('click',()=>{
    brojac++;
    let stavka = document.createElement('li');
    stavka.textContent = 'stavka ' + brojac;
    stavke.appendChild(stavka);
});

const sakrij = document.querySelector('.sakrij');
const prikazi = document.querySelector('.prikazi');
const tekst = document.querySelector('.tekst');


sakrij.addEventListener('click',()=>{
    tekst.style.display = 'none';
});

prikazi.addEventListener('click',()=>{
    tekst.style.display = 'block';
});

let slika = document.querySelector('.slika');
let promeniSliku = document.querySelector('.promeni-sliku');

let nizPutanja = ['https://www.10naj.com/wp-content/uploads/2016/08/vecera_.jpg','https://www.10naj.com/wp-content/uploads/2016/08/monaliza_.jpg','https://www.10naj.com/wp-content/uploads/2016/08/zvezdananoc_.jpg'];

let counter = 0;

promeniSliku.addEventListener('click',()=>{
    if(counter >= 3){
        counter = 0;
    }
    slika.setAttribute('src',nizPutanja[counter]);
    counter++;

    

});