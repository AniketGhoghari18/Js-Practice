// indexOf method

// The indexOf() method returns the first index (position) of a specified value.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).

// find: left ----> right

const array = ["Apple" , "Banana" , "Orange" , "Mango","Apple"]

console.log(array.indexOf("Apple"));
console.log(array.indexOf("Apple",2));
console.log(array.indexOf("Banana",2));

// lastIndexof method

// The lastIndexOf() method returns the last index (position) of a specified value.

// The lastIndexOf() method returns -1 if the value is not found.

// The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).

// find: left <---- right
console.log(array.lastIndexOf("Apple"));
console.log(array.lastIndexOf("Apple",3));