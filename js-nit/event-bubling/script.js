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