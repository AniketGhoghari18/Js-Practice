// find method

// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element.

// The find() method returns undefined if no elements are found.

const array = [10,12,14,16,18,20];
console.log("Output of array.find() = ",array.find((element)=>{
    return element > 16
}));

// findIndex method

// The findIndex() method executes a function for each array element.

// The findIndex() method returns the index (position) of the first element that passes a test.

// The findIndex() method returns -1 if no match is found.

console.log("Output of array.findIndex() = ",array.findIndex((element)=>{
    return element > 16
}));

// findLast method

// The findLast() method returns the value of the last element that passes a test.

// The findLast() method executes a function for each array element.

// The findLast() method returns undefined if no elements are found.

console.log("Output of array.findLast() = ",array.findLast((element)=>{
   return element > 16
}));

// findLastIndex method

// The findLastIndex() method executes a function for each array element.

// The findLastIndex() method returns the index (position) of the last element that passes a test.

// The findLastIndex() method returns -1 if no match is found.

console.log("Output of array.findLastIndex() = ",array.findLastIndex((element)=>{
    return element > 16
 }));