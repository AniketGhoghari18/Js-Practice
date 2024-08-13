// const promise1 = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         console.log('Hello I am a Promise 1');
//         resolve();
//     }, 2000);
// });

// promise1.then(()=>{
//     console.log('Promis 1 is completed');
// })

// const promise2 = new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         resolve({name:'Aniket', department:'IT'});
//     }, 2000);
// })

// promise2.then((data)=>{
//     console.log(data);
// })  


const my_promise  = new Promise((resolve , reject)=>{
    // Resolve or Succuess
    setTimeout(() => {
        resolve('Hello I am a Promise and I am resolved');                        
    }, 2000);

    // Reject or Failure
    setTimeout(() => {
        reject('Hello I am a Promise and I am rejected');                        
    }, 2000);
})

my_promise.then((data=>{
    console.log(data);
}))
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('I am always executed');
})