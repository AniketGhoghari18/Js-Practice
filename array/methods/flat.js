// flat method

// The flat() method concatenates sub-array elements.

// array.flat(depth) -- depth is a otional and by default 1

const array = [[1,2],[3,4],[5,6]];
console.log(array.flat());

const array1 = [1, 2, [3, [4, 5, 6], 7], 8];
console.log(array1.flat(Infinity));

// flatMap

// The flatMap() method maps all array elements and creates a new flat array.

const words = ["hello", "world"];
const characters = words.flatMap(word => word.split(""));
console.log(characters);
