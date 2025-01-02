// Borrowing methods from the other objects....
// 1. Call() - Imidiatly Invok the function
// 2. Apply() - Same as a call() but argument pass in a array
// 3. Bind() - return a new function

//---------- 1. Using Call() ----------
const person1 = {
  name: 'Aniket Ghoghari',
  technology:'React js',
  introduce_person: function(expereance)
  {
    console.log(`Hello, I am ${this.name} and I work in ${this.technology} and my Expereance is ${expereance} year`);
  }   
}

const person2 = {
  name:'Siddhi Ghoghari',
  technology:'Node js'
}
person1.introduce_person(1.5);
person1.introduce_person.call(person2 , 2);

//---------- 2. Using Apply() ----------
const person3 = {
  name:'Subham Tiwari',
  technology:'Angular'
}
person1.introduce_person.apply(person3, [3]);

//---------- 3. Using Bind() ----------
const person4 = {
  name:'Divyanshu Shah',
  technology:'Vue js'
}
person1.introduce_person.bind(person4, 4)();

// Other Example of Call Methods.......

function SetUserName(username)
{
  this.username = username;
  console.log(username , this);
}

function CreatUser(username , email , password)
{
  SetUserName.call(this , username);
  this.email = email;
  this.password = password;
}

const user = new CreatUser('Aniket', 'aniket@gmail.com', '123456');
console.log(user);

