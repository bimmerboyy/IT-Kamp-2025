// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1,p2,p3])
//     .then(values => console.log(values))
//     .catch(err => console.log(err));

// const pGood = Promise.resolve('ok');
// const pBad = Promise.reject(new Error('fail'));


// Promise.all([pGood,pBad])
//     .then(results => console.log(results))
//     .catch(err => console.log('All failed',err.message))


const p1 = new Promise(res => setTimeout(() => res('slow'),1000));
const p2 = new Promise(res => setTimeout(() => res('fast'),100));

Promise.race([p1,p2]).then(result => console.log(result));

const fail = Promise.reject('nope');
const success = new Promise(res => setTimeout(() => res('yay'),200));

Promise.any([fail,success])
    .then(value => console.log(value))
    .catch(err => console.log(err));




const API = 'https://jsonplaceholder.typicode.com';

async function loadEverything(){
    try{
        const [users,posts,comments] = await Promise.all([
            fetch(`${API}/users`).then(r => r.json()),
            fetch(`${API}/posts`).then(r => r.json()),
            fetch(`${API}/comments`).then(r => r.json()),
        ]);
        console.log('Users',users.lengt, 'Posts',posts.lengt, 'Comments',comments.lengt);
    } catch(err){
        console.log('Nesto nije uredu',err);
    }
}


// const promise1 = new Promise(res => setTimeout(() => ('p1'), 100));
// const promise2 = new Promise([res,reject] => setTimeout(() => reject('p2 fail') ,200));
// const promise3 = new Promise(res => setTimeout(() => ('p3'), 50));


// Promise.all([promise1,promise2,promise3])
//      .then(r => console.log('all:',r))
//      .catch(err => console.log('all error',err));


const urls = [
    'https://placeholder.typecode.com/users',
    'https://placeholder.typecode.com/posts',
    'https://placeholder.typecode.com/comments',
    'https://placeholder.typecode.com/todos',
    'https://placeholder.typecode.com/albums'
]

async function parallelFetch(){
    const t0 = performance.now();
    await Promise.all(urls.map(u => fetch(u).then(r => r.json())))
    console.log('Parallel: ', (performance.now() . t0.toFixed(1),'ms'));
}

async function sequentialFetch(){
    const t0 = performance.now();
    for(const u of urls){
        await fetch(u).then(r => r.json());
    }
    console.log();
}