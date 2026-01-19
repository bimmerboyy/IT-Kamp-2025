urls = [
    'https://jsonplaceholder.typicode.com/users'
]

const API = 'https://jsonplaceholder.typicode.com';


async function parallelFetch() {
  const res = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
  return res;
}

console.log(parallelFetch());

let allusers = [];


async function getUsers() {
    try{
        const response = await fetch(`${API}/users`)
        allusers = await response.json();
    }
    catch(err){
        console.log('Greska:' + err);
    }
}

// getUsers().then(() => {
//     console.log("Van funkcije, ali posle fetch-a:", allusers);
// });


const usersSection = document.querySelector('#usersSection');
const userList = document.querySelector('#usersList');

console.log(userList);


const loadUsers = () =>{

    userList.innerHTML = allusers.map(user => `<div class='df-for-li'><li>${user.name}</li></div>`).join('');
}
getUsers().then(() => {
    loadUsers();
})


const albumsSection = document.querySelector('#albumsSection');
const backToUsers = document.querySelector('#backToUsers');
const albumsList = document.querySelector('#albumsList');

usersList.addEventListener('click', async e => {
  const name = e.target.textContent;
  const user = allusers.find(u => u.name === name);  
  const id = user?.id;
  if (!id) return;

  // Prikaži posts sekciju
  usersSection.style.display = 'none';
  albumsSection.style.display = 'block';

  const res = await fetch(`${API_URL}/albums?userId=${id}`);

  allAlbums = await res.json();

  albumsList.innerHTML = allAlbums
    .map(album => `<div class="item">${album.title}</div>`)
    .join('');
});




