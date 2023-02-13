
var today = new Date();
var nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);

var datePicker = document.getElementById("datePicker");
datePicker.setAttribute("min", today.toISOString().substr(0, 10));
datePicker.setAttribute("max", nextMonth.toISOString().substr(0, 10));

// Code for event listeners to open the pages for login and register when clicked
function attachListeners() {
  // select the buttons
  const loginBtn = document.getElementById("login-button");
  const registerBtn = document.getElementById("register-button");

  // add click event listener to login button
  loginBtn.addEventListener("click", function() {
    window.location.href = "login.html";
  });

  // add click event listener to register button
  registerBtn.addEventListener("click", function() {
    window.location.href = "register.html";
  });
}
// call the attachListeners function after the page has loaded
document.addEventListener("DOMContentLoaded", attachListeners);

// Code to open the register page for button "Don't have an account? Register".

