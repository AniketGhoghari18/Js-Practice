// Shallow Copy...

// A shallow copy creates a new object or array, but only the top-level properties are copied. If the original object contains nested objects or arrays, those nested structures are still referenced by the new copy (i.e., they are not deeply cloned).

// How Shallow Copy Works... 
// A shallow copy creates a new reference for the top-level properties. (not affect on original array or object)
// Nested objects/arrays are copied by reference, meaning both the original and the copy will point to the same nested structures. (affect on original array or object)

const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };

 const shallowCopy = { ...originalObject };

shallowCopy.name = 'Warner';
shallowCopy.address.city = 'London';

console.log(originalObject);
console.log(shallowCopy);


// Deep Copy... 

// A deep copy creates a completely independent copy of the original object or array, including all nested objects or arrays. All levels of the object or array are recursively cloned, so the new copy does not share references with the original.

// How Deep Copy Works
// A deep copy ensures that all properties, including nested ones, are copied by value.
// Nested objects or arrays are fully copied, so modifications to the deep copy do not affect the original.

const originalObject1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

let deepCopy = JSON.parse(JSON.stringify(originalObject1));

deepCopy.name = 'Warner';
deepCopy.address.city = 'London';

console.log(originalObject1);
console.log(deepCopy);