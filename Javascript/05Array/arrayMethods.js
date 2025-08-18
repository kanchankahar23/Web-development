// JAVASCRIPT array methods 

// 1. push()
//  Task: Add "grapes" to ["apple", "banana","mango"]
// Description: Adds an element at the end of the array.
const fruits = ["apple", "banana", "mango"];
console.log(fruits)
fruits.push("grapes");
console.log(fruits);


//  2. pop()
//  Task: Remove last item from ["pen", "pencil", "eraser"]
// Description: Removes and returns the last item of an array.

const items = ["pen","pencil","eraser"];
console.log(items)
items.pop("eraser");
console.log(items)

//  3. unshift()
//  Task: Add "mango" to start of ["banana", "apple"]
//  Description: Adds an element at the beginning of an array.

const fru =["banana","apple"];
console.log(fru)
fru.unshift("mango")
console.log(fru)
//  4. shift()
//  Task: Remove the first item from ["red", "green", "blue"]
//  Description: Removes and returns the first element.
  const color = ["red","green","blue"];
  console.log(color);
  color.shift();
  console.log(color)

//  5. length
//  Task: Find the length of ["a", "b", "c", "d"]
//  Description: Returns the total number of items in the array.

const alphabet = ["A","B","C","D","E","F"];
console.log(alphabet.length) 
//6 


//  6. forEach()
// Task: Print all names from ["Kanchan", "Ravi", "shreya","jain" ,"Qaran"]
// Description: Iterates over each item in the array.
let names = ["kanchan" ,"sachin", "shreya","jain","ravi"]
names.forEach(name => {
    console.log(name)
});


// 7. includes()
//  Task: Check if "rose" is in ["lotus", "sunflower", "rose"]
//  Description: Returns true if the item exists in the array.
const flower = ["lotus","sunflower","rose", "lilly"]
console.log(flower.includes("rose"))
console.log(flower.includes("potato"))


//  8. indexOf()
//  Task: Find index of "orange" in ["apple", "orange", "banana"]
//  Description: Returns the first index of the specified element.

const f = ["apple","orange","banana"];
console.log(f.indexOf("orange"))


//  9. join()
//  Task: Convert ["JavaScript", "is", "fun"] into a sentence
//  Description: Combines array elements into a string.
 const sentence = ["Javascript","is","fun"]
 console.log(sentence.join())

// 10. reverse()
//  Task: Reverse ["a", "b", "c", "d"]
//  Description: Reverses the order of items in the array.


let chars = ["a", "b", "c", "d"];
console.log(chars.reverse());


//  11. map()
//  Task: Create squares of [1, 2, 3, 4]
//  Description: Creates a new array by transforming each item.

let nums = [1,2,3,4,5,6,7,8,9];
let squares = nums.map(n => {
 return n * n;
})
console.log(squares)
let cube = nums.map(n =>{
  return n * n * n
})
console.log(cube)

//  12. filter()
//  Task: Get even numbers from [1, 2, 3, 4, 5, 6]
//  Description: Filters elements based on a condition.


const NUMS = [1,2,3,4,5,6,7,8,9]
let even  = NUMS.filter(n =>{
 return n % 2==0 
})
console.log(even)

//  13. find()
//  Task: Get first number > 10 from [4, 9, 12, 3]
//  Description: Returns the first matching element.

const data = [4,9,12,3];
let datafind = data.find(n =>{
  return n > 10;
})
console.log(datafind);
