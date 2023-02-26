// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
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


const submitData = document.getElementById('submit');

submitData.addEventListener('click', function() {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var nameuser = document.getElementById('nameuser').value;
  var surename = document.getElementById('surename').value;


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  
      // Signed in 
      const user = userCredential.user;
      set(ref(database, 'users/' + user.uid), {
        name: nameuser,
        surname: surename,
        email: email,
        password: password
      })
      .then(() => {
        // Data saved successfully!
        alert('User created succesfully');
        // User is signed in.
        window.location.href = "index.html"; // redirect to homepage
         
        
      })
      .catch((error) => {
        // The write failed...
        alert(error);
      });
        
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      
    });
});
