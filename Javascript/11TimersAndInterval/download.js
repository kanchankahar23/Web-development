let counter = 0;
let progressbar = document.querySelector(".progress-bar");
let startBtn = document.querySelector("#startBtn");
 startBtn.addEventListener("click",function(){
    console.log("h");
let inter = setInterval(function () {
    if (counter <= 99) {
        counter++;
        console.log(counter);
        progressbar.style.width = `${counter}%`;
        progressbar.textContent = `${counter}%`;
        document.querySelector("h2").textContent = `${counter}%`

    }
    else {
        clearInterval(inter);
        document.querySelector("h1").textContent = "Downloaded"
    }
}, 60)
 })