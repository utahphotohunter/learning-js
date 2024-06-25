// ways to declare variables

// var, let, const
// let can be reassigned later
// const is fixed and cannot be reassigned

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);


let age = 30;

console.log(age);

// naming conventions
// - only letters, numbers, underscores, and dollar signs
// - cant start with a number

// mutli-word formatting

// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// reassigning variables
age = 31;

console.log(age);

// let variables can be created without being initialized
let score;

score = 1;

console.log(score);

score = score + 1;

console.log(score);

// const variables cannot be created without being initialized
// const x;

const x = 200;

console.log(x);

// const variables cannnot be changed directly, but if a method applies, the method can be used to change the const variable

const arr = [1, 2, 3];

console.log(arr);

arr.push(5);

console.log(arr);

// this works for objects too

const person = {
    name: "Brad",
};

console.log(person);

person.name = "Jerry";

console.log(person);

person.email = "jerry@gmail.com";

console.log(person);

// you can declare multiple values at once

let a, b, c;

const d = 10, e = 20, f = 30;

b = 2, c = 3;

console.log(a, b, c, d, e, f);