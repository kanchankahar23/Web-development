let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input", function(dets){
console.log(dets.target.value.length);
let left  = 20 - dets.target.value.length;
if(left <= 0){
    span.textContent = left;
    span.style.color = "red"
}
else{
    span.textContent = left;
    span.style.color = "black";
}
})