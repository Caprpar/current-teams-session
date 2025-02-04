```js
// Paste this in console at teamslinks

content = document.querySelector(".no-overflow")
let ol = content.childNodes[2]

for (let link of ol.children) {
  let api = []
  let date = link.childNodes[0].textContent;
  let myObj = {};
  myObj["date"] = date;
  try {
    let href = link.childNodes[1].nextSibling.href;
    myObj["link"] = href;
    myObj["isRemote"] = true;
  } catch (error) {
    let text = link.childNodes[1].textContent;
    myObj["isRemote"] = false;
    console.log(error);
  }
  api.push(myObj);
}
console.log(api) // copy this array and save it as api.json
```
