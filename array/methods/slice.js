// slice method

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

// array.slice(start, end)

const array = [1,2,3,4,5,6,7,8,9,20];
// const new_array = array.slice(1,7)
const new_array = array.slice(-5,-1)

console.log(new_array);