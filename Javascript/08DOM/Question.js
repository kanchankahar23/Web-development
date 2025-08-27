// Q1 select the heading of a page by id and change its text to "welcome to SRIT"

let h1 = document.querySelector("h1");
h1.textContent = "welcome to SRIT";

// use querySelectorAll to select all buttons with class "buy-now"

let buttons = document.querySelectorAll(".buy-now");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("hiii");
    })
})

// select all <li> element and print their text using a loop 
let lis = document.querySelectorAll("li");
for(let i = 0;i < lis.length; i++){
    console.log(lis[i].textContent);
}


// another method
let list = document.querySelectorAll("li");
list.forEach(function(val){
console.log(val);
})

// text print krna h
let lists = document.querySelectorAll("li");
lists.forEach(function(val){
    console.log(val.textContent);
})

// select a paragraph and replace its content with:
// <b>updated</b>by javascript
let p = document.querySelector("p");
p.innerHTML = "<b>updated</b>by javascript";
console.log(p);

// how do you get the src of an image using javascript
let img =  document.querySelector("img");
console.log(img.src);


// another method
console.log(img.getAttribute("src"));


// add a title attribute
let div = document.querySelector("div");
div.setAttribute("tittle", "hello");



// remove and disable that button
let signin = document.querySelector(".sign-in");
signin.removeAttribute("disabled");



// difference between appendchild() and prepend()

// appendchild() = last me element add krta h 
// prepend()=  shuruat me element add krta h 

// can you remove an element using removeChild()
// document.querySelector("div").removeChild(Elementnode 
// )


// create a new list item <li>new task </li> and add it to the end of a <ul>

let ul = document.querySelector("ul");
 let li = document.createElement("li");
 li.textContent = "home";
 ul.appendChild(li);


// select the first item in a list and delete it from the DOM.

//  create a new image element with a placeholder source and add it at the top of a div
let image = document.createElement("img");
image.setAttribute("src","https://unsplash.com/photos/yellow-car-drives-on-winding-road-through-forest-7mwyeUtdmSw");
div.prepend(image);


let listselect = document.querySelector(".ho");
listselect.remove();


// we can also do 
document.querySelector("ul").removeChild(li)

