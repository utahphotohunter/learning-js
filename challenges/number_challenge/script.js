// number challenge

let x;
let y;

// gets a random number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);
console.log(x, typeof x);

// gets a random number between 1 and 50
y = Math.floor(Math.random() * 50 + 1);
console.log(y, typeof y);

let sum;
let diff;
let prod;
let quo;
let rem;
let sol;

// sum of x and y
sum = x + y;

// difference of x and y
diff = x - y;

// product of x and y
prod = x * y;

// quotient of x and y at 2 decimal points
quo = (x / y).toFixed(2);

// returns the remainder of the quotient of x and y
rem = x % y;

// string to show solution
sol = `Sum: ${sum}; Difference: ${diff}; Product: ${prod}; Quotient: ${quo}; Remainder: ${rem};`;

console.log(sol);