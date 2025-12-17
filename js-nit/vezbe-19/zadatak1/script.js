//Napravi 3 forme za brisanje podataka sa DELETE metodom /comments,/todos,albums.


const form = document.querySelector('#commentPostForm');
const rezultat = document.querySelector('#rezultat');

    

form.addEventListener('submit',async function (event){
    event.preventDefault();

    const commentId = document.querySelector('#commentId').value;
    

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${commentId}`,{
        method:'DELETE',
    });

    if(response.ok){

        rezultat.innerHTML = `
        <h3>Server je vratio</h3>
        <p><strong>Status:</strong> ${response.status}</p>
        <p><strong>Status:</strong>Post sa ID-jem ${commentId}</p>
        `
    }
    else{
        rezultat.innerHTML = `
        <h3>Greska</h3>
        <p><strong>Status:</strong> ${response.status}</p>
        <p><strong>Status:</strong>Doslo je do greske pri brisanju</p>`
    }

    console.log('Status odgovora:', response.status);
    
});

