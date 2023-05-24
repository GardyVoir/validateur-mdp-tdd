import checkPassword from "./checkPassword.js";

let btn = document.getElementById("btn");
let result = document.getElementById("result");
let password = document.getElementById("password");

function handleClick() {
  result.textContent = checkPassword(password.value);
}

btn.addEventListener("click", handleClick);
