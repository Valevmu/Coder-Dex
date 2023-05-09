var cardsDiv = document.querySelector("#cards");
var currentUserName = "";

function getUserName(element) {
  console.log(element.value);
  currentUserName = element.value;
}

function makeCoderCard(data) {
  var res = `<div class="card">
              <div>
                  <img src="${data.avatar_url}" alt="${data.login}">
                  <h3>${data.login} - ${data.name}</h3>
                  <p>Location: ${data.location}</p>
                  <p>Repositositories: ${data.public_repos} </p>
             </div>
             </div>`;

  return res;
}

async function search() {
  var response = await fetch("https://api.github.com/users/" + currentUserName);
  var coderData = await response.json();
  // console.log(coderData);
  cardsDiv.innerHTML = makeCoderCard(coderData) + cardsDiv.innerHTML;
}
