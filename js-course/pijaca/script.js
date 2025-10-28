let dodaj1 = document.querySelector('.dodaj1');
let kolicina = document.querySelector('.kolicina1');
let cena1 = document.querySelector('.centriranje .artikal .naziv p span');
let izracunaj = document.querySelector('.korpa .ukloni p');
let total = document.querySelector('.korpa .total p');
let ukloni = document.querySelector('.korpa .ukloni button');
let rezultat1 = 0;
let finalniRezultat = 0;
dodaj1.addEventListener('click',()=>{
    if(kolicina.value > 0){
        dodaj1.style.cursor = 'not-allowed';
    }
    rezultat1 = parseInt(cena1.innerHTML) * kolicina.value;
    izracunaj.textContent = `$${cena1.innerHTML} x ${kolicina.value} = $${rezultat}`;  
    total.textContent = `Total: $${rezultat1}`;
    finalniRezultat += rezultat1; 
});

ukloni.addEventListener('click',()=>{
    izracunaj.remove();
    
});