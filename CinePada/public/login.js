import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDp6FbNxDzPoSrKmcFgZRdYCyumwrLeQFo",
  authDomain: "pada-flix.firebaseapp.com",
  databaseURL: "https://pada-flix-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pada-flix",
  storageBucket: "pada-flix.appspot.com",
  messagingSenderId: "437013800481",
  appId: "1:437013800481:web:f18fa5892a764fec88a560",
  measurementId: "G-RB4E465NFK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
console.log(app);
//----- Login code start	  
document.getElementById("submit").addEventListener("click", function() {
    var email =  document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert('Login successfully!!!');
      ocument.getElementById('logout').style.display = 'block';
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

