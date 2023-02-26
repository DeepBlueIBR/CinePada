import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'

const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");

populateUI();

const firebaseConfig = {
  apiKey: "AIzaSyDp6FbNxDzPoSrKmcFgZRdYCyumwrLeQFo",
  authDomain: "pada-flix.firebaseapp.com",
  databaseURL: "https://pada-flix-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pada-flix",
  storageBucket: "pada-flix.appspot.com",
  messagingSenderId: "437013800481",
  appId: "1:437013800481:web:220d26f207f756f988a560",
  measurementId: "G-2375ZGP67J"
};

import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js'
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "mana",
    last: "manasou",
    born: 1984
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
}

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

// Seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();