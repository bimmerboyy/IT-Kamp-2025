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

    userList.innerHTML = allusers.map(user => `<li>${user.name}</li>`).join('');
}

getUsers().then(() => {
    loadUsers();
})