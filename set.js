// In JavaScript, a Set is a collection of unique values. It is similar to an array, but it only stores distinct values and automatically eliminates any duplicates


const obj1 = {
    name:'aniket',
    dep:'IT'
}
const obj2 = {
    name:'aniket',
    dep:'IT'
}
const set = new Set([obj1, obj2 , 1 , 2 ,3 ,3]);
console.log(set);

// add(value): Adds a new value to the Set.
set.add(4);
console.log(set);

// delete(value): Removes a value from the Set.
set.delete(4);
console.log(set);

// has(value): Checks if a value is in the Set.
console.log(set.has(4));

// clear(): Clears all values in the Set.
// set.clear();
// console.log(set);

// size: Returns the number of values in the Set.
console.log(set.size);


