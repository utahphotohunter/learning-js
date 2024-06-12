
// this is a single line comment

/* 
multi line comment
second line of multi line comment
*/

console.log(100);

console.log("Hello World");

console.log(20, "Hello", true);

const x = 100;
console.log(x);

console.error("Alert");

console.warn("Warning");

console.table({name: "Brad", email: "brad@gmail.com"});

console.group("Simple Group");
    console.log(x);
    console.error("Alert");
    console.warn("Warning");
console.groupEnd();

const styles = "padding: 10px; background-color: yellow; color: green;"

console.log("%cHello World", styles);