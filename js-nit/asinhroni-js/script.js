function a(){
    console.log('a start');

    b();

    console.log('a end');
}

function b(){
    console.log('b log');
}


a();


// Call stack:
// push a -> inside a: push b -> execute b -> pop b -> continue a -> pop a


console.log('start');
setTimeout(() => console.log('timeout 1000'),1000);
setTimeout(() => console.log('timout 0'),0);
console.log('end');

//Callback Hell

setTimeout(() =>{
    console.log('Prvi');
    setTimeout(()=>{
        console.log('Drugi');
         setTimeout(()=>{
        console.log('Treci');
        },5000)
    },5000)
   
},5000)

// funkcija resolve se izvrsava kada je nesto uspesno
// funkcija reject se izvrsava kada je nesto neuspesno

// pending
// fulfilled
// rejected

const p = new Promise((resolve,reject) => {
    const success = false; //promeni na false da vidis reject

    setTimeout(()=>{
       if(success){
        resolve('Uspeh'); //-> fullfiled
       }
       else{
        reject(''); //-> rejected
       } 
    },2500)
}).catch(error =>{
    console.log('Greska',error);
});



