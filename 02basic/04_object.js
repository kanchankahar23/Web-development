//declaring object(2 way );
// 1. object litral

const info = {
    name : "kanchan",
    age :21,
    education:"MCA"
}
console.log(info)
info.education = "bsc"
console.log(info)


// 2. object constructor 
const info1 = new Object();
info.name = "sachin";
info.age = 21;

console.log(info1)


// Accessing properties

//1.dot notation
//2.square brecket
console.log(info.name);        // Output: kanchan
console.log(info["age"]);      // Output: 21

// Object.freeze()

//function in object
 const subject = {
    javascript : "js",
    python :"py",
    c : "c",
    cpp : "cpp",
    fun : function(){
        console.log('hello ')
    }
 }

 console.log(subject.fun()); //hello
 console.log(subject.fun)  //function:fun
 console.log(Object.keys(subject));
 console.log(Object.values(subject))

 const obj1 = {1:'a',2:'b'};
 const obj2 = {3:'c' , 4:' d'};
 
 //merge4
//  1.Object.assign
const obj4 = Object.assign(obj1,obj2)
//  const obj3 = Object.assign({}, obj1 ,obj2);
//  console.log(obj3)
console.log(obj4)
 
// 2.sprade operator
const spr = {...obj1,...obj2}
console.log(spr)