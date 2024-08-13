// copyWithin method 
// copies array elements to another position in an array.
// change in existing array.
// not change length of array and not add element in array.

// array.copyWithin(target , start , end) --- end in exclusive and by default length of array when not define.

const array = [1,2,3,4,5,6,7,8,9,10];
            // 0,1,2,3,4,5,6,7,8,9 
console.log(array.copyWithin(2,1,4));