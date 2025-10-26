const pokreniMe = (dugme) =>{
    
    let nazivDugmeta = dugme.innerText;
    let klasaDugmeta = dugme.className;


    let message = document.querySelector('#kliknutoDugme');
    message.innerText = nazivDugmeta + ' ' + klasaDugmeta;

    console.log(dugme);
}  


const testing = () =>{
    let linkovi = document.querySelectorAll('section .moj-link');

    console.log(linkovi);
}