let form = document.querySelector('form');
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailregex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    let emailans = emailregex.test(email.value);
    let passwordans = passwordregex.test(password.value);

    let isvalid = true;
    if (!emailans) {
        let error = document.querySelector("#emailError");

        error.textContent = "YOU TYPE WRONG EMAIL"
        error.style.display = "initial";
        isvalid = false;
    }
    if (!passwordans) {

        let errorpas = document.querySelector("#passwordError");
        errorpas.textContent = "YOU TYPE WRONG password";
        errorpas.style.display = "initial";
        isvalid = false;
    } 
    if(isvalid){
document.querySelector("#result-msg").textContent = "everything is okay "
    }
})

