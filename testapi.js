
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.thebluealliance.com/api/v2/team/frc4/history/events", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
