// type conversion

// --------------------------------------------------------------------------

// strings to numbers

let amount = "100";

// parseInt0() function changes string to a number
// if the number is a decimal, use the parseFloat() function
amount = parseInt(amount);

amount = "100";

// using +(value) will also change it to a number
amount = +amount;

amount = "100";

// using the Number constructor can also work
amount = Number(amount);

// if you use a string that is not a number and parse it into a number, it will return NaN, (not a number) as the value while the type will still be a number type
amount = "hello";

amount = parseInt(amount);

console.log(amount, typeof amount); 

// --------------------------------------------------------------------------

// numbers to strings

let numberValue = 5;

// the .toString() function will change values to strings
numberValue = numberValue.toString();

numberValue = 5;

// using the String constructor will a value to a string
numberValue = String(numberValue);

console.log(numberValue, typeof numberValue);

// --------------------------------------------------------------------------

// numbers to boolean

// truthy and falsey values exist in js. 1 is a truthy number. the number 1 as a boolean will always reutrn true as well as any other number above 0. 0 will always return false
let amountValue = 1;

// the Boolean constructor works for this
amountValue = Boolean(amountValue);

console.log(amountValue, typeof amountValue);