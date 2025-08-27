let abcd = document.querySelector("div");
abcd.addEventListener("mouseover",function(i){
abcd.style.backgroundColor  = "yellow";
})
abcd.addEventListener("mouseout",function(i){
abcd.style.backgroundColor  = "red";
})

/////////////////////
// mousemove
window.addEventListener("mousemove",function(i){
  console.log(i.clientX,i.clientY);
  abcd.style.top = i.clientX + "px";
  abcd.style.left = i.clientY + "px";
  

})
