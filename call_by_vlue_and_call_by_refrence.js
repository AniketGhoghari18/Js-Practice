// Call By Value
// In pass-by-value, a copy of the actual value is passed, and any actions or change performed on the copied value do not affect the original value.
// Used with primitive types like number , string , boolean
const a = 5;
function myFun (x) {
    x = 7
    console.log(x);
}
myFun(a);
console.log(a);

// Call By Reference
// In pass-by-reference, a reference to the actual value is passed, and any actions or change performed on the referenced value affects the original value.
// Used with non primitive types like object , array , functions

const b = {name: 'John'};
function myFun1(b) {
    b.name = 'Doe';
    console.log(b);
}
myFun1(b);
console.log(b);

const array = [1,2,3,4];

function myFun2(array) {
    array.push(5)
    console.log(array);
}
myFun2(array);
console.log(array);
