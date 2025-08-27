let arr = [12, 23, 34, 45, 11];
arr.forEach(function (val) {
    console.log(val * val);
})


////////////////////////
// map tab use krna h jab apko ek naya array banana hai pichle array ke data ke basis par


let newarr = arr.map(function(val){
    return 12;
})
console.log(newarr);


//filter
let array = [1,2,3,4,5,6,7,8];
let narray = array.filter(function(val){
    if(val > 4) return true;
});
console.log(narray);



// reduce = jab sum krna ho 
let numbers = [12,12,34,55,774,65,21,56];
let ans = numbers.reduce(function(acc,curr){
return acc + curr;

},0);

console.log(ans);


// find = finding something 
let friend = ["shreya","priya","kanchan","shreya","mahak"];
let va= friend.find(function(val){
    return val === "shreya";
})
console.log(va);


// some
let number = [98,92,87,22,35,76];
let any = number.some(function(val){
    return val > 85;
});
console.log(any);
