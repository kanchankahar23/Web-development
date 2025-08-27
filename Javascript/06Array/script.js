//Array = store multiple value

let arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1[2] = 12;
console.log(arr1);

// 1. push() → Add at the end
let fruitss = ["apple", "banana"];

// Add "mango" at the end using push.
fruitss.push("mango");
console.log(fruitss);


// 2. pop() → Remove from the end
let cities = ["Delhi", "Mumbai", "Pune", "Chennai"];

//  Remove the last city using pop.
cities.pop();
console.log(cities);


// 3. unshift() → Add at the beginning
let numbers = [2, 3, 4];

//  Add 1 at the beginning using unshift.
numbers.unshift();
console.log(numbers);


//  4. shift() → Remove from the beginning
let colors = ["red", "green", "blue"];

// Remove the first color using shift.
colors.shift();
console.log(colors);



// 5. splice() → Add/Remove at any position
let marks = [50, 60, 70, 80];

//  Remove 60 and insert 65 at its place using splice.
marks.splice(1,60,65);
// isme value remove and add dono ho skti h 
// splice( index,remove element , insert element )



//6. slice() -> Ye original array ko change nahi karta, balki naya array return karta hai.


let array = [10,20,30,40,50];
let part = array.slice(1,4);
console.log(part);
// [20,30,40]
console.log(array);
// [10,20,30,40,50]


// 10 Practice Questions on Array Methods
// Q1.Given: let arr = [1, 2, 3];
// 👉 Use push to add 4 at the end.
        let arr2 = [1, 2, 3];
        arr2.push(4);
        console.log(arr2);


// Q2.Given:let arr = [10, 20, 30, 40];
// 👉 Use pop to remove the last element and print the result.
 let  arr3 = [10, 20, 30, 40];
 arr3.pop();
 console.log(arr3);


// Q3. Given:

let arr4 = ["red", "green", "blue"];

// 👉 Use unshift to add "yellow" at the beginning.
arr4.unshift("yellow");
console.log(arr4);


// Q4. Given:

let arr5 = [5, 10, 15, 20];


// 👉 Use splice to remove 10 and insert 99 instead.
arr5.splice(1,1,99);

  
// Q5.  Given:

let nus = [2, 4, 6, 8];

// 👉 Use includes to check if 6 is present.
nus.includes(6);


// Q6. Given:
let num = [1, 2, 3, 4, 5];


// 👉 Use map to create a new array with squares of each number.
let squares = num.map((val)=>{
return val * val;

}) 
console.log(squares);


// Q7.Given:

let number = [1, 2, 3, 4, 5, 6];


// 👉 Use filter to create a new array containing only even numbers.


// Q8.  Given:

let nums = [10, 20, 30, 40];


// 👉 Use reduce to find the sum of all elements.
// 

// Q9.  Given:

let fruits = ["banana", "apple", "mango"];


// 👉 Use sort and reverse to make the output "mango, banana, apple".
let change= fruits.sort(function(a,b){
    return a-b;
});
console.log(fruits);
console.log(change);
