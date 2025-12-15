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


/*

4. Napredni Zadaci
Zadatak 4.1 - Pretraga sa Filtriranjem
Napraviti async funkciju searchUsers(name) koja će:

Preuzeti sve korisnike
Filtirati korisnike čije ime sadrži unet tekst (case-insensitive)
Prikazati filtrirane rezultate na stranici

*/

async function searchUsers(name) {
    try {
        // 1. Uzimamo sve korisnike
        const res = await fetch(`${API_URL}/users`);
        const users = await res.json();

        // 2. Filtriramo (case insensitive)
        const filtered = users.filter(u =>
            u.username.toLowerCase().includes(name.toLowerCase())
        );

        // 3. Renderujemo kartice
        renderUserList(filtered);

    } catch (error) {
        console.error("Greška:", error);
    }
}


function renderUserList(users) {
    const container = document.querySelector('#usersContainer');
    container.innerHTML = "";

    users.forEach(user => {
        const card = document.createElement('div');
        card.className = "card";

        card.innerHTML = `
            <p>Ime: ${user.username}</p>
            <p>Email: ${user.email}</p>
        `;

        container.appendChild(card);
    });
}

document.querySelector("#searchInput").addEventListener("input", e => {
    
});



document.querySelector(".search").addEventListener("click", () => {
    const input = document.querySelector("#searchInput").value;
    searchUsers(input);
});

const loading = document.querySelector('#loading');
const content = document.querySelector('#content');

async function loadDataWithIndicator() {
    try{
        loading.style.display = "block";
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        data.forEach(d =>{
             content.innerHTML += `
        <p class="name">Name:${d.name}</p>
        `;
        })
        if(content.innerHTML !== ""){
            loading.style.display = "none";
        }
       
    }
    catch(error){
        console.log('Greska:' + error);
    }
}

loadDataWithIndicator();


//Pregled za svakog korisnika


async function showAllUsers() {
    try{
        const usersContainer = document.querySelector('#usersContainer');
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        data.forEach(user => {
          let card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<div class="user-card">
  <h2>${user.name}</h2>
  <p><strong>Username:</strong> ${user.username}</p>
  <p><strong>Email:</strong> ${user.email}</p>
  <p><strong>Phone:</strong> ${user.phone}</p>
  <p><strong>Website:</strong> ${user.website}</p>
  <p><strong>Kompanija:</strong> ${user.company.name}</p>
  <p><strong>Grad:</strong> ${user.address.city}</p>
  <p><strong>Adresa:</strong> ${user.address.street}, ${user.address.suite}</p>
  <p><strong>Broj Postova:</strong> <span id="postCount-${user.id}">0</span></p>
  <button onclick="toggleUserPosts(${user.id})">Prikaži Postove</button>
</div>`;
          usersContainer.appendChild(card);
        })
        }
    catch(error){
        console.log('Greska:' + error);
    }
}




showAllUsers();



async function showPosts(id) {
   try{
        const postsContainer = document.querySelector('#postsContainer');
        const responsePosts = await fetch(`${API_URL}/posts`);
        const posts = await responsePosts.json();


        const responseComments = await fetch(`${API_URL}/comments`);
        const comments = await responseComments.json();
        let postComments;

        posts.forEach(post => {
        postComments = comments.filter(comment => comment.postId === post.id);
      })

        posts.forEach(post => {

          let card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<h2>${post.title}</h2>
          <p><strong>Body:</strong> ${post.body.slice(0,100)}</p>
          <p><strong>Broj komentara:</strong>${postComments.length}</p>
          `;

          postsContainer.appendChild(card);
        })
        }

    catch(error){
        console.log('Greska:' + error);
    }

  }

function toggleUserPosts(userId){
  showPosts(userId);
  console.log('klik');
}
  async function showPosts2() {
   try{
        const responsePosts = await fetch(`${API_URL}/posts`);
        const posts = await responsePosts.json();


         const responseComments = await fetch(`${API_URL}/comments`);
        const comments = await responseComments.json();

      

        console.log(filtredPosts);
        posts.forEach(post =>{
          // console.log(post);
        })

        // comments.forEach(comment => {
        //   console.log(comment);
        //   console.log('raddiiii');
        // })
        }
    catch(error){
        console.log('Greska:' + error);
    }

  }

showPosts2();


// showPosts();