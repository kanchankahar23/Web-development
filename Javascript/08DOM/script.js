//DOM manipulation
// html se element select krna 
// text badalna
// html badalana
// css badalana
// attribute
// event listeners

let h1 = document.querySelector("#abcd");
console.log(abcd);

h1.textContent = "My name is kanchan";
h1.innerHTML = " kanchan";
h1.hidden = true;

// innerhtml  = "<i>hey</i>"

// attribute manipulation
let a = document.querySelector("a");
// a.href = "https://www.google.com";


// setattribute
a.setAttribute("href","https://google.com");

let img = document.querySelector('img');
// img.setAttribute("src","https://plus.unsplash.com/premium_photo-1700984735869-bd9eba083198?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")


//getattribute
let click = document.querySelector("#click");
console.log(click.getAttribute("href"));


// remove attribute
a.removeAttribute("href");


// dynamic dom manipulation
let h2 = document.createElement("h2");
let body = document.querySelector("body");

h2.textContent = "hello ji";
body.appendChild(h2);
console.log(h2);
