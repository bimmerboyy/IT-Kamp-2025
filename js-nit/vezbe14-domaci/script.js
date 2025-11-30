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


/*Zadatak 1.2 - Mapiranje i Transformacija Podataka
Preuzeti sve korisnike i:


Prikazati ove nizove u konzoli

*/

//Kreiraj novi niz koji sadrži samo imena i email-ove korisnika

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
       const nameAndEmail = data.map(user => ({
            name: user.username,
            email: user.email
       }));
       console.log(nameAndEmail);
       
    })
    .catch(err => console.log(err))

//Kreiraj novi niz koji sadrži samo imena i tvrtke (company.name) korisnika

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
       const nameAndEmail = data.map(user => ({
            company: user.company.name,
       }));
       console.log(nameAndEmail);
       
    })
    .catch(err => console.log(err))

/*

Zadatak 1.3 - Pronalaženje Specifičnih Podataka
Preuzeti sve korisnike i:



*/


//Pronaći korisnika čiji id je 5 i prikazati sve njegove podatke


fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
        const dataOfId5 = data.filter(user => user.id === 5)

        console.log(dataOfId5);
       
    })
    .catch(err => console.log(err))

//Pronaći korisnika čije ime sadrži "Nicholas" i prikazati ga

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
        const dataOfId5 = data.filter(user => user.name.includes('Nicholas'))

        console.log(dataOfId5);
       
    })
    .catch(err => console.log(err))

//Pronaći prvog korisnika čija kompanija je "Deckow-Crist" i prikazati ga


fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(data =>{
        const dataOfId5 = data.filter(user => user.company.name.includes('Deckow-Crist'))

        console.log(dataOfId5);
       
    })
    .catch(err => console.log(err))





/*
2. Rad sa Postovima

Zadatak 2.1 - Preuzimanje i Filtriranje Postova





*/

//Preuzeti sve postove sa API-ja i:

fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err)) 

//Prikazati samo postove čiji userId je 1

fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(data => {
        const id1Posts = data.filter(post => post.userId === 1)

        console.log(id1Posts);
    })
    .catch(err => console.log(err))

//Prikazati samo postove čiji id je veći od 50


fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(data => {
        const idBiggerThan50Posts = data.filter(post => post.id > 50)

        console.log(idBiggerThan50Posts);
    })
    .catch(err => console.log(err))

    //Prikazati samo postove čiji naslov sadrži reč "qui"


    
fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(data => {
        const titleIncludesQui = data.filter(post => post.title.includes('qui'))

        console.log(titleIncludesQui);
    })
    .catch(err => console.log(err))

/*
Zadatak 2.2 - Kombinovanje Podataka
Preuzeti sve korisnike i sve postove, zatim:





*/

//Za svakog korisnika pronaći sve njegove postove

fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(userdata => {
       fetch(`${API_URL}/posts`).then(response => response.json()).then(postData => {
            const userPost = userdata.map(user => {
                return {
                    ...user,
                    posts: postData.filter(post => post.userId === user.id)
                }
            })
            console.log(userPost);
        })
    })
    .catch(err => console.log(err))

    //Prikazati niz objekata sa strukturom: { username: "...", postCount: 5 }


    fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(userdata => {
       fetch(`${API_URL}/posts`).then(response => response.json()).then(postData => {
            const userPost = userdata.map(user => {
                return {
                    username:user.username,
                    posts: postData.filter(post => post.userId === user.id).length
                }
            })
            console.log(userPost);
        })
    })
    .catch(err => console.log(err))


    //Sortirati korisnike po broju postova (od najvećeg ka najmanjem)


        fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(userdata => {
       fetch(`${API_URL}/posts`).then(response => response.json()).then(postData => {
            const userPost = userdata.map(user => {
                return {
                    username:user.username,
                    posts: postData.filter(post => post.userId === user.id).length
                }
            })
        userPost.sort((a,b) => a.posts - b.posts);

        console.log(userPost);
        })
    })
    .catch(err => console.log(err))


    /*
    Zadatak 2.3 - Dinamički Prikaz na Stranici
Napraviti HTML strukturu:

<div id="postsContainer">
  <!-- Postovi će biti prikazani ovde -->
</div>
Preuzeti sve postove i:


Svaki post treba da ima naslov i telo (body)
Dodati CSS stilove za lepši prikaz


    */

//Prikazati sve postove na stranici u div elementima

const postsContainer = document.querySelector('#postsContainer');

fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(data => {
       let ul = document.createElement('ul');
       data.forEach(post =>{
        let li = document.createElement('li');
        li.textContent = `userId:${post.userId} id:${post.id} title:${post.title}`;
        li.style.listStyleType = 'decimal';
        ul.appendChild(li);
       })
       postsContainer.appendChild(ul);
    })
    .catch(err => console.log(err))

/*

3. Rad sa Komentarima
Zadatak 3.1 - Preuzimanje Komentara




*/

//Preuzeti sve omentare sa API-ja i:
fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then(data => {
       console.log(data);
    })
    .catch(err => console.log(err))

//Prikazati samo komentare čiji postId je 1

fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then(data => {
        const postId1 = data.filter(comment => comment.postId === 1)

        console.log(postId1);
    })
    .catch(err => console.log(err))

//Prikazati samo komentare koji nisu od korisnika čiji email sadrži ".net"



fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then(commentData => {
        fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(userData => {
        const filteredUsers = userData.filter(user => !user.email.endsWith('.net'));

      const filtredComments = filteredUsers.map(user => {
                return {
                    users: filteredUsers,
                    comments: commentData.filter(comment => comment.postId === user.id)
                }
            });
            console.log(filtredComments);

    })
    })
    .catch(err => console.log(err))

//Prikazati samo komentare čiji tekst je duži od 50 karaktera

fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then(data => {
       const biggerThan50 = data.filter(comment => comment.body.length > 50);

       console.log(biggerThan50);
    })
    .catch(err => console.log(err))

/*

Zadatak 3.2 - Brojanje Komentara
Preuzeti sve komentare i:


Kreiraj niz sa strukturom: { postId: 1, commentCount: 5 }
Prikazati post sa najviše komentara

*/

//Prebrojati koliko komentara ima svaki post
//isti princip spojimo postove i komentare i onda samo prebrojimo koliko ima