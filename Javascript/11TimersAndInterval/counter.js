let counter = 0;
let increase = document.querySelector("#increment");
let decreament = document.querySelector("#decrement");
let reset = document.querySelector("#reset");
let countertext = document.querySelector("#counter");

increase.addEventListener("click",function(){
    // console.log("h");
    counter = counter + 1;
    // console.log(counter);
  countertext.textContent = counter;
})

decreament.addEventListener("click",function(){
    if(countertext.textContent >= 0 ){
        counter--;
    countertext.textContent = counter; 
    }
    else{
        countertext.textContent = 0;
    }
   
})
reset.addEventListener("click",function(){
    countertext.textContent = 0;
})