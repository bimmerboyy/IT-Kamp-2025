/*1. Osnovne Operacije sa Podacima
Zadatak 1.1 - Preuzimanje i Filtriranje Korisnika
Preuzeti sve korisnike sa API-ja i:



*/

//Prikazati sve korisnike u konzoli
const API_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${API_URL}/users`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

//Filtirati i prikazati samo korisnike čiji username počinje sa slovom "C"


fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
        const filteredUsers = data.filter(user => user.name && user.name.startsWith('C'));
        console.log(filteredUsers);
        return filteredUsers;
    })
    .catch(err => console.log(err))

//Filtirati i prikazati samo korisnike čiji email sadrži ".org" domeny


fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
        let filtredStudents = [];
        data.forEach(user =>{
            //filtredStudents =  data.filter(user => user.email.slice(user.email.indexOf('@') + 1,user.email.length).slice((user => user.email.slice(user.email.indexOf('@') + 1,user.email.length).indexOf('.')+1) === 'org'))
            filtredStudents = data.filter(user => 
            user.email && user.email.toLowerCase().endsWith('.org')
        );
        })
          console.log(filtredStudents);
    })
    .catch(err => console.log(err))