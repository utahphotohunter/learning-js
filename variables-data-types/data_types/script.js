// data types

// string
// - sequence of characters, must be in quotes or backticks
const person = "jerry";
console.log(person, typeof person);

// number
// - integers as well as floating-point numbers
// -- in javascript, numbers are numbers. there is no seperate type for floats
let number = 5;
console.log(number, typeof number);
number = number + 0.67;
console.log(number, typeof number);

// boolean
// - logical entity / true or false

const hasKids = true;
console.log(hasKids, typeof hasKids);

// null
// - intentional absence of any object value

const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// undefined
// - a varialbe that has not yet been defined or assigned

let crazy;
console.log(crazy, typeof crazy);

const crazy1 = undefined;
console.log(crazy1, typeof crazy1);

// symbol
// - built-in object whose constructor returns a unique symbol

const id = Symbol("id");
console.log(id, typeof id);

// bigInt
// - numbers that are greater than the "number" type can handle

const x1 = 907778825646465n;
console.log(x1, typeof x1);

// reference types or Objects
// - are a non-primitive value and when assigned to a variable, the variable is gvien a reference to that value
// - object literals, arrays, and functions are all reference types

// array
const numbers2 = [1, 2, 3, 4];
console.log(numbers2, typeof numbers2);

// object
const person2 = {
    name: "Brady",
    email: "brady@gmail.com"
};
console.log(person2, typeof person2);

// function
function sayHello() {
    console.log("Hello");
}
console.log(sayHello, typeof sayHello);

sayHello();

// JavaScript is a dynamically-typed language like python. you do not need to declare the type excplicitly

// TypeScript is a suerset of JavaScript, which allows for static-typing. Static-typed languages require you to explicitly declare the type of variable like in C#, C++, C, and Java