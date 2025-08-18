//shallow copy =>  an object is a copy whose properties share the same reference (jo me change krugi original array me bhi change hoga )
//deep copy => an object is a copy whose properties do niot share the same references  as tjode of the source object from which the copy was made

//declaring array 
// let  num1 = [1,2,3,4,5,6,7,8];

//using Array constructor 
const heroes = new Array('shakstiman','salman ','tom cruise')

console.log(heroes)

// method of array = 8
// 1.push
// 2.pop
// 3.unshift
// 4.shift
// 5.concat
// 6.toString
// 7.slice
// 8. splice
//9.indexof
// 10. includes
//11. join

let arr = ["max" ,"daisy" ,"lio","junpio","ro"]
arr.push("marry");

console.log(arr);
//insert at the end

let arr1 = [12, 13,14,15,16,17,18]
arr1.pop();
console.log(arr1)
//delete at the end

let game = ['tennis','basketball','golf','cricket']
game.shift();
console.log(game)

//delete in front 
 

let fav =['book','kitkat','coding','chhole bhature']

fav.unshift('sachin');
console.log(fav);
//add element in front 


//slice
let  num1 = [1,2,3,4,5,6,7,8];
console.log('a' , num1);
const my1 =  num1.slice(1,4);
//2,3,4
console.log(my1);
console.log('b' , num1);
//2,3,4,5

const my2 = num1.splice(1,4);
console.log(my2);

console.log(num1)
// after using the splice it give us last value also and delete this value from the original array

