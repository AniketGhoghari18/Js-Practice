// Your original array with 4 elements
let array = ['Element1', 'Element2', 'Element3', 'Element4'];

// Function to shuffle the array using Fisher-Yates algorithm
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}

// Shuffle the array each time the page is loaded
array = shuffleArray(array);

console.log(array); // Shuffled array