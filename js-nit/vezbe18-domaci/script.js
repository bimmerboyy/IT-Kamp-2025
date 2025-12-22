/*Za domaci napraviti 4 forme za pravljenje podataka sa POST metodom: /comments, /todos, /albums i /users.
*/

urls = [
    'https://jsonplaceholder.typicode.com/users'
]

async function parallelFetch() {
  const res = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
  return res;
}

console.log(parallelFetch());


const form = document.getElementById('userForm');
const rezultatDiv = document.getElementById('rezultat');


form.addEventListener('submit',async function (event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const zipCode = document.getElementById('zipCode').value;

    const response = await fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:name,
            username:username,
            email:email,
            address:[city,street,zipCode]
        })
    })

    const data = await response.json();

    rezultatDiv.innerHTML = `
    <h3>Server je bratio</h3>
    <p><strong>ID:</strong>${data.id}</p>
    <p><strong>Naslov:</strong>${data.name}</p>
    <p><strong>Sadrzaj:</strong>${data.username}</p>
    <p><strong>User ID:</strong>${data.email}</p>
    <p><strong>User ID:</strong>${data.address}</p>
    `;

    console.log('Odgovor servera:',data);

})