let container = document.querySelector(".container");
let body = document.body;
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let submit = document.getElementById("submit");
let errorMessages = document.querySelectorAll(".error-message");
let myStatus = false;


submit.addEventListener("click", () => {
    checkError();

    if (myStatus) {
        success();
    } else {
        container.style.display = "flex";
        checkError();
    }
});


function checkError() {
    let myArr = [userName, email, password, confirmPassword];

    for (let index = 0; index < myArr.length; index++) {
        if (myArr[index].value === "") {
            myArr[index].nextElementSibling.style.display = "flex";
            return myStatus = false;
        } else {
            myArr[index].nextElementSibling.style.display = "none";
        }
    }

    if (!email.value.includes("@")) {
        email.nextElementSibling.style.display = "flex";
        email.nextElementSibling.textContent = "Enter the valid email address";
        return myStatus = false;
    } else {
        email.nextElementSibling.style.display = "none";
    }

    if ((password.value.length < 8 ||  confirmPassword.value.length < 8)) {
        confirmPassword.nextElementSibling.style.display = "flex";
        confirmPassword.nextElementSibling.textContent = "Password needs to be more than 8 characters";
        return myStatus = false;
    } else {
        confirmPassword.nextElementSibling.style.display = "none";
    }


    if ((password.value.length >15 ||  confirmPassword.value.length >15)) {
        confirmPassword.nextElementSibling.style.display = "flex";
        confirmPassword.nextElementSibling.textContent = "Password needs to be less than 15 characters";
        return myStatus = false;
    } else {
        confirmPassword.nextElementSibling.style.display = "none";
    }

    

    if (!(password.value == confirmPassword.value)) {
        confirmPassword.nextElementSibling.style.display = "flex";
        confirmPassword.nextElementSibling.textContent = "Password and Confirm Password does not match";
        return myStatus = false;
    } else {
        confirmPassword.nextElementSibling.style.display = "none";
    }

    return myStatus = true;
}


function success() {
    container.style.display = "none";
    body.textContent = "Thanks for submitting the form, you are successfully Sign In. ✅";
    body.style.height = "100vh";
    body.style.fontSize = "5rem";
    body.style.textAlign = "center";
    body.style.paddingTop = "8rem";
}