const dugme = document.querySelector('#dugme');
const naslov = document.querySelector('#naslov')

dugme.addEventListener('click',()=>{
    naslov.textContent = 'Dugme je kliknuto';
});



const green = document.querySelector('#green');
const red = document.querySelector('#red');
const blue = document.querySelector('#blue');

green.addEventListener('click',() =>{
    document.body.style.backgroundColor = 'green';
});


red.addEventListener('click',() =>{
    document.body.style.backgroundColor = 'red';
});

blue.addEventListener('click',() =>{
    document.body.style.backgroundColor = 'blue';
});

const status = document.querySelector('#status');

const yellow = document.querySelector('#yellow');
const pink = document.querySelector('#pink');
const black = document.querySelector('#black');



yellow.addEventListener('click',(event) =>{
    document.body.style.backgroundColor = 'yellow';

    status.textContent = 'Trenutna boja je zuta';

    console.log(event.target.targetName);
    console.log(event.target.textContent);
});


pink.addEventListener('click',() =>{
    document.body.style.backgroundColor = 'pink';

    status.textContent = 'Trenutna boja je pink';
});

black.addEventListener('click',() =>{
    document.body.style.backgroundColor = 'black';


    status.textContent = 'Trenutna boja je black';

    status.style.color = 'white';
});

const glavniNaslov = document.querySelector('#glavniNaslov');

const povecaj = document.querySelector('#povecaj');
const smanji = document.querySelector('#smanji');
const promeniBoju = document.querySelector('#promeniBoju');



povecaj.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(glavniNaslov).fontSize);
    glavniNaslov.style.fontSize = (currentSize + 10) + 'px';
    
});

smanji.addEventListener('click', () => {
    let currentSize = parseInt(window.getComputedStyle(glavniNaslov).fontSize);
    glavniNaslov.style.fontSize = (currentSize - 10) + 'px';
    
});


let nizBoja = ['red','blue','green','purple'];

promeniBoju.addEventListener('click',(event)=>{
    let index = Math.floor(Math.random()*nizBoja.length);
    glavniNaslov.style.color = nizBoja[index];
    
});



const klikni = document.querySelector('#klikni');
const brojac = document.querySelector('#brojac');
let counter = 0;

klikni.addEventListener('click',(event)=>{
    counter++;
    brojac.textContent = `Klikova:${counter}`;
});
