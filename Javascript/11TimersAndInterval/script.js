// setTimeout
let tm = setTimeout(function () {
    console.log("hello")
}, 5000)


// setInterval = har 5 second me chlega
setInterval(function () {
    // console.log("setinterval")/
}, 4000);

// clearTimeout
// clearInterval
clearTimeout(tm);

/////////////////////////////////////
let counter = 10;
let interval  = setInterval(function () {
    if (counter > 0) {
        counter--;
        console.log(counter);
    }
    else{
        clearInterval(interval);
    }


},1000);