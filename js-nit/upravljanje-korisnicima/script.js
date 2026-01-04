const API = "https://jsonplaceholder.typicode.com/"
const table = document.querySelector('#userTable');
const posts = document.querySelector('.posts');
let allPosts = [];
let globalUserId;

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
    globalUserId = userId;
    console.log(data);
    posts.innerHTML = data.map(post => `
        <div class="post post-${post.id}" style="visibility: hidden;">
        <h3>${post.title}</h3><br>
        <p>${post.body}</p>
        <button onclick="editPost(${post.id})">Izmeni</button>
        <button onclick="deletePost(${post.id},this)">Izbrisi</button></div>`).join('');
    allPosts = document.querySelectorAll('.post');
    allPosts = [...allPosts];
    allPosts.forEach(post => {
    post.style.visibility = 'visible';
});
}

async function deletePost(postId,button){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
    
  });
  if(response.ok){
    console.log('uspesno ste obrisali post sa idjem'+ postId);
    consolePosts();
    // console.log('Svi postovi su:' + allPosts);
    let deletedPost = button.closest('.post');
    deletedPost.remove();
    console.log(deletedPost);
    const indexOfPosts = allPosts.indexOf(deletedPost);
    allPosts[indexOfPosts].style.visibility = 'hidden';
    


    
  }
  else{
    console.log('desila se greska pri brisanju');
  }
}

async function editPost(postId) {
    const post = document.querySelector(`.post-${postId}`);

    const editForm = document.querySelector('#putForm');
    editForm.style.visibility = 'visible';

    // Popuni input sa trenutnim naslovom i body-om
    const titleInput = document.getElementById('putTitle');
    const bodyInput = document.getElementById('putBody');
    titleInput.value = post.querySelector('h3').textContent;
    bodyInput.value = post.querySelector('p').textContent;

    // Postavi listener
    editForm.onsubmit = async function(event) {
        event.preventDefault();

        const payload = {
            title: titleInput.value,
            body: bodyInput.value,
            userId: globalUserId,
        };

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        if(response.ok){
        post.innerHTML = `<div class="post post-${postId}" style="visibility: visible;">
        <h3>${titleInput.value}</h3><br>
        <p>${bodyInput.value}</p>
         <button onclick="deletePost(${postId},this)">Izbrisi</button></div>`;
        }

        const data = await response.json();
        console.log('Updated post:', data);

        // Ažuriraj prikaz
        post.querySelector('h3').textContent = data.title;
        post.querySelector('p').textContent = data.body;
        editForm.style.visibility = 'hidden';
    };
}












// prikaziPost.forEach(post => {
//     post.addEventListener('click',(event)=>{
//         console.log(event.target);
//         console.log('radi');
//     })
// })