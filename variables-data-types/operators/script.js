// Operators

// --------------------------------------------------------------------------

// arithmetic operators

let x;

x = 5 + 5;
console.log(x);

x = x - 5;
console.log(x);

x = x * 5;
console.log(x);

x = x / 5;
console.log(x);

// value % value will return the remainder of the quotient
x = x % 5;
console.log(x);

x = 7 % 5;
console.log(x);

// concatenation combines strings together
x = "hello";
y = "world";

console.log(x + " " + y);

// exponents
x = 2**3;
console.log(x);

// increments
x = 1;
console.log(x);

x = x + 1;
console.log(x);

// does the same thing as x = x +1; this also works with the "-" sign
x++;
console.log(x);

// assignment operators
x = 10;
console.log(x);

// this adds 5 to whatever x was before. this also works with subtraction, multiplication, division, remainder operations, and exponents
x += 5,
console.log(x);


// comparison operators

// this assigns the value of x to be 2 and then checks if the value is 2. if it is, it returns true. it does not test the type
x = 2 == 2;
console.log(x);

// this returns false
x = 2 == 3;
console.log(x);

// double equals will check value, not type
x = 2 == "2";
console.log(x);

// triple equals will test value and type
x = 2 === "2";
console.log(x);

// != means not equal. because 2 is 2, this returns false
x = 2 != 2;
console.log(x);

// !== is the opposite of ===
x = 2 !== "2";
console.log(x);