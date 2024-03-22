"use strict";
const request = new XMLHttpRequest();
request.open("GET", "https://api.disneyapi.dev/character");
request.send();

request.addEventListener("load", function () {
  const responseData = JSON.parse(this.responseText);
  let data = responseData.data;
  const characters = document.querySelector(".card-columns");

  for (let index in data) {
    const html = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data[index].imageUrl}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data[index].name}</h5>
    <p class="card-text"><a href='${data[index].sourceUrl}' target="_blank">${data[index].sourceUrl}</a></p>
  </div>
</div>`;
    characters.insertAdjacentHTML("beforeend", html);
    console.log(index);
  }
});
