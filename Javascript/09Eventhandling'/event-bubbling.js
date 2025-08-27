// event bubbling
// jispe event aayega agar uspar listener ni hua to humaara event uske parent pr listener dhundhega aur aisa krte upar ki taraf move karega
let ul = document.querySelector("ul");
ul.addEventListener("click", function(i){
    // alert('clicked');
    console.log(i);
    // i.target.style.textDecoration = "line-through";
    i.target.classList.toggle("lt");
})

// event capturing

let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let d = document.querySelector('.d');
let button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log("button clicked")
})
d.addEventListener("click",function(){
    console.log("d clicked")
})
c.addEventListener("click",function(){
    console.log("c clicked")
})
b.addEventListener("click",function(){
    console.log("b clicked")
})
a.addEventListener("click",function(){
    console.log("a  clicked")
})


// jab bhi app click krte ho ya koi bhi event raise krte ho to apka jo event flow do phases me chlta hai 
// phase-1 event top level element se neeche ki taraf aayega 
// phase-2 event raised element se parent ki tarf jayega 

// aur pahle phase 1 hoti hai
// bahar se andar ki tarf aayega
