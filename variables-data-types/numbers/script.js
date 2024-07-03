// working with numbers

let num = 5;

console.log(num, typeof num);

let x;

// changes variable to a string
x = num.toString();
console.log(x, typeof x);

// checks the number of characters
x = num.toString().length;
console.log(x, typeof x);

// changes number to string and addes extra decimal places
x = num.toFixed(2);
console.log(x, typeof x);

// if decimals exist, it only shows the desired number of decimal places and rounds the solution as a string
num = 5.6578
x = num.toFixed(2);
console.log(x, typeof x);

// this gives 2 number places total. it will also round the solution as a string
x = num.toPrecision(2);
console.log(x, typeof x);

num = 5;

// converts to an exponential as a string
x = num.toExponential(2);
console.log(x, typeof x);

// converts number to local language. in this example english in the us as a string
x = num.toLocaleString("en-us");
console.log(x, typeof x);

// in this example, arabic in egypt
x = num.toLocaleString("ar-eg");
console.log(x, typeof x);

// returns the largest possible version of the number that can be used
x = Number.MAX_VALUE;
console.log(x, typeof x);

// returns the smallest possible version of the number that can be used
x = Number.MIN_VALUE;
console.log(x, typeof x);