var players_json = require("../resources/json/players.json");

function populateDropdown() {
  var dropdownItems = "";
  for (var player in players_json) {
    dropdownItems += "<a class=\"dropdown-item\" href=\"#\" onclick='displayPlayerStats(" + player + ")'>" + player + "</a><div class=\"dropdown-divider\"></div>";
  }
  console.log(dropdownItems);
  document.getElementById("player-dropdown").innerHTML = dropdownItems;
}