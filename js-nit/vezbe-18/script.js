const form = document.getElementById('postForm');
const rezultatDiv = document.getElementById('rezultat');


form.addEventListener('submit',async function (event){
    event.preventDefault();

    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userid').value;

    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title:title,
            body:body,
            userId:userId,
        })
    })

    const data = await response.json();

    rezultatDiv.innerHTML = `
    <h3>Server je bratio</h3>
    <p><strong>ID:</strong>${data.id}</p>
    <p><strong>Naslov:</strong>${data.title}</p>
    <p><strong>Sadrzaj:</strong>${data.body}</p>
    <p><strong>User ID:</strong>${data.userId}</p>
    `;

    console.log('Odgovor servera:',data);

})


urls = [
    'https://jsonplaceholder.typicode.com/todos'
]

async function parallelFetch() {
  const res = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
  return res;
}

console.log(parallelFetch());


const formZaTodo = document.getElementById('todoForm');
const rezultatZaToDo = document.getElementById('rezultatZaToDo');


formZaTodo.addEventListener('submit',async function (event){
    event.preventDefault();

    const title = document.getElementById('titleZaTodo').value;
    const isCompleted = document.getElementById('isCompleted').checked;
    const userId = document.getElementById('useridZaTodo').value;

    const response = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title:title,
            completed:isCompleted,
            userId:userId,
        })
    })

    const data = await response.json();

    rezultatZaToDo.innerHTML = `
    <h3>Server je bratio</h3>
    <p><strong>ID:</strong>${data.id}</p>
    <p><strong>Naslov:</strong>${data.title}</p>
    <p><strong>Da li je kompletiran:</strong>${data.completed}</p>
    <p><strong>User ID:</strong>${data.userId}</p>
    `;

    console.log('Odgovor servera:',data);

})