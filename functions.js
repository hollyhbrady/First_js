// console.log(sayHello('Howdy', 'Partner')); //This has hoisted from below. It is available in the memory before the function is called. Do not reply on this because CONVENTION

// // named function - you can use before it is defined
// function sayHello(greeting, name = 'World') {
//     return `${greeting} ${name}!`;
// }

// // anonymous function - has no name (you can't hoist these)
// var add = function (a, b) {
//     return a + b;
// };

// // js functions are first class objects

// console.log('add results:', add(1, 3));

// 1.  Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.

function add3(x, y, z) {
    return (x + y + z);
}
console.log(add3(2, 3, 5)); // wrong interpretation

function arraySum(array) {
    var total = 0;
    for (var item of array) {
        total += item;
    }
    return total;
}

console.log(arraySum([2, 3, 5]))


// 2.  Define an anonymous function expression that takes two arguments:
// - an object, for example, { name: 'Wojtek', age: 30 }
// - a string, for example, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

var findName = function (key, object) {
    if (key in object) {
        return true;
    }
    return false;
}

var unk = { 
    name: 'Wojtek', 
    age: 30 
}

const key = 'name'
const key2 = 'age'
const key3 = 'height'
console.log(findName(key, unk))
console.log(findName(key2, unk))
console.log(findName(key3, unk))

// arrow functions => instead of function. It has an implicit return
var multiply = (a, b) => a * b;
var sayHi = () => `Hi`;
var sayHello = (name) => `Hello ${name}!`;
console.log('multiply result:', multiply(2, 5));
console.log(sayHello("Sky"));
console.log(sayHi())