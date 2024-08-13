// Object.create method

// Create new object with a prototype object and optionally properties.

// allows you to set up a prototype chain without having to use a constructur function

const person = {
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Currently I working in the ${this.technology} at past ${this.experiance}`);
    }
}; // When i use this person object like that Object.create(person) then it worked as a prototype of the newly create object

const new_obj = Object.create(person);
new_obj.name = 'Aniket';
new_obj.technology = 'React js';
new_obj.experiance = '1.5 year'

// inharite the properties from the person object....
new_obj.printIntroduction();
