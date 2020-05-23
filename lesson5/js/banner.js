
document.getElementById("year").textContent = new Date().getFullYear();
var d = new Date();
var day = d.getDate();
const WeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("currentTime").innerHTML = WeekDay[d.getDay()] + ", " + (new Date().toLocaleString
("en",{month:'long', year:'numeric', day:'numeric'})) + " " + new Date(new Date().getTime()).toLocaleTimeString();

const banner = document.querySelector('#banner');


if(WeekDay[d.getDay()] == "Friday") {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}