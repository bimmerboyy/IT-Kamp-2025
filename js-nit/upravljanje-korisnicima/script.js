const API = "https://jsonplaceholder.typicode.com/"
const table = document.querySelector('#userTable');
const posts = document.querySelector('.posts');

async function consolePosts(){
    const response = await fetch(`${API}/posts`);
    const data = await response.json();

    console.log(data);
}
consolePosts();

async function loadUsers(){ 
    const response = await fetch(`${API}/users`);
    const data = await response.json();

    table.innerHTML += data.map(user =>
         `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td><button class='prikaziPost'>Prikazi postove</button></td>
        </tr>
    `
    ).join('');
    
    table.addEventListener('click',e =>{
        console.log('radi');
    if(e.target.classList.contains('prikaziPost')){
        let userId = e.target.closest('tr').firstElementChild.textContent;
        loadPosts(userId);

    //   console.log(e.target.closest('tr').firstElementChild.textContent);
         
    }
})

}
loadUsers();
async function loadPosts(userId) {
    
    const response = await fetch(`${API}/posts?userId=${userId}`)
    const data = await response.json();
    console.log(data);
    posts.innerHTML = data.map(post => `
        <h3>${post.title}</h3><br>
        <p>${post.body}</p>
        <button>Izmeni</button>
        <button onclick="deletePost(${post.id})">Izbrisi</button>`).join(''); 
}

async function deletePost(postId){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
    
  });
  if(response.ok){
    console.log('uspesno ste obrisali post sa idjem'+ postId);
    consolePosts();
  }
  else{
    console.log('desila se greska pri brisanju');
  }
}








const prikaziPost = document.querySelectorAll('.prikaziPost');





// prikaziPost.forEach(post => {
//     post.addEventListener('click',(event)=>{
//         console.log(event.target);
//         console.log('radi');
//     })
// })