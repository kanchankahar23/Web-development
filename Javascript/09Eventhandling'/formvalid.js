let form = document.querySelector("form");
let formcontainer = document.querySelector("#forms");
let inp = document.querySelectorAll("input");
form.addEventListener("submit", function (dets) {
    dets.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inp[0].value);

    let h2 = document.createElement("h2");
    h2.textContent = `${inp[1].value}`
    let h3 = document.createElement("h3");
    h3.textContent = `${inp[2].value}`;
    let p = document.createElement("p");
    p.textContent = `${inp[3].value}`;
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(p);

    formcontainer.appendChild(card);
    inp.forEach(function (i) {
        if (inp != submit) {
            i.value = " ";
        }

    })

})