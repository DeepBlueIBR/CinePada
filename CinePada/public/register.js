import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDp6FbNxDzPoSrKmcFgZRdYCyumwrLeQFo",
  authDomain: "pada-flix.firebaseapp.com",
  databaseURL: "https://pada-flix-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pada-flix",
  storageBucket: "pada-flix.appspot.com",
  messagingSenderId: "437013800481",
  appId: "1:437013800481:web:220d26f207f756f988a560",
  measurementId: "G-RB4E465NFK"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);
	  //----- New Registration code start	  
	  document.getElementById("submit").addEventListener("click", function() {
		  var email =  document.getElementById("username").value;
		  var password = document.getElementById("password").value;
		  //For new registration
		  createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert("Registration successfully!!");
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(errorMessage);
		    alert(error);
		  });		  		  
	  })

      