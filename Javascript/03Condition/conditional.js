// Control Structures
// if, else if, else
// Q1. Write a program to check whether a number is positive, negative, or zero.
   let number = 5;
   if(number > 0 ){
     console.log("positive")
   }
   else if (number < 0 ){
    console.log("negative")
   }
   else{
    console.log("zero")
   }
//

// Q.2 Check Even or Odd
let num = 23;
if(num % 2 == 0 ){
    console.log("even")
}
else{
    console.log("odd")
}

// Q.3  Find the largest of three numbers

let a = 3, b = 13, c = 5;
if(a > b && a > c){
    console.log("a is the largest number")
}
else if(b > c && b > a){
    console.log("b is the largest number")
}
else if(c > a && c > b){
    console.log("c is the largest number")
}
else{
    console.log("invalid")
}

// switch statement
 
// Q.4 Q4. Write a calculator using switch (add, subtract, multiply, divide).
  let A =12 ;
  let B = 23;
let n = 1;
  console.log("enter a number:",n)
  switch (n) {
    case 1:
        console.log("A + B", A+B);
        break;
    case 2 :
        console.log("A-B",A-B);
        break;
    case 3 :
        console.log("A*B",A*B);
        break;
    case 4 :
        console.log("A/B", A/B);
        break;      
    default:

    console.log("invalid  data")
        break;
  }
