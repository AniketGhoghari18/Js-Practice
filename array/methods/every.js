// every method

// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

const array = [10,12,14,16,20];

const value = array.every((element)=>{
    return element > 18
})
console.log(value);

const value1 = array.every((element)=>{
  return element <=20
})
console.log(value1);