var btnSignin = document.getElementById("sign-in");
var btnSignup = document.getElementById("sign-up");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function() {
  body.className = "sign-in-js";
});
btnSignup.addEventListener("click", function () {
  body.className = "sign-up-js";
});