// const dodaj = document.querySelector('#dodaj');
// const ime = document.querySelector('#newName');
// const grad = document.querySelector('#newCity');
// const godine = document.querySelector('#newAge');
// const studenti = document.querySelector('#studenti');
// let nizStudentata = [];

// dodaj.addEventListener('click',(event)=>{
//      event.preventDefault();

//     let li = document.createElement('li');
//     li.textContent = `${ime.value} ${grad.value} ${godine.value}`;
//     nizStudentata.push(li);
//     studenti.appendChild(li);
// for (let i = 0; i < nizStudentata.length; i++) {
//     console.log(nizStudentata[i].textContent);
// }


// });

// //Pretraga



// const render = list =>{
//     studenti.innerHTML = '';
//     nizStudentata.forEach(s =>{
//         let li = document.createElement('li');
//         li.textContent = s;
//         studenti.appendChild(li);
//     });
    
// }

// render(nizStudentata);


// searchProducts.addEventListener('input', (event) =>{
//     let input = event.target.value.toLowerCase();
//     const filteredArray = nizStudentata.filter(p => p.naziv.toLowerCase().includes(input));

//     render(filteredArray);
   
// });




const dodaj = document.querySelector('#dodaj');
const ime = document.querySelector('#newName');
const grad = document.querySelector('#newCity');
const godine = document.querySelector('#newAge');
const studenti = document.querySelector('#studenti');
const searchInput = document.querySelector('#searchProducts'); // tvoje polje za pretragu
let nizStudentata = [];

// Dodavanje studenta
dodaj.addEventListener('click', (event) => {
    event.preventDefault();

    if (ime.value.trim() === '' || grad.value.trim() === '' || godine.value.trim() === '') {
        alert('Popuni sva polja!');
        return;
    }

    // Čuvaj podatke kao OBJEKAT, ne kao li element
    let student = {
        ime: ime.value.trim(),
        grad: grad.value.trim(),
        godine: godine.value.trim()
    };

    nizStudentata.push(student);
    render(nizStudentata);

    // Isprazni polja
    ime.value = '';
    grad.value = '';
    godine.value = '';
});

// Funkcija za renderovanje liste
const render = (lista) => {
    studenti.innerHTML = '';
    lista.forEach(s => {
        let li = document.createElement('li');
        li.textContent = `${s.ime} - ${s.grad} - ${s.godine}`;
        studenti.appendChild(li);
    });
};

// Pretraga studenata po imenu ili gradu
searchInput.addEventListener('input', (event) => {
    const input = event.target.value.toLowerCase();

    const filtrirani = nizStudentata.filter(s => 
        s.ime.toLowerCase().includes(input) || 
        s.grad.toLowerCase().includes(input)
    );

    render(filtrirani);
});
