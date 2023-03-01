// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOQqm04_4p9NIxLx0ati3ZccPILBaXC10",
  authDomain: "cinepada.firebaseapp.com",
  databaseURL: "https://cinepada-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cinepada",
  storageBucket: "cinepada.appspot.com",
  messagingSenderId: "911988783776",
  appId: "1:911988783776:web:52eb1032b6a124bf5aa7c5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const user = auth.currentUser;


const myselect = document.getElementById("user-dropdown");
const logout = document.getElementById("logout");




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
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    const uid = user.uid;
    const loginBtn = document.getElementById("login-button");
    const registerBtn = document.getElementById("register-button");
    const userMenu = document.getElementById("user-dropdown");

    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';
    userMenu.style.display = 'block';
    myselect.addEventListener("change", function change() {
      const selectedOption = myselect.value;
      console.log(`Selected option is ${selectedOption}`);
  
      // Perform actions based on selected option
      if (selectedOption === "logout") {
        // Do something for option 1
        signOut(auth).then(() => {
        // Sign-out successful.
        location.reload();
        }).catch((error) => {
        // An error happened.
        });
      } else if (selectedOption === "option2") {
    // Do something for option 2
      } 
    });
  }else {
    
    // User is signed out
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
  }
});
var today = new Date();
var nextMonth = new Date();
nextMonth.setMonth(today.getMonth() + 1);

var datePicker = document.getElementById("datePicker");
 datePicker.setAttribute("min", today.toISOString().substr(0, 10));
 datePicker.setAttribute("max", nextMonth.toISOString().substr(0, 10));




