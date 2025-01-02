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
//  console.log(person1.__proto__.introduction.bind(person1)());
 console.log(person1.introduction());
