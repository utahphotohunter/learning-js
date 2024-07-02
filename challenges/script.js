// capitalize challenge

// the goal is to capitalize only the first letter

const myString = "developer";

console.log(myString);

let x = myString.charAt(0);

let v = x.toUpperCase();

let w = myString.substring(1, 9);

let y = v + w;

console.log(y);

console.log(myString.__proto__);

console.log("----------------------------------");

console.log(myString);

let a;
let b;
let c;
let d;

a = myString[0];
b = a.toUpperCase();
c = myString.substring(1, 9);
d = b + c;
console.log(d);


console.log("----------------------------------");


// final solution

a = myString[0].toUpperCase() + myString.substring(1, 9);
console.log(a);