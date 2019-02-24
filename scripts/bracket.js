var player_roster = require("../resources/json/current_players.json");

function shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function sortPlayers() {
  var shuffled_players = shuffle(player_roster);
  console.log(shuffled_players);
  for (var i = 0; i < shuffled_players.length; i++) {
    var id = "p" + (i+1);
    console.log(id);
    var tag = "<button type='button' class='btn btn-secondary' onclick=\"progressPlayer("+id+", " + shuffled_players[i] + ")\">"+shuffled_players[i]+"</button>";
    document.getElementById(id).innerHTML = tag;
  }
}

