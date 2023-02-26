// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'

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



console.log(app);
//----- Login code start	  
document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();
    var email =  document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert('Login successfully!!!');
      window.location.href = "index.html"; // redirect to homepage
      //document.getElementById('logout').style.display = 'block';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		 		  
});

  //----- Logout code start	  
  document.getElementById("logout").addEventListener("click", function() {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      alert('Sign-out successful.');
      document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
      // An error happened.
      console.log('An error happened.');
    });		  		  
  });
  //----- End

