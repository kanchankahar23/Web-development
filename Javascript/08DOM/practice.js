// add highlight class to every even item in list

let ul = document.querySelector("ul")
let li = document.querySelectorAll('ul li:nth-child(2n)');
console.log(li);

li.forEach(function (e) {
    e.classList.add("highlight")
})

// set the font size of all <p> elements to 18px using style 
let p = document.querySelectorAll("p");
console.log(p);
p.forEach(function(el){
    el.style.fontSize = "28px";
})