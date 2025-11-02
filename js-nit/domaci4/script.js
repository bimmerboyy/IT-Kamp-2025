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
 let izabraniCheckovi;
 let imaCheckova = false;



 ubaci.addEventListener('click',()=>{
    if(toDoInput.value.trim() === ''){
        alert('Unesi zadatak')
        return;
    }  
    let li = document.createElement('li');
    li.textContent = toDoInput.value;
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            li.classList.toggle('done'); 
        } else {
            li.classList.toggle('done'); 
        }
    });
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
    imaCheckova = true;

    izabraniCheckovi = document.querySelectorAll('.zadaci li input');

    let obrisano = 0;
    
    for (let i = 0; i < elementiListe.length; i++) {
        const li = elementiListe[i];
        const checkbox = li.querySelector('input[type="checkbox"]');

        if (checkbox.checked) {
            checkbox.classList.add('done');
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







    









