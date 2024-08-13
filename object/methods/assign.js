// assign method

// The Object.assign() method copies properties from one or more source objects to a target object.

// Use Object.assign() for merging objects, creating shallow copies, or extending objects with additional properties.

// overite the target value if same properties key exists in source

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

const person2 = {firstName: "Anne",lastName: "Smith"};
Object.assign(person2, person1);
console.log(person2);
