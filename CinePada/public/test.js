var date = localStorage.getItem("date");
var time = localStorage.getItem("time");
var tickets = localStorage.getItem("tickets");
const selectedMovieId = localStorage.getItem("selectedMovieId");
console.log(date)
document.getElementById("date").innerHTML =date;
document.getElementById("time").innerHTML =time;
document.getElementById("tickets").innerHTML =tickets;
document.getElementById("selectedMovieId").innerHTML =selectedMovieId;
if (selectedMovieId)