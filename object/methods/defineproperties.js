const person = {
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Currently I working in the ${this.technology} at past ${this.experiance}`);
    }
}; 

const new_obj = Object.create(person);
Object.defineProperties(new_obj , {
    name: {value:'Aniket'},
    technology:{value:'React js'},
    experiance:{value:'1.5 year'}
})
// new_obj.name = 'Aniket';
// new_obj.technology = 'React js';
// new_obj.experiance = '1.5 year'
console.log(new_obj);

new_obj.printIntroduction();    