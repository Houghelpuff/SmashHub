var player_json = require("../resources/json/players.json");
var fs = require("fs");

function loadPlayers() {
  var tags = "";
  for (var player in player_json) {
    var tag = "<input class='form-check-input' type='checkbox' id='" + player + "' value='" + player + "'><label for='" + player + "' style='margin-left: 5px;'>" + player + "</label><br>";
    tags = tags.concat(tag);
  }
  document.getElementById("player_checks").innerHTML = tags;
}

function checkCheck() {
  var players = [];
  for (var player in player_json) {
    if (document.getElementById(player).checked == true) {
      players.push(player);
    }
  }
  if (players.length < 2 || players.length > 8) {
    alert("Must have between 2 and 8 players");
    location.reload();
    return;
  }

  fs.writeFile(__dirname + '/../resources/json/current_players.json', JSON.stringify(players), function (e) {
    if (e) throw e;
    console.log('Player Set Saved!');
  });
  location.href = "../views/bracket.html";
}