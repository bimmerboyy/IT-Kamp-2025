const API_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${API_URL}/users`)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))

//Ispisati samo prva tri korisnika

fetch(`${API_URL}/users`)
.then(response => response.json())
.then(data => {
    const firstThree = data.slice(0,3)
    console.log(firstThree);
})
.catch(err => console.log(err));

//2.Ispisati samo imena svih korisnika

fetch(`${API_URL}/users`)
.then(response => response.json())
.then(data => {
    data.forEach(user =>{
        console.log(user.name);
    });
})
.catch(err => console.log(err));



fetch(`${API_URL}/users`)
.then(response => response.json())
.then(data => {
    data.forEach(user =>{
        console.log(`Lat:${user.address.geo.lat} Ing:${user.address.geo.lng}`);
    });
})
.catch(err => console.log(err));


//Ispisati jednog korisnika koji ima id 10

fetch(`${API_URL}/users`)
.then(response => response.json())
.then(data => {
   const user10 =  data.find(user => user.id === 10);
   console.log(user10);
})
.catch(err => console.log(err));

// .json podaci:
// [
//   {
//     "name": "David",
//     "age": "17"
//   },
//   {
//     "name": "Ejmen",
//     "age": "15"
//   },
//   {
//     "name": "Sabahudin",
//     "age": "18"
//   }
// ]

// response.json():
// [
//   {
//     name: "David",
//     age: 17
//   },
//   {
//     name: "Ejmen",
//     age: 15
//   },
//   {
//     name: "Sabahudin",
//     age: 18
//   }
// ]




const container = document.getElementById('users');

fetch(`${API_URL}/users`)
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const div = document.createElement('div');
      div.innerHTML = `
        <span>${user.id}</span>
        <h3>${user.name}</h3>

        <p>${user.company.name}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error(err));



  fetch(`${API_URL}/posts`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));




