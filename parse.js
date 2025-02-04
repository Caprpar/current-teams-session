// today ger dagens datum i format yyyy-mm-dd
const thisDay = new Date();
const today = thisDay.toISOString().split("T")[0];
let hrefElement = document.querySelector("a");
let dateElement = document.querySelector("#date > h1");
document.querySelector("#dateEl").textContent = today;
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekday = weekdays[thisDay.getDay()];

fetch("api.json")
  .then((response) => response.json())
  .then((result) => {
    for (const day of result) {
      if (day.date === today || day.date === weekday) {
        hrefElement.href = day.link;
        dateElement.textContent = today;
        console.log(day.date);
        console.log(weekday);
        if (!day.isRemote) {
          dateElement.textContent = "idag är det enbart föreläsning på plats";
        }
        break;
      }
    }
  });
