import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getFirestore, query,  where, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAOQqm04_4p9NIxLx0ati3ZccPILBaXC10",
  authDomain: "cinepada.firebaseapp.com",
  databaseURL: "https://cinepada-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cinepada",
  storageBucket: "cinepada.appspot.com",
  messagingSenderId: "911988783776",
  appId: "1:911988783776:web:52eb1032b6a124bf5aa7c5"
};


const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const db = getFirestore(app);
    const bookingsRef = collection(db, 'bookings');
    const userBookingsQuery = query(bookingsRef, where('user', '==', user.uid));
    getDocs(userBookingsQuery).then((querySnapshot) => {
      const bookingsList = document.getElementById("bookingsList"); // get the element where we will display the booking IDs

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        var br = document.createElement('br'); // creating a br line
        const bookingId = doc.id; // get the ID of the booking document
        const bookingIdElem = document.createElement("div"); // create a new div element for the booking ID
        bookingIdElem.textContent = bookingId; // set the text content of the element to the booking ID
        bookingIdElem.classList.add("bookids");
        bookingsList.appendChild(bookingIdElem); // add the element to the bookingsList container
        
        bookingsList.appendChild(br); // add the br element to the bookingsList container
      });
    });
  } else {
    // user is not signed in
  }
 
});


