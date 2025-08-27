let h1 = document.querySelector("h1");
h1.textContent = "yes this is";
h1.appendChild(document.querySelector("div"));


// style updates via .style and classlist (Add,remove, toggle)
let h2 = document.querySelector("h2");
h2.textContent = "red color";
h2.style.color = "red"
h2.style.backgroundColor = "yellow";
h2.style.fontFamily= "Gilroy";

// class lgani h 
document.querySelector
("h3").classList.add("change");;


document.querySelector("h3").classList.remove("change");

h1.classList.toggle("change");


