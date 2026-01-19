const putForm = document.getElementById('putForm');
const patchForm = document.getElementById('patchForm');
const rezultatDiv = document.getElementById('rezultat');

// ==================== UCITAVANJE POSTOJECIH PODATAKA ====================

// Funkcija za ucitavanje posta (realan scenario - prvo vidimo sta menjamo)
async function loadUsers() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await response.json();
  return Promise.resolve(users);
}
loadUsers().then(users => {
  console.log(users);
});



// Ucitaj podatke za PUT formu
document.getElementById('loadUserBtn').addEventListener('click', async function () {
  const userId = document.getElementById('userId').value;

  const user = await loadPost(userId);

  // Popunjavamo formu sa postojecim podacima
  document.getElementById('name').value = user.name;
  document.getElementById('username').value = user.username;
  document.getElementById('email').value = user.email;

  rezultatDiv.innerHTML = `<p>Učitani podaci za usera ${userId}. Sada možete izmeniti vrednosti.</p>`;
});

// Ucitaj podatke za PATCH formu
// document.getElementById('loadPatchBtn').addEventListener('click', async function () {
//   const postId = document.getElementById('patchPostId').value;

//   const post = await loadPost(postId);

//   // Prikazujemo postojece podatke (ali ne popunjavamo formu - PATCH salje samo ono sto se menja)
//   rezultatDiv.innerHTML = `
//     <h3>Trenutni podaci za post ${postId}:</h3>
//     <p><strong>Naslov:</strong> ${post.title}</p>
//     <p><strong>Sadržaj:</strong> ${post.body}</p>
//     <p><em>Popunite samo polja koja želite da promenite.</em></p>
//   `;
// });

// ==================== PUT METODA ====================

putForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const userId = document.getElementById('userId').value;
  const username = document.getElementById('username').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const street = document.getElementById('street').value;
  const suite = document.getElementById('suite').value;
  const zipcode = document.getElementById('zipcode').value;
  const lat = document.getElementById('lat').value;
  const lng = document.getElementById('lng').value;
  const bs = document.getElementById('bs').value;
  const catchPhrase = document.getElementById('catchPhrase').value;
  const companyName = document.getElementById('companyName').value;
  



  // PUT zahteva SVE podatke - zamenjuje ceo resurs
  const payload = {
    id: parseInt(userId),
    name: name,
    username: username,
    email: email,
    address: [city,street,suite,zipcode,`geo:${[lat,lng]}`],
    company:[bs,catchPhrase,companyName]
    
  };

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  rezultatDiv.innerHTML = `
    <h3>PUT - Server je vratio:</h3>
    <p><strong>ID:</strong> ${data.id}</p>
    <p><strong>Ime:</strong> ${data.name}</p>
    <p><strong>Username:</strong> ${data.username}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Address:</strong> ${data.address}</p>
    <p><strong>Company:</strong> ${data.company}</p>
    <p><em>Ceo resurs je zamenjen novim podacima.</em></p>
  `;

  console.log('PUT odgovor:', data);
});

// ==================== PATCH METODA ====================

patchForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const postId = document.getElementById('patchPostId').value;
  const title = document.getElementById('patchTitle').value;
  const body = document.getElementById('patchBody').value;

  // PATCH salje samo polja koja se menjaju
  const payload = {};

  // Dodajemo samo polja koja nisu prazna
  if (title.trim() !== '') {
    payload.title = title;
  }
  if (body.trim() !== '') {
    payload.body = body;
  }

  // Provera da li imamo sta da posaljemo
  if (Object.keys(payload).length === 0) {
    rezultatDiv.innerHTML = `<p style="color: red;">Morate popuniti bar jedno polje za PATCH zahtev!</p>`;
    return;
  }

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  rezultatDiv.innerHTML = `
    <h3>PATCH - Server je vratio:</h3>
    <p><strong>ID:</strong> ${data.id}</p>
    <p><strong>Naslov:</strong> ${data.title}</p>
    <p><strong>Sadržaj:</strong> ${data.body}</p>
    <p><strong>User ID:</strong> ${data.userId}</p>
    <p><em>Samo izmenjena polja su poslata: ${Object.keys(payload).join(', ')}</em></p>
  `;

  console.log('PATCH odgovor:', data);
  console.log('Poslati podaci:', payload);
});
