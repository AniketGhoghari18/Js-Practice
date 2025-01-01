//  Functions that can pause execution and then resume it later

// function* stepBystep() {
//     console.log('Start Execution');

//     console.log('Step 1 Starting....');
//     yield 'Step 1 Completed'

//     console.log('Step 2 Starting....');
//     yield 'Step 2 Completed'

//     console.log('Step 3 Starting....');
//     yield 'Step 3 Completed'

//     console.log('End Execution');

// }

// let gen = stepBystep();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function* taskScheduler() {
    console.log('Task 1: Starting...');
    yield new Promise(resolve => setTimeout(resolve, 2000)); // Simulate async task
    console.log('Task 1: Completed!');

    setTimeout(() => {
        console.log('Task 2: Starting...');
    }, 1000);
    yield new Promise(resolve => setTimeout(resolve, 2000)); // Simulate async task
    console.log('Task 2: Completed!');

    setTimeout(() => {
        console.log('Task 3: Starting...');
    }, 1000);
    yield new Promise(resolve => setTimeout(resolve, 2000)); // Simulate async task
    console.log('Task 3: Completed!');
}

// Usage
async function runTasks() {
    const tasks = taskScheduler();
    let result = tasks.next();

    while (!result.done) {
        await result.value;
        result = tasks.next();
    }
    console.log('All tasks completed!');
}

runTasks();
