let nm = document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit", function(e){
e.preventDefault();
if(nm.value.length <= 2){
document.querySelector(".hide").style.display = "initial";
}
else{
    document.querySelector(".hide").style.display = "none";
}
})

// let regex ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
// autocomplete property = off for no suggestion