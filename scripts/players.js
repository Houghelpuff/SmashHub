var players_json = require("../resources/json/players.json");
var generic_json = require("../resources/json/generic.json");

var fs = require("fs");

function populateDropdown() {
  var dropdownItems = "";
  for (var player in players_json) {
    dropdownItems += "<a class=\"dropdown-item\" href=\"#\" onclick='displayPlayerStats(" + player + ")'>" + player + "</a><div class=\"dropdown-divider\"></div>";
  }
  console.log(dropdownItems);
  document.getElementById("player-dropdown").innerHTML = dropdownItems;
}

function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function createNewPlayer() {
  var playerID = document.getElementById("newPlayer").value;
  playerID = playerID.toLowerCase();
  if (playerID == "") {
    alert("You must enter an ID");
    document.getElementById("newPlayer").value = "";
    return;
  }
  if (hasWhiteSpace(playerID)) {
    alert("Username must not have spaces!");
    document.getElementById("newPlayer").value = "";
    return;
  }
  if (players_json[playerID]) {
    alert("Username already exists!");
    document.getElementById("newPlayer").value = "";
    return;
  }
  players_json[playerID] = generic_json;
  // console.log(players_json[playerID]);
  // console.log(Object.keys(players_json));

  fs.writeFile(__dirname + '/../resources/json/players.json', JSON.stringify(players_json), function (e) {
    if (e) throw e;
    console.log('Player Saved!');
    alert("Player Created!");
  });
  document.getElementById("newPlayer").value = "";
}