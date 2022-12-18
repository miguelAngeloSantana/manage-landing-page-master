let mnain = window.document.getElementById("hamburguer");
let currentSlide = window.document.querySelector(".conteiner-people");
let ac1 = window.document.querySelector(".active1");
let ac2 = window.document.querySelector(".active2");
let ac3 = window.document.querySelector(".active3");
let ac4 = window.document.querySelector(".active4");

mnain.addEventListener("click", () => {
    let mmobile = window.document.getElementById("menu-main");
    let darkbk = window.document.getElementsByTagName("body")[0];
    mnain.classList.toggle("view");
    mmobile.classList.toggle("view");
    darkbk.classList.toggle("change");
});

function marginZero() {
    currentSlide.style.marginLeft = "0px"
    ac1.style.background = "#B28756";
    ac2.style.background = "transparent";
    ac3.style.background = "transparent";
    ac4.style.background = "transparent";
}

function marginOne() {
    let current = 0.25;
    let newMargin = (current * currentSlide.clientWidth);
    currentSlide.style.marginLeft = `-${newMargin}px`
    ac1.style.background = "transparent";
    ac2.style.background = "#B28756";
    ac3.style.background = "transparent";
    ac4.style.background = "transparent";
}

function marginTwo() {
    let current = 0.51;
    let newMargin = (current * currentSlide.clientWidth);
    currentSlide.style.marginLeft = `-${newMargin}px`
    ac1.style.background = "transparent";
    ac2.style.background = "transparent";
    ac3.style.background = "#B28756";
    ac4.style.background = "transparent"
}

function marginThree() {
    let current = 0.76;
    let newMargin = (current * currentSlide.clientWidth);
    currentSlide.style.marginLeft = `-${newMargin}px`
    ac1.style.background = "transparent";
    ac2.style.background = "transparent";
    ac3.style.background = "transparent";
    ac4.style.background = "#B28756";
}


function validarEmail() {
    let email = window.document.querySelector(".input-text");
    let error = window.document.getElementById("error");

    if(!email.checkValidity()) {
        error.innerHTML = "Please insert a valid email";
    }
}


function redefinirError() {
    let error = window.document.getElementById("error");
    if (error.innerHTML == "Please insert a valid email") {
        error.innerHTML = "";
    }
}