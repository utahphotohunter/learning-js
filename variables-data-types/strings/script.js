// working with strings

let x;

x = "Hello my name is ";
console.log(x);

const name = "mitch";
console.log(name);

const age = 26;
console.log(age);

y = x + name;
console.log(y);

// using backticks, (`) tells js to expect a variable to put into the string. this is like the f strings in python
// the sytax for the variable inside the string is ${varialbe goes here}
x = `Hello, my name is ${name}`;
console.log(x);

x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);

// string properties and methods

const j = "Hello world";

// the .length method counts the number of characters
x = j.length;
console.log(j, typeof j);
console.log(x);

// this finds the 2nd character. counting starts at 0
x = j[1];
console.log(x);

// to see all the methods availble to use, you can view the prototypes of the variable

x = j.__proto__;
console.log(x);

// this makes everything captilized
x = j.toUpperCase();
console.log(x);

// this finds the character by index like [7] will
x = j.charAt(7);
console.log(x);

// this gets a substring. the first number input is the starting postion, the second number is the ending position
x = j.substring(0, 4);
console.log(x);

// this starts at the provided index and displays the rest of the string from there
x = j.substring(7);
console.log(x);

// trim gets rid of white space
const h ="   Hello World"
console.log(h);
x = h.trim();
console.log(x);

// the replace() method takes 2 arguments. the first is looking for a substring, the second is what will replace that substring
x = j.replace("world", "mitch");
console.log(x);

// the include() method looks to see if a substing is found in the string and returns true or false
x = j.includes("Hello");
console.log(x);

// the split() method takes in a seperator argurment and then seperates the string based on that value and puts it into an array
x = j.split();
console.log(x);

x = j.split(" ");
console.log(x);

x = j.split("");
console.log(x);