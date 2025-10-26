const paragraph = document.createElement('p');
paragraph.textContent = "Paragraf dodat iz JS-a";

document.body.appendChild(paragraph);

const obrisiNaslov = document.createElement('button');

obrisiNaslov.textContent = 'Obrisi naslov';

obrisiNaslov.addEventListener('click',()=>{
    const title = document.querySelector('title');
    title.remove();
});

document.body.appendChild(obrisiNaslov);

const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Ovo je parargraph';

const dodaj = document.createElement('button');
dodaj.textContent = 'Dodaj';

const obrisi = document.createElement('button');
obrisi.textContent = 'Obrisi';

dodaj.addEventListener('click',()=>{
    document.body.appendChild(paragraph1);
    
});

obrisi.addEventListener('click',()=>{
    paragraph1.remove();
    
});


document.body.appendChild(dodaj);
document.body.appendChild(obrisi);





const red = document.createElement('button');
const green = document.createElement('button');
const blue = document.createElement('button');

red.textContent = 'red';
green.textContent = 'green';
blue.textContent = 'blue';

red.addEventListener('click',(event)=>{
    document.body.style.backgroundColor = 'red';
});

green.addEventListener('click',(event)=>{
    document.body.style.backgroundColor = 'green';
});
blue.addEventListener('click',(event)=>{
    document.body.style.backgroundColor = 'blue';
});


document.body.appendChild(red);
document.body.appendChild(green);
document.body.appendChild(blue);

let div = document.createElement('div');

div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'gray';
div.style.borderRadius = '20px';

document.body.appendChild(div);

const klikniMe = document.createElement('button');
const nekiParagraf = document.querySelector('p');
klikniMe.textContent = 'Klikni me';

klikniMe.addEventListener('click',()=>{
    nekiParagraf.textContent = 'Kliknuto!';
});

document.body.appendChild(klikniMe);

const img = document.createElement('img');

img.setAttribute('src','https://www.shutterstock.com/shutterstock/photos/159086927/display_1500/stock-photo-black-rowan-berries-on-branches-with-red-leaves-on-an-abstract-background-of-autumn-159086927.jpg');

img.style.width = '300px';
img.style.height = '300px';

document.body.appendChild(img);

const beliTekst = document.createElement('button');
const siviTekst = document.createElement('button');
const crniTekst = document.createElement('button');

beliTekst.textContent = 'Beli tekst';
siviTekst.textContent = 'Sivi tekst';
crniTekst.textContent = 'Crni tekst';



beliTekst.addEventListener('click',()=>{
    document.body.style.color = 'white';
});

siviTekst.addEventListener('click',()=>{
    document.body.style.color = 'gray';
});

crniTekst.addEventListener('click',()=>{
    document.body.style.color = 'black';
});

document.body.appendChild(beliTekst);
document.body.appendChild(siviTekst);
document.body.appendChild(crniTekst);

const dodajParagraf = document.createElement('button');
dodajParagraf.textContent = 'dodaj paragraf';

dodajParagraf.addEventListener('click',()=>{
    for(let i = 0;i < 5;i++){
        let p = document.createElement('p');
        p.textContent = `Ovo je paragraf ${i + 1}`;
        document.body.appendChild(p);
    }
});

document.body.appendChild(dodajParagraf);