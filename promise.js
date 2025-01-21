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

// Methods of the promises

// 1. all() - It takes an array of promises and returns a new promise that resolves when all the promises in the array have resolved. If any of the promises in the array is rejected, the returned promise is rejected with the reason of the first rejected promise.

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error)); // Output Task 3 failed


// 2. allSettled() - It takes an array of promises and returns a new promise that resolves when all the promises in the array have settled (either resolved or rejected). The returned promise is resolved with an array of objects representing the outcome of each promise.

Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((results) => console.log(results))
    .catch((error) => console.error(error)); 
    
    // Output [
    //     { status: 'fulfilled', value: 'Task 1 completed' },
    //     { status: 'rejected', reason: 'Task 2 failed' },
    //     { status: 'fulfilled', value: 'Task 3 completed' }
    //   ]
 
// 3. race() - It takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. The returned promise is resolved or rejected with the value or reason of the first promise that settles.

Promise.race([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    // Output Task 1 completed
    
// 4. any() - It takes an array of promises and returns a new promise that resolves as soon as one of the promises in the array resolves. The returned promise is resolved with the value of the first promise that resolves.

Promise.any([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));    
 
    // Output Task 1 completed