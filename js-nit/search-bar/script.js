// let search = document.querySelector('#search');
// let listaStudenata = document.querySelector('#listaStudenata');
// let li = listaStudenata.querySelectorAll('li');

// search.addEventListener('input', (event) =>{
//     let input = event.target.value.toLowerCase();
//     let lista = li.value.toLowerCase();
//     for(let items of li){
//     if(input.includes(lista)){
//         items.style.display = 'block';
//     }
//     else{
//         items.style.display = 'none';
//     }
//     }
   
// });



const nizProizvoda = [
    {naziv:'Kruska',cena:200,kategorija:'voce'},
    {naziv:'Cips',cena:150,kategorija:'grickalice'},
    {naziv:'Rumenko',cena:40,kategorija:'sladoled'},
    {naziv:'Jabuka',cena:140,kategorija:'voce'},
    {naziv:'Cokolada',cena:250,kategorija:'slatkisi'},
    {naziv:'Kikiriki',cena:170,kategorija:'grickalice'},
]

let searchProducts = document.querySelector('#searchProducts');
let listProducts = document.querySelector('#listProducts');


const render = list =>{
    listProducts.innerHTML = '';
    nizProizvoda.forEach(p =>{
        let li = document.createElement('li');
        li.textContent = p.naziv;
        listProducts.appendChild(li);
    });
    
}

render(nizProizvoda);

let listaProizvoda = listProducts.querySelectorAll('li');

searchProducts.addEventListener('input', (event) =>{
    let input = event.target.value.toLowerCase();
    const filteredArray = listaProizvoda.filter(p => p.naziv.toLowerCase().includes(input));

    render(filteredArray);
   
});



