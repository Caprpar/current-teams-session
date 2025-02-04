// today ger dagens datum i format yyyy-mm-dd
const thisDay = new Date();
const today = thisDay.toISOString().split("T")[0];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekday = weekdays[thisDay.getDay()];

let clock = thisDay.getHours();
let isNoon = clock > 12 ? true : false; // Ge länk till ramverk ifall klockan är mindre än 12

let hrefElement = document.querySelector("a");
let dateElement = document.querySelector("#date > h1");
// Debug >=====================0
// weekday = "Thursday";
// let debugDay = "2025-02-06";
// let today = "2025-02-06";
// isNoon = false;

document.querySelector("#dateEl").textContent = today;

fetch("api.json")
  .then((response) => response.json())
  .then((result) => {
    for (const day of result) {
      if (!day.isRemote) {
        dateElement.textContent = "idag är det enbart föreläsning på plats";
      } else {
        dateElement.textContent = today;
      }
      if (weekday === day.date && !isNoon) {
        hrefElement.href = day.link;
        console.log("Måndag");
        break;
      } else if (weekday === day.date) {
        hrefElement.href = day.link;
        console.log("Tisdag");
        break;
      } else if (day.date === today) {
        hrefElement.href = day.link;
        break;
      }
    }
  });
