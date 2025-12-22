const putForm = document.getElementById('putForm');
const patchForm = document.getElementById('patchForm');


putForm.addEventListener('submit',async function (event) {
    event.preventDefault();

    const postId = document.getElementById('putPostId').value;
    const title = document.getElementById('putTitle').value;
    const body = document.getElementById('putBody').value;
    const userId = document.getElementById('putUserId').value;

    const payload = {
        id : parseInt(postId),
        title:title,
        body:body,
        userId:parseInt(userId),
    };

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(payload),
    });

    const data = await response.json();

    console.log(`id:${data.id}
                nalov:${data.title}
                sadrzaj:${data.body}
                `); 
})

patchForm.addEventListener('submit',async function (event) {
    event.preventDefault();

    const postId = document.getElementById('patchPostId').value;
    const title = document.getElementById('patchTitle').value;
    const body = document.getElementById('patchBody').value;

    const payload = {};

    if(title.trim() !== ''){
        payload.title = title;
    }
    if(body.trim() !== ''){
        payload.body = body;
    }

    if(Object.keys(payload).length === 0){
        console.log('Morate popuniti bar jedno polje za PATCH zahtev');
        return;
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(payload),
    });

    const data = await response.json();

    console.log(`id:${data.id}
                nalov:${data.title}
                sadrzaj:${data.body}
                `); 
})