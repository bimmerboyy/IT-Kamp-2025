div1 = document.querySelector('.div1');
div2 = document.querySelector('.div2');

click = document.querySelector('.click');

div1.addEventListener('click',()=>{
    console.log('Div1');
});

div2.addEventListener('click',(event)=>{
    event.stopPropagation();
    console.log('Div2');
});

click.addEventListener('click',()=>{
    console.log('button');
});

const nekiDiv = document.querySelector('.neki-div');

nekiDiv.addEventListener('click',(event)=>{
    console.log(event.target.tagName);
});

const input = document.querySelector('#input');
const tekstIzInputa = document.querySelector('.tekst-iz-inputa');


input.addEventListener('input',()=>{
   tekstIzInputa.textContent = input.value;

   
});

//To-Do Lista
//Imamo input imamo button i imamo ul
//Hocemo kada kliknemo button samo ako ima text u njemu da dodamu kao neku stavku li u html-u
 const toDoInput = document.querySelector('#toDoInput');
 const ubaci = document.querySelector('.ubaci');
 const zadaci = document.querySelector('.zadaci');

 console.log(zadaci);

 ubaci.addEventListener('click',()=>{
    if(toDoInput.value === null) alert('Unesi zadatak')
       let li = document.createElement('li');
    li.textContent = toDoInput.value;
    zadaci.appendChild(li);
    toDoInput.value = ''; 
 });
