let input = document.querySelector('#input');
let tekst = document.querySelector('.tekst');

input.addEventListener('input',(event)=>{
    if(event.target.value === '') console.log('polje je prazno');
    tekst.textContent = event.target.value;
});