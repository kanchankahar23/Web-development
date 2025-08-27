// add "mango" at the end and "pineapple" at the beginning of this array

let fruits = ["apple" , "banana"];
fruits.push("mango");
fruits.unshift("pineapple");

console.log(fruits);

//Replace "mango" with "kiwi" in the array
let fruit = ["pineapple","apple","banana","mango"]
fruit.pop();
fruit.push("kiwi");
console.log(fruit);

// insert "red" and "blue" at index 1 in this array:
let colors = ["green", "yellow"];
colors.splice(1,0,"red", "blue");
console.log(colors);

//Extract only the middle 3 elements from this arrays
let item = [1,2,3,4,5,6,7,8];
let a = item.slice(1,4);
console.log(a);


// sort this array alphabatically and then reverse it 
let names = ["zara","arjun","mira","bhavya"];
names.sort().reverse();
//  names.reverse();

console.log(names);


// use .filter() to keep numbers greater than 10
let anynumber = [ 12,34,1,4,3,56,12];
 let greater = anynumber.filter(function(val){
    if(val > 10){
        return val;
    }
})
console.log(greater);

// use reduce() to find the sun of this array
let arr = [10,20,30];
let newarray = arr.reduce((acc , curr)=>{
    return acc + curr;
})
console.log(arr);
console.log(newarray);

// use find() to get the first number less than 10
let nn = [12,15,3,8,96];
let kanchan = nn.find((val)=>{
    return val< 10;

})
console.log(kanchan);

// destructure this array to get firstname and last name 
let fullname = ["harsh","sharma"];
let [fname,lname]  = fullname;

console.log(fname);
console.log(lname);

// merge two arrays using spread operator 
let ab = [1,2];
let cd = [3,4];
 let merge = [...ab,...cd];
console.log(merge); 

