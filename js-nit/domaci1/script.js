let stariNaslov = document.getElementById('naslov');

stariNaslov.textContent = 'Novi naslov';

let opis = document.querySelector('.opis');

opis.style.color = 'blue';

let podNaslov = document.querySelector('.podnaslov');

podNaslov.style.fontSize = '40px';

let kutija = document.getElementById('kutija');

kutija.innerHTML = '<p>Ovo je tekst unutar kutije</p>';

let prvi = document.querySelector('div');

prvi.textContent = 'Ja sam prvi!';

let items = document.querySelectorAll('.item');

console.log(items);

let kvadrati = document.querySelectorAll('.kvadrat');

console.log(kvadrati);

kvadrati.forEach((kvadrat) =>{
    kvadrat.style.backgroundColor = 'orange';
    kvadrat.style.width = '100px';
    kvadrat.style.height = '100px';

    console.log("Kvadrat:" + kvadrat);
});