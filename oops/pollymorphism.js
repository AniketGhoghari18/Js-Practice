// Polymorphism .......
// Polymorphism is the ability to perform a single action in different ways.

// Method overriding (Runtime Polymorphism)
class Animal{
    constructor(name){
        this.name = name;
    }

    makesound(){
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    makesound(){
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }

    makesound(){
        console.log(`${this.name} meows`);
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');
dog.makesound();
cat.makesound();

// Method overloading (Compile-time Polymorphism)
// JavaScript does not support method overloading natively.

class Mathemetics {
    add(a, b, c=0) {
        return a + b + c;
    }
}

const math = new Mathemetics();
console.log(math.add(2, 3));