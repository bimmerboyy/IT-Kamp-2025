const img = document.querySelectorAll('img');



  for(let i = 0;i < img.length;i++){
    img[i].addEventListener('click',(event) =>{
    console.log(event.target);
    let item = event.target.parentElement;
    item.style.border = '1px solid black';
    let next = item.nextElementSibling;
    next.style.background = 'yellow';
    let previous = item.previousElementSibling;
    next.style.background = 'blue';

  
});
}

