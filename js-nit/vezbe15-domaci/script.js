/*1. Osnovni Async/Await Zadaci

Napraviti async funkciju loadAllUsers() koja će:

Preuzeti sve korisnike sa /users endpointa
Prikazati sve korisnike u konzoli
Koristiti try/catch za error handling
*/
// Primer:

//Zadatak 1.1 - Učitavanje i Prikaz Korisnika

const API_URL = 'https://jsonplaceholder.typicode.com';

async function loadAllUsers() {
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Greška:', error);
  }
}

loadAllUsers();

/*
Zadatak 1.2 - Učitavanje Specifičnog Korisnika
Napraviti async funkciju getUser(id) koja će:

Preuzeti korisnika sa određenim ID-om
Prikazati sve podatke o korisniku
Koristiti try/catch za error handling
Pozvati funkciju sa ID-om 5
*/


async function loadUserById(id) {
  try {
    const response = await fetch(`${API_URL}/users/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Greška:', error);
  }
}

loadUserById(3);

/*
Zadatak 1.3 - Učitavanje Postova
Napraviti async funkciju getUserPosts(userId) koja će:

Preuzeti sve postove određenog korisnika
Prikazati broj postova i njihove naslove
Koristiti query string: /posts?userId=${userId}
*/

async function getUserPosts(userId) {
  try {
    const userResponse = await fetch(`${API_URL}/users/${userId}`);
    const user = await userResponse.json();

    const postResponse = await fetch(`${API_URL}/posts?userId=${userId}`);
    const post = await postResponse.json();

    console.log({user,post});
    
  } catch (error) {
    console.error('Greška:', error);
  }
}

getUserPosts(3);

/*

2. Kombinovanje Više API Poziva
Zadatak 2.1 - Korisnik sa Postovima
Napraviti async funkciju getUserWithPosts(userId) koja će:

Preuzeti korisnika sa određenim ID-om
Preuzeti sve postove tog korisnika
Vratiti objekat sa strukturom:

*/

async function getUserWithPosts(userId) {
  try {
    const userResponse = await fetch(`${API_URL}/users/${userId}`);
    const user = await userResponse.json();

    const postResponse = await fetch(`${API_URL}/posts?userId=${userId}`);
    const post = await postResponse.json();

    console.log({user,post});
    
  } catch (error) {
    console.error('Greška:', error);
  }
}

getUserWithPosts(3);


/*
Zadatak 2.2 - Post sa Komentarima
Napraviti async funkciju getPostWithComments(postId) koja će:

Preuzeti post sa određenim ID-om
Preuzeti sve komentare tog posta
Vratiti objekat sa strukturom:

*/

async function getPostWithComments(postId) {
  try {
    const postResponse = await fetch(`${API_URL}/posts?id=${postId}`);
    const post = await postResponse.json();

    const commentResponse = await fetch(`${API_URL}/comments?postId=${postId}`);
    const comment = await commentResponse.json();

    console.log({post,comment});
    
  } catch (error) {
    console.error('Greška:', error);
  }
}

getPostWithComments(3);

/*
Zadatak 2.3 - Korisnik sa Svim Podacima
Napraviti async funkciju getUserFullData(userId) koja će:

Preuzeti korisnika
Preuzeti sve njegove postove
Preuzeti sve komentare za sve njegove postove
Vratiti objekat sa strukturom:
*/

async function getUserFullData(userId) {
  try {
    const userResponse = await fetch(`${API_URL}/users/${userId}`);
    const user = await userResponse.json();

    const postResponse = await fetch(`${API_URL}/posts?userId=${userId}`);
    const post = await postResponse.json();

    let allComments = [];
    for(p of post){
    const commentResponse = await fetch(`${API_URL}/comments?postId=${p.id}`);
    const comment = await commentResponse.json();
    allComments.push(...comment);
    }
  

    console.log({user,post,allComments});
    
  } catch (error) {
    console.error('Greška:', error);
  }
}

getUserFullData(3);

/*
3. Dinamički Prikaz na Stranici
Zadatak 3.1 - Prikaz Korisnika
Napraviti HTML strukturu:

*/

/*

Napraviti async funkciju displayUsers() koja će:

Preuzeti sve korisnike
Za svakog korisnika prikazati karticu sa:
Ime (name)
Email
Grad (address.city)
Kompanija (company.name)
Kartice prikazati u #usersContainer div-u
*/

async function displayUsers() {
  try {
    const userResponse = await fetch(`${API_URL}/users`);
    const user = await userResponse.json();
    renderCards(user);

    
    
  } catch (error) {
    console.error('Greška:', error);
  }
}


const renderCards = (user) =>{
     const usersContainer = document.querySelector('#usersContainer');
     user.forEach(u => {
        const card = document.createElement('div');
        card.className = 'card';
               card.innerHTML = `
        <p class="name">Ime:${u.username}</p>
        <p class="email">Email:${u.email}</p>
        <p class="broj-postova">Broj postova:${u.posts}</p>
            `;
        usersContainer.appendChild(card);
     })
    
}

displayUsers();


/*

Zadatak 3.2 - Prikaz Postova sa Komentarima
Napraviti HTML strukturu:

<div id="postsContainer"></div>
Napraviti async funkciju displayPostsWithComments(userId) koja će:

Preuzeti sve postove korisnika
Za svaki post prikazati:
Naslov posta
Telo posta
Broj komentara
Lista prvih 3 komentara
Prikazati sve u #postsContainer div-u

*/




async function displayPosts() {
  try {
    const postResponse = await fetch(`${API_URL}/posts`);
    const post = await postResponse.json();
    
    let allComments = [];
    for(let p of post){
    const commentResponse = await fetch(`${API_URL}/comments?postId=${p.id}`);
    const comment = await commentResponse.json();
    allComments.push(...comment);
    }
    renderPosts(post,allComments);

    
    
  } catch (error) {
    console.error('Greška:', error);
  }
}


const renderPosts = (post,allComments) =>{
     const postsContainer = document.querySelector('#postsContainer');
     let prvaTri = allComments.slice(0,4);
     post.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <p class="title">Naslov:${p.title}</p>
        <br>
        <p class="body">Telo:${p.body}</p>
        <p class="broj-komentara">Broj komentara:${allComments.length}</p>
        `;
        prvaTri.forEach(p => {
            card.innerHTML += `
            <p class="prva-tri">Prva tri:\n${p.body}</p>
            `
        })

        postsContainer.appendChild(card);
    })
    
}

displayPosts();
