// math object

console.log(Math);


let x;
console.log(x, typeof x);

// returns the square root of a number
x = Math.sqrt(9);
console.log(x, typeof x);

// returns the absolute value of a number
x = Math.abs(5);
console.log(x, typeof x);
x = Math.abs(-5);
console.log(x, typeof x);

// rounds a number
x = Math.round(4.6);
console.log(x, typeof x);

// always rounds up a number
x = Math.ceil(4.2);
console.log(x, typeof x);

// always rounds down a number
x = Math.floor(4.9);
console.log(x, typeof x);

// takes two arguments. first is the base number. second is the power the base will be raised to. returns the solution of the exponent
x = Math.pow(2, 3);
console.log(x, typeof x);

// returns the smallest of a set of numbers
x = Math.min(4, 57, 1, 58, -5);
console.log(x, typeof x);

// returns the largest of a set of numbers
x = Math.max(4, 57, 1, 58, -5);
console.log(x, typeof x);

// returns a random decimal between 0 and 1
x = Math.random();
console.log(x, typeof x);

// returns a random number from 0 to 9 as a decimal
x = Math.random() * 10;
console.log(x, typeof x);

// returns a random number from 0 to 10 as a decimal
x = Math.random() * 10 + 1;
console.log(x, typeof x);

// returns a random number from 0 to 10 as a whole number
x = Math.floor(Math.random() * 10 + 1);
console.log(x, typeof x);