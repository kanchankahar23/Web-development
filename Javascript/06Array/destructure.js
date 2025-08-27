
// destructuring of the array 

let arr = [1,2,3,4,5,6,7,8,];
// let [a,b] = arr;
// a = 1, b = 2

let [a,b, ,c] = arr;
console.log(arr);


//spread operator
let array = [1,2,3,4,5,6,7,8,9];
let arr2 = [...array];
console.log(array);
console.log(arr2);
arr2.pop();
console.log(arr2);