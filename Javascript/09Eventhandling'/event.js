// event listener ka mtlb hai ki action ka reaction ho 
let h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
    h1.style.color = "red";
})

function dbl() {
    p.style.color = "green";
}

let p = document.querySelector("p");
p.addEventListener("dblclick", dbl);
// it means jb bhi ham function pass krege to only reference pass krege


// romoving event listener
p.removeEventListener("dblclick", dbl);

// input
let input = document.querySelector("input");
input.addEventListener("input", function (e) {
    // console.log("typed");
    if (e.data != null) {
        console.log(e.data)
        console.log(e.target.value)
    }
})


// let inp = document.querySelector("input");
// inp.addEventListener("input",function(e){
//     if(e.data != null){
//         console.log(e.data);
//     }
// })

// change
// change event tab chlta  h jb apka koi input select ya text area me koi change aa jaye 
let sel = document.querySelector("select");
sel.addEventListener("change", function (e) {
    console.log(e.target.value);
    h1.textContent = ` ${e.target.value} device selected  `
})



//////////////////////////////////////////////
let h2 = document.querySelector("h2");
window.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "") {
        h1.textContent = "spc";
    }
    else {
        h2.textContent = `${e.key}`;
    }

})

//////////////////////////////////////////
let div = document.querySelector("#Uploadfile");
let fileinput = document.querySelector("#fileinput");

div.addEventListener("click", function () {
    fileinput.click();
})

fileinput.addEventListener("change", function (dets) {
    console.log(dets.target.files[0].name);
    const file = dets.target.files[0];
    if (file) {
        div.textContent = file.name;
    }
})

//for the cancel 
// we have to use this

//////////////////////////////////////////
