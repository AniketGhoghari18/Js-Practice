"use strict"

// Object.isExtensible() returns true if an object is extensible.

// Object.isSealed() returns true if an object is sealed.

// Object.isFrozen() returns true if an object is frozen.

const object = {
    name:'Aniket',
    technology:'React js',
    age:23
}

// Object.freeze() prevents modifications, additions and deletions of properties.
// Object.freeze(object);
// object.name = 'abc'
// let text = Object.isFrozen(Object.freeze(object));

// Object.seal() allows modifications, but prevents additions and deletions of properties.
// Object.isSealed(object)
// object.name = 'abc'

// Object.preventExtensions() allows modifications, but prevents addition of properties.
// Object.preventExtensions(object);
// object.name = 'abc'
// delete object.age

console.log(object);