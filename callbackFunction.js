// Pass function argument as a other function is called callback function...
// -- controll the data flow.
// -- use for async task.

// In below function i want to execute processData function after fetchData function is completed.
// fetchData()
// processData()
// If I write the code like this, fetchData takes time to execute, and due to the asynchronous nature of JavaScript, it does not wait for fetchData to complete before immediately calling processData, which disrupts my intended flow. To prevent such scenarios, a callback function can be useful.   

// function fetchData() {
//     setTimeout(() => {
//         console.log('Data Fetched !!!');        
//     }, 2000);
// }

// function processData() {
//     console.log('Data Processing....');
    
// }

// fetchData();
// processData()

function fetchData(callback) {
    setTimeout(() => {
        console.log('Data Fetched !!!');
        callback()        
    }, 2000);
}

function processData() {
    console.log('Data Processing....');
}

fetchData(processData)



