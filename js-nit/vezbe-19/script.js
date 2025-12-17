const form = document.getElementById('deletePostForm');
const rezultat = document.getElementById('rezultat');

form.addEventListener('submit', async function (event){
    event.preventDefault();

    const postId = document.getElementById('postId').value;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        method: 'DELETE',
    });

    if(response.ok){

        rezultat.innerHTML = `
        <h3>Server je vratio</h3>
        <p><strong>Status:</strong> ${response.status}</p>
        <p><strong>Status:</strong>Post sa ID-jem ${postId}</p>
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