import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'

import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
import { collection, addDoc,doc, getDoc ,setDoc,runTransaction  } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'


populateUI();
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
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const auth = getAuth(app);
const user = auth.currentUser;


onAuthStateChanged(auth, (user) => {
  if (user) {
var date = localStorage.getItem("date");
var time = localStorage.getItem("time");
var tickets = localStorage.getItem("tickets");
const selectedMovieId = localStorage.getItem("selectedMovieId");


const db = getFirestore(app);
const bookingsRef = collection(db, 'bookings');

soldseats(selectedMovieId);

async function soldseats(selectedMovieId) {
const customId=selectedMovieId+date+time;
const docRef2 = doc(db,"availability",customId);
const docSnap = await getDoc(docRef2);
if (docSnap.exists()) {
  
  // Code to change sold seat class to "seat sold"
  const str = JSON.stringify(docSnap.data(printSelectedSeats()));
  const seatsSTRS = str.substring(12, str.length - 2).split(",");
  for ( const seatsSTR of seatsSTRS) {
    //console.log("The current element is: " + seatsSTR);
    const myDiv = document.getElementById(seatsSTR); 
    console.log(myDiv);
    myDiv.className = "seat sold";
  }

} else {
  }
}


// Function to intialize a booking in firestore
 function bookSeats(selectedMovieId) {
  const seatIds = printSelectedSeats();
  let seatIdstring = seatIds.toString();
  addDoc(bookingsRef, {
    movieId: selectedMovieId,
    date: date,
    time: time,
    seatIds: seatIdstring,
    date: date,
    email: user.email
  })
  .then(async (docRef) => {
    console.log('Booking created with ID: ', docRef.id);
    const customId=selectedMovieId+date+time;
    const docRef2 = doc(db,"availability",customId);
    const docSnap = await getDoc(docRef2);
    
    if (docSnap.exists()) {
      const transaction = await runTransaction(db, async (transaction)=> {
      console.log("Document data:", docSnap.data());
      const newavailability = docSnap.data().seatIds + ',' + seatIdstring;
      transaction.update(docRef2, { seatIds: newavailability });})


    } else {
      console.log("No such document!");      
      setDoc(doc(db, "availability", customId),{
        seatIds: seatIdstring
      })}
      
  })
  .catch((error) => {
    console.error('Error adding booking: ', error);
  });

}
function alertsuccess() {
  alert("Movie booked successfully!!")
}
const continueButton = document.getElementById("Continue");
continueButton.addEventListener("click", () => {
  bookSeats(selectedMovieId);
  soldseats(selectedMovieId);
  alert("Movie booked successfully!!")
  window.location.href = "login.html";

  
});
// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  if (selectedSeatsCount >= tickets) {
    selectedSeats.forEach((seat) => {
      seat.disabled = !seat.classList.contains("selected");
    });
  }


  count.innerText = selectedSeatsCount;

}

// Define the printSelectedSeats function
function printSelectedSeats() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatIds = Array.from(selectedSeats).map((seat) => seat.id);
  console.log(seatIds);
  return seatIds;
}

// Seat click event
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seat") && !e.target.classList.contains("sold")) {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const maxSeats = tickets; // set your maximum number of seats here
    
    if (selectedSeats.length < maxSeats || e.target.classList.contains("selected")) {
      e.target.classList.toggle("selected");
      printSelectedSeats(); // Call the function to log the selected seats
      updateSelectedCount();
    } else {
      alert("You can only select up to " + maxSeats + " seats.");
    }
    
  }
});


// Initial count and total set
updateSelectedCount();
  } else {
    alert('You are not signed in, please signed in to book!!');
    window.location.href = "login.html";
  }
});

// Get data from localstorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        console.log(seat.classList.add("selected"));
      }
    });
  }
}
console.log(populateUI())

