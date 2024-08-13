const person1 = {
    first_name:'Aniket',
    last_name:'Ghoghari',
    introduce_person: function () {
        console.log(`Hello , I am ${this.first_name} ${this.last_name}`);
    }
}

const person2 = {
    first_name:'Subham',
    last_name:'Tiwari', 
}
const detail_person = person1.introduce_person.bind(person2);
detail_person()

setTimeout(person1.introduce_person,2000);