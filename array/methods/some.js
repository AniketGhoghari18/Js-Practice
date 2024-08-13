// some method

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

const array = [10,12,14,16,18,20];
console.log(array.some((element)=>{
    return element > 16
}));