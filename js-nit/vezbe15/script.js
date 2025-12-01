const example = async () => {
    return 'OK';
}

async function exampleFn() {
    return 'OK';
}
async function test() {
    console.log(await example());
}
test();  


// const data = await fetch(url);

const API_URL = 'https://jsonplaceholder.typicode.com';


async function loadUsers() {
    const response = await fetch(API_URL + '/users');
    const data = await response.json();

    console.log(data);
}

loadUsers();

async function loadUsers1() {
    try{
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
    
}

loadUsers1();

async function getUserswithPosts(id) {
     try {
    const userRes = await fetch(`${API_URL}/users/${id}`);
    const user = await userRes.json();

    const postsRes = await fetch(`${API_URL}/posts?userId=${id}`);
    const posts = await postsRes.json();

    console.log({ user, posts });
  } catch (error) {
    console.error(error);
  }
}

getUserswithPosts(1);


// 1. Napraviti funkciju (getPostWithComments) koja vraca sledece:
// { post: {...}, comments: [...] }


async function getPostWithComments(id) {
  try {
    const postRes = await fetch(`${API_URL}/posts/${id}`);
    const post = await postRes.json();

    const commentsRes = await fetch(`${API_URL}/comments?postId=${id}`);
    const comments = await commentsRes.json();

    console.log({ post, comments });
  } catch (error) {
    console.error(error);
  }
}

getPostWithComments(3);

// 2. Napraviti funkciju (getAllUserData) koja vraca sledece:
// { user: {...}, posts: [...], comments: [...] }

const getAllUserData = async id => {
  try {
    const userRes = await fetch(`${API_URL}/users/${id}`);
    const user = await userRes.json();

    const postsRes = await fetch(`${API_URL}/posts?userId=${id}`);
    const posts = await postsRes.json();

    const comments = [];

    for (const post of posts) {
      const commRes = await fetch(`${API_URL}/comments?postId=${post.id}`);
      const commData = await commRes.json();
      comments.push(...commData);
    }

    console.log({ user, posts, comments });
  } catch (error) {
    console.error(error);
  }
};

getAllUserData(1);

