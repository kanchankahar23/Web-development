// Loops: there are 5 type of loop in javascript
// 1.for
// Q1 Print numbers from 1 to 10 using a for loop
 for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
 }


//  Q2 Print even numbers from 2 to 20 using a for loop.
for(let j = 2;j <= 20;j++){
   if(j%2 == 0){
      console.log(j);
   }
}
// Q3 Calculate the sum of numbers from 1 to 100 using a for loop.
let sum = 0;
for(let n = 1; n<=100; n++){
sum = sum + n
}
console.log(sum)

// Print the multiplication table of 5 using a for loop.

for(let t = 1; t<= 10; t++){
 console.log(`5 * ${t} = ${5 * t}`)
}
// 2.while

// Print numbers from 10 to 1 using a do...while loop.
let Number = 10
while (Number>=1) {
   console.log(Number);
   Number--;
}

// Print all odd numbers between 1 and 50 using a while loop.
let nu = 1;
while(nu <= 50){
   if(nu % 2 != 0){
      console.log(nu)
      
   }
   nu++;
}
// 3.do...while
// 4.for...of
//  Print the elements of an array using a for...of loop.
const arr = ["kanchan","shreya","mahak","shruti","abhi"];
for (const name of arr) {
   console.log(name)
}

// 5.for...in
// Print the keys and values of an object using a for...in loop.
const info = {
   fname:"kanchan",
   age:21,
   city:"jabalpur",
   favfood:"string roll"
}
for (const e in info) {
   {
     
      console.log("key",e )
      console.log(info)
      // console.log("pair:", pair)
      
   }
}