const userInput = document.getElementById("loginField");
const passInput = document.getElementById("passwordField");
const buttonInput = document.getElementById("loginButton");
const showPass = document.getElementById("showPass");

buttonInput.innerHTML = "Login";
passInput.type = "password";

function login() {
  alert("Login: " + userInput.value + ", Password: " + passInput.value);
  console.log(userInput.value + ", " + passInput.value);
}

function showText() {
  if (passInput.type == "password") {
    passInput.type = "";
  } else {
    passInput.type = "password";
  }
}

buttonInput.addEventListener("click", login);
showPass.addEventListener("click", showText);
