
// In Javascript , a Prototype is an object that other object can inherit properties and methods from...
// Every JavaScript object has a prototype, and when an object is created, it inherits the properties and methods of its prototype.
// Access prototype using __proto__ or getPrototypeOf
class person{
    constructor(first_name , last_name , age )
    {
        this.first_name = first_name,
        this.last_name = last_name,
        this.age = age
     }

    
 }

 person.prototype.introduction = function() {
    return `My Name is ${this.first_name} and my age is ${this.age}`;
 }

 const person1 = new person('Aniket' , 'Ghoghari' ,22 );
//  console.log(person1.__proto__.introduction.bind(person1)()); // Using __proto__
//  console.log(Object.getPrototypeOf(person1).introduction.bind(person1)()); // using getPrototypeOf
 console.log(person1.introduction()); // Js Automatic find in prototpye
