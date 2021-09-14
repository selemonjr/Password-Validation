function checkPassword() {
    const message = document.querySelector(".text");
    const password = document.querySelector("#password").value;
    const confirm = document.querySelector("#confirm").value;
    //if password is not empty the following code will be executed
    if(password.length != 0) {
        if(password == confirm) {
            message.textContent = "Successfully Matched!";
            message.style.backgroundColor = "green";
        } else {
            message.textContent = "Error! Password doesn't Match";
            message.style.backgroundColor = "red";
        }
        // if password is empty the following code will be executed//
    } else {
        message.textContent = "";

    }
};
checkPassword();
const password = document.querySelector("#password");
const iconEl = document.querySelector(".icon");
//enabling and disabling the visibility of the password//
function show() {
    iconEl.addEventListener("click",() => {
        if(password.type === "password") {
            password.type = "text";
        } else {
            password.type = "password";
        }
        });
}
show();