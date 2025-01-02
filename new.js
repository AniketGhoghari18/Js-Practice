//The new keyword in JavaScript is used to create an instance of an object that is constructed by a constructor function or class.

// When you use new, 
// -> It creates a new object
// -> Sets the value of this to the new object
// -> Returns the new object unless the constructor function returns another object.
// => If the constructor function doesn't return anything (or returns a non-object value), the new object is returned instead.

// With constructure function....
function person(first_name , last_name , age )
{
    this.first_name = first_name,
    this.last_name = last_name,
    this.age = age

    // if not retun or return value is non-object type then return newly create object 
    // return {name : 'aniket'}
 }

 const person1 = new person('Aniket' , 'Ghoghari' ,22 );
 console.log(person1);

 // With class....
 class person2{
    constructor(first_name, last_name, age)
    {
        this.first_name = first_name,
        this.last_name = last_name,
        this.age = age
    }
 }
 const person3 = new person2('Aniket', 'Ghoghari', 22);
 console.log(person3);
 