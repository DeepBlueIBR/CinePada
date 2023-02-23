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


function sentmail(params){
  var tempparams={
    from_name: document.getElementById("emailinput").value,
    Issues: document.getElementById("Issues").value,
    message: document.getElementById("description").value,
  };
  emailjs.send('service_178ak8k','template_oqbj1gs',tempparams).then(function(res){
    console.log('success',res.status);
  })
} 