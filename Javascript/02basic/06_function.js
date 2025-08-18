function loginuser(username){
    return `${username} just log in `
}
console.log(loginuser("kanchan"))
// properly execute hoga 
//kanchan just log in

console.log(loginuser)
//function:loginuser

console.log(loginuser())
//undefined just log in

function number(...num){ //rest operator 
    return num
}
console.log(number(23,33,44,55,66))

// *******************************************
//scope
// function one(){
//     const username = "kanchan";
//     function two(){
//         const web = "youtube";
//         console.log(username );

//     }
//     console.log(web)
//     two()
// }
// one()

addone(9)

function addone(num){
    return num + 1
}

// addtwo(5)
const addtwo = function addtwo(num){
    return num + 2
}
// Cannot access 'addtwo' before initialization}
// hoistinh
