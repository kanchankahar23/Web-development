const fname ="kanchan kahar";
const repo = "23";
// console.log(name +repo);
// Creating strings
let greeting = "Hello, world!";
let name = 'Alice';

// String concatenation
let message = greeting + " My name is " + name + ".";

// String interpolation (template literals)
let age = 25;
let info = `My name is ${name} and I am ${age} years old.`;

// String length
console.log("Length of greeting:", greeting.length);

// Accessing characters
console.log("First character:", greeting[0]);

// String methods
console.log("Uppercase:", greeting.toUpperCase());
console.log("Lowercase:", greeting.toLowerCase());
console.log("Includes 'world':", greeting.includes("world"));
console.log("Replace 'world' with 'JavaScript':", greeting.replace("world", "JavaScript"));

// Output examples
console.log(message);
console.log(info);


const instaname = "vhg";
// const newstring = instaname.charAt(0);

// sac =>0th index to 2nd index
const newstring = instaname.substring(0,3)

console.log(instaname);
console.log(newstring);
const anotherstring = instaname.slice(0,3)
console.log(anotherstring)   //same value

const snew = "   kanchan"
console.log(snew);
console.log(snew.trim())
