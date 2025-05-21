// simple comparison we all know


console.log(null > 0 )   //false
console.log(null ==  0)      //false
console.log(null >= 0)      //true

console.log(undefined > 0 )   //false
console.log(undefined ==  0)      //false
console.log(undefined >= 0)

//the reason is that an equality check == and comparison > < >= <= work differently.
// comparison convert null to a number, treating it as 0 
// that's why (3) null >= 0 and (1) null > 0 is false;



// === => strict check(check both datatype and value)
// 