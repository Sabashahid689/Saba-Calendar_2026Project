// ================= script.js =================
const calendarEl = document.getElementById("calendar");
const year = 2026;


const months = [
"January", "February", "March", "April",
"May", "June", "July", "August",
"September", "October", "November", "December"
];


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();


months.forEach((month, monthIndex) => {
const monthDiv = document.createElement("div");
monthDiv.className = "month";


const title = document.createElement("h2");
title.textContent = `${month} ${year}`;


const daysRow = document.createElement("div");
daysRow.className = "days";
days.forEach(d => {
const el = document.createElement("div");
el.textContent = d;
daysRow.appendChild(el);
});


const datesGrid = document.createElement("div");
datesGrid.className = "dates";


const firstDay = new Date(year, monthIndex, 1).getDay();
const totalDays = new Date(year, monthIndex + 1, 0).getDate();


for (let i = 0; i < firstDay; i++) {
const empty = document.createElement("div");
empty.className = "date empty";
datesGrid.appendChild(empty);
}


for (let d = 1; d <= totalDays; d++) {
const dateEl = document.createElement("div");
dateEl.className = "date";
dateEl.textContent = d;


if (
today.getFullYear() === year &&
today.getMonth() === monthIndex &&
today.getDate() === d
) {
dateEl.classList.add("today");
}


datesGrid.appendChild(dateEl);
}


monthDiv.appendChild(title);
monthDiv.appendChild(daysRow);
monthDiv.appendChild(datesGrid);
calendarEl.appendChild(monthDiv);
});