let kliknuto = false;

const img = document.querySelectorAll('img');


  
  for(let i = 0;i < img.length;i++){
    img[i].addEventListener('click',(event) =>{
    kliknuto = true;
    console.log(event.target);
    let item = event.target.parentElement;
    item.style.border = '1px solid black';
    let next = item.nextElementSibling;
    next.style.background = 'yellow';
    let previous = item.previousElementSibling;
    next.style.background = 'blue';
  
});
}

const h3 = document.querySelectorAll('h3');


h3.forEach((naslov)=>{
  naslov.addEventListener('click',(e) =>{
    e.target.style.textDecoration = 'underline';

    e.target.parentElement.style.filter = "blur(5px)";
  });
});



const remove = document.querySelectorAll('.remove');


remove.forEach((r)=>{
  r.addEventListener('click',(e) =>{
      e.target.parentElement.remove();
      console.log('radi');
  });
});


const add = document.querySelector('#add');
const gallery = document.querySelector('#gallery');

add.addEventListener('click',e =>{
let message,brojac = 4;
let grad = window.prompt(message);
let html = `<div class="item">
        <h3>${grad}</h3>   
        <img src="https://picsum.photos/100?random=${brojac}" />
        <button class="remove">❌</button>
      </div>  
    </div>`;
brojac++;
gallery.insertAdjacentHTML('beforeend',html);


  
});

if (kliknuto) {
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', (event) => {
      kliknuto = false;

      if (img[i]) {   // zaštita
        img[i].style.all = 'initial';
      }
    });
  }
}


