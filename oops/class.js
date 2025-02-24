// Class...

// A class is a blueprint for creating objects with shared properties and methods. 
// Classes are used to define the structure of an object, including its data and functions.

// Constructor...

// A constructor is a special method that is automatically invoked when an instance of a class is created. It is used to initialize the object's properties.

class Person {
    constructor(name , email , phone_number , department) {
        this.name = name,
        this.email = email,
        this.phone_number = phone_number,
        this.department = department 
    }

    introduce()
    {
        console.log(`Hello Guys, My name is ${this.name} and my department is ${this.department}`);
    }
}

const person1 = new Person('Raj', 'raj@gmail.com', 1234567890, 'IT');
const person2 = new Person('Rahul', 'rahul@gmail.com', 1234567890, 'IT');

person1.introduce();