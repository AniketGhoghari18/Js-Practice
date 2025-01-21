// for in loop gives the key of collection..
// for of loop gives the value of collection..

const car = {
    make: "Ford",
    model: "Explorer",
    year: 2008,
    color: "red",
    fuel: "gas",
    mpg: 18
}

for (let i in car) {
    console.log(`${i} -->`, car[i]);
}

const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i of arr) {
    console.log(i);
}
for (let i in arr) {
    console.log(`${i} -->`, arr[i]);
}        

const str = 'hello ABC';
for(let i of str){
    console.log(i);
}
