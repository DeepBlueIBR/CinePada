
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
  const contactBtn = document.getElementById("contact");


  // add click event listener to login button
  loginBtn.addEventListener("click", function() {
    window.location.href = "login.html";
  });

  // add click event listener to register button
  registerBtn.addEventListener("click", function() {
    window.location.href = "register.html";
  });

   // add click event listener to contact us button
   contactBtn.addEventListener("click", function() {
    window.location.href = "contact.html";
  });
}
// call the attachListeners function after the page has loaded
document.addEventListener("DOMContentLoaded", attachListeners);

// Selecting the movies from their posters
function selectPoster(poster) {
  
  // Remove the "selected" class from all posters
  const posters = document.getElementsByClassName("poster");
  for (const p of posters) {
    p.classList.remove("selected");
  }
  
  // Add the "selected" class to the selected poster
  poster.classList.add("selected");
}

function seatSelection(){
  var date = document.forms["booking"]["datePicker"].value;
  var time = document.forms["booking"]["time"].value;
  var tickets = document.forms["booking"]["tickets"].value;

  if (date == "" || time == "" || tickets == "") {
    alert("Please fill in all fields");
    return false;
  }

}