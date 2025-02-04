// today ger dagens datum i format yyyy-mm-dd
const today = new Date().toISOString().split("T")[0];
let hrefElement = document.querySelector("a");
let dateElement = document.querySelector("#date > h1");
document.querySelector("#dateEl").textContent = today;

fetch("api.json")
  .then((response) => response.json())
  .then((result) => {
    for (const day of result) {
      if (day.date === today) {
        hrefElement.href = day.link;
        dateElement.textContent = day.date;
        if (!day.isRemote) {
          dateElement.textContent = "idag är det enbart föreläsning på plats";
        }
        break;
      }
    }
  });
