// type coercion

let x;

// 5 is a number, "5" is a string. js coerced the number into a string and then concatinated them together to make "55"
x = 5 + "5";
console.log(x, typeof x);

// wrapping the string the number() function makes the string "5" into a number first and then uses the operator
x = 5 + Number("5");
console.log(x, typeof x);

// since you cant multiply strings, js coerced the string "5" into a number and then used the operator *
x = 5 * "5";
console.log(x, typeof x);

// this does not work
// x = "5" * string(5);
// console.log(x, typeof x);

// null is a number type and equals zero
x = 5 + null;
console.log(x, typeof x);

x = Number(null);
console.log(x, typeof x);

// true as a number is 1
x = Number(true);
console.log(x, typeof x);

// false as a number is 0
x = Number(false);
console.log(x, typeof x);

// true = 1
x = 5 + true;
console.log(x, typeof x);

