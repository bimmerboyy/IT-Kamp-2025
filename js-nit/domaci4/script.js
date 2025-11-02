let input = document.querySelector('#input');
let tekst = document.querySelector('.tekst');

input.addEventListener('input',(event)=>{
    if(event.target.value === '') console.log('polje je prazno');
    tekst.textContent = event.target.value;
});


 const toDoInput = document.querySelector('#toDoInput');
 const ubaci = document.querySelector('.ubaci');
  const obrisi = document.querySelector('.obrisi');
 const zadaci = document.querySelector('.zadaci');
 let li,checkbox;



 ubaci.addEventListener('click',()=>{
    if(toDoInput.value === null) alert('Unesi zadatak')
    li = document.createElement('li');
    li.textContent = toDoInput.value;
    checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    li.appendChild(checkbox);
    zadaci.appendChild(li);
    toDoInput.value = ''; 
 });


obrisi.addEventListener('click', () => {
    const elementiListe = zadaci.querySelectorAll('li');

    if (elementiListe.length === 0) {
        alert('Lista je prazna');
        obrisano = 0;
        return;
    }

    let obrisano = 0;

    for (let i = 0; i < elementiListe.length; i++) {
        const li = elementiListe[i];
        const checkbox = li.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            li.remove();
            obrisano++;
        }
    }

    if (obrisano === 0) {
        alert('Nijedan zadatak nije označen!');
    } else {
        console.log(`${obrisano} zadatak(a) obrisano`);
    }
});


