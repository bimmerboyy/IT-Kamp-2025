const list = document.querySelector('#student-list');


//sibling

const firtsLi = list.firstElementChild;
const lastLi = list.lastElementChild;

//1)parentElement primer

console.log('parent element of list',list.parentElement); //<div class='container'></div>

console.log('parentNode list of list',list.parentNode); //<div class='container'></div>

console.log('closest of list',list.closest('div')); //<div class='container'></div>


//2)Children primeri

console.log('children of list',list.children); //HTMLCollection -> li,li

console.log('first child',list.firstElementChild); //prvi li

console.log('last child',list.lastElementChild); //poslednji li

// 3) sibling primer 

console.log('fist next sibling',firtsLi.nextElementSibling); //drigi li

console.log('last previous sibling',lastLi.previousElementSibling) //prvi li

console.log(lastLi.previousElementSibling.parentElement.previousElementSibling); //lastLi-poslednji li,prvi li,ul,->h2

//Delegacija dogadjaja:jedan listener za celu listu

list.addEventListener('click',e => {
    //---------REMOVE---------

    if(e.target.classList.contains('btn-remove')){
        //ides gore do li

        const li = e.target.parentElement;

        //Prikaz kako bi smo izvadili ID iz reda
        const id = li.querySelector('.id')?.textContent?.trim();

        //realno: fetch(/students/${id},{method:DELETE})

        //ukloni sa strane klijenta 
        li.remove();
        return;
    }

    //---------EDIT---------

    if(e.target.classList.contains('btn-edit')){
        //ides gore do li

        const li = e.target.parentElement;
        const nameSpan = li.querySelector('.name');

        const newName = prompt('Novo ime',nameSpan.textContent);

        if(newName){
            nameSpan.textContent = newName;
        }

        //realno fetch(/students/${id}.{method:'PUT'|'PATCH',body:JSON.stringify({name:newName})})


        return;
        
    }


    //---------KLIKNUT JE SAM LI---------

    if(e.target.tagName === 'li'){
        //ides gore do li

        const clickedLi = e.target;
        const next = clickedLi.nextElementSibling;
        const prev = clickedLi.previousElementSibling;

        if(next){
            next.style.background = 'lightgreen';
        }
        if(prev){
            prev.style.background = 'lightblue';
        }

        

        return;
        
    }



   
});


