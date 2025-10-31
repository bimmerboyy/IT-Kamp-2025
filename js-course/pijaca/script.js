let dodaj1 = document.querySelector('.dodaj1');
let kolicina1 = document.querySelector('.kolicina1');
let cena1 = document.querySelector('.centriranje .artikal .naziv p span');
let izracunaj = document.querySelector('.korpa .ukloni p');
let total = document.querySelector('.korpa .total p');
let ukloni1 = document.createElement('button');
let nazivPovrca = document.querySelector('.korpa .ukloni h3');
let povrce1 = document.querySelector('.povrce .centriranje .artikal .naziv h3');
let rezultat1 = 0;
let finalniRezultat = 0;
 

let dodaj2 = document.querySelector('.dodaj2');
let kolicina2 = document.querySelector('.kolicina2');
let cena2 = document.querySelector('.centriranje2 .artikal .naziv p span');
let ukloni2 = document.createElement('button');
let povrce2 = document.querySelector('.povrce .centriranje2 .artikal .naziv h3');
let rezultat2 = 0;



dodaj1.addEventListener('click',()=>{
    if(kolicina1.value > 0){
        dodaj1.disabled = 'true';
    }
    rezultat1 = parseInt(cena1.innerHTML) * kolicina1.value;
    izracunaj.textContent = `$${cena1.innerHTML} x ${kolicina1.value} = $${rezultat1}`; 
    finalniRezultat += rezultat1; 
    total.textContent = `Total: $${finalniRezultat}`;
    nazivPovrca.textContent = `${povrce1.innerHTML}`;
    ukloni1.textContent = 'Ukloni';
    ukloni1.style.marginLeft = '10px';
    izracunaj.appendChild(ukloni1); 
});

ukloni1.addEventListener('click',()=>{
    izracunaj.remove();
    nazivPovrca.remove();
    finalniRezultat -= rezultat1;
    total.textContent = `Total: $${finalniRezultat}`;
    dodaj1.removeAttribute('disabled')
    
});


dodaj2.addEventListener('click',()=>{
    if(kolicina2.value > 0){
        dodaj1.disabled = 'true';
    }
    rezultat1 = parseInt(cena1.innerHTML) * kolicina.value;
    izracunaj.textContent = `$${cena1.innerHTML} x ${kolicina.value} = $${rezultat1}`; 
    finalniRezultat += rezultat1; 
    total.textContent = `Total: $${finalniRezultat}`;
    nazivPovrca.textContent = `${povrce.innerHTML}`;
    ukloni1.textContent = 'Ukloni';
    ukloni1.style.marginLeft = '10px';
    izracunaj.appendChild(ukloni1); 
});


/*

const products = document.querySelectorAll(".product");
const cartItems = document.querySelector(".cart .items");
const totalField = document.querySelector(".cart .total");

let total = 0;

products.forEach(product => {
    
    const name = product.querySelector(".name").textContent;
    const price = product.querySelector(".price").textContent;
    const qtyInput = product.querySelector(".qty");
    const addBtn = product.querySelector(".add");

    addBtn.addEventListener("click", () => {
        const qty = Number(qtyInput.value);
        const cost = qty * Number(price);

        total += cost;
        totalField.textContent = `Total: $${total}`;

        addBtn.disabled = true;

        // Element u korpi
        const item = document.createElement("div");
        item.className = "cart-item";
        item.innerHTML = `
            <p>${name}: $${price} x ${qty} = $${cost}</p>
            <button class="remove">Ukloni</button>
        `;

        cartItems.appendChild(item);

        // Uklanjanje
        const removeBtn = item.querySelector(".remove");
        removeBtn.addEventListener("click", () => {
            total -= cost;
            totalField.textContent = `Total: $${total}`;
            item.remove();
            addBtn.disabled = false;
        });
    });
});
*/