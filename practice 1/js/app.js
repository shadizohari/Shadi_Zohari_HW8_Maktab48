function checkEmail(value) {
    let regularEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return value.match(regularEmail);
}

function checkNumber(value) {
    let regularNumber = /(\+98|0)?9\d{9}$/;
    return String(value).match(regularNumber);
}

let submit = document.getElementById("submit");
let numberValid = document.getElementById("check-number");
let number = document.getElementById("number");
let isValidNumber = false;
let emailValid = document.getElementById("check-email");
let email = document.getElementById("email");
let isValidEmail = false;
let fnameValid = document.getElementById("check-fname");
let fname = document.getElementById("fname");
let isValidFname = false;
let lnameValid = document.getElementById("check-lname");
let lname = document.getElementById("lname");
let isValidLname = false;
let subject = document.getElementById("subject");

function check_valid(input, inputValid) {
    input.addEventListener("input", function () {
        if (input.value) {
            inputValid.style.visibility = "hidden";
            input.classList.remove("border-red");
        }
    })
}
check_valid(fname, fnameValid);
check_valid(lname, lnameValid);

number.addEventListener("keyup", function (e) {
    if (!checkNumber(e.target.value)) {
        numberValid.style.visibility = "visible";
        number.classList.add("border-red");
        isValidNumber = false;
    } else {
        numberValid.style.visibility = "hidden";
        number.classList.remove("border-red");
        isValidNumber = true;
    }
});

email.addEventListener("keyup", function (e) {
    if (!checkEmail(e.target.value)) {
        emailValid.style.visibility = "visible";
        email.classList.add("border-red");
        isValidEmail = false;
    } else {
        emailValid.style.visibility = "hidden";
        email.classList.remove("border-red");
        isValidEmail = true;
    }
});

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    if (!checkform()) {
        e.preventDefault();
    } else {
        alert("if alla thing is ok press ok");
    }
});





function checkform() {
    if (!fname.value) {
        fnameValid.style.visibility = "visible";
        fname.classList.add("border-red");
    } else {
        isValidFname = true;
        fnameValid.style.visibility = "hidden";
        fname.classList.remove("border-red");
    }
    if (!lname.value) {
        lnameValid.style.visibility = "visible";
        lname.classList.add("border-red");
    } else {
        lnameValid.style.visibility = "hidden";
        isValidLname = true;
        lname.classList.remove("border-red");
    }
    if (!isValidNumber) {
        numberValid.style.visibility = "visible";
        number.classList.add("border-red");
    }
    if (!isValidEmail) {
        emailValid.style.visibility = "visible";
        email.classList.add("border-red");
    }
    if (!isValidLname || !isValidFname || !isValidEmail || !isValidNumber) {
        return false;
    } else {
        return true;
    }

}