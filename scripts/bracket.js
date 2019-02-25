var player_roster = require("../resources/json/current_players.json");

function shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function sortPlayers() {
  var shuffled_players = shuffle(player_roster);
  console.log(shuffled_players);
  for (var i = 0; i < shuffled_players.length; i++) {
    var id = "p" + (i + 1);
    console.log(id);
    var tag = "<button type='button' class='btn btn-secondary' onclick='progressPlayer(\"" + id + "\", \"" + shuffled_players[i] + "\")\'>" + shuffled_players[i] + "</button>";
    console.log(tag);
    document.getElementById(id).innerHTML = tag;
  }
}

function progressPlayer(currentId, player) {
  console.log("Current ID: " + currentId);
  var placement = currentId.replace(/[^\d.]/g, '');
  console.log(placement);
  var nextId = "";
  if (placement == 1 || placement == 2) {
    if (currentId.includes("p")) {
      console.log("hello")
      nextId = 'j1'
    } else if (currentId.includes("j")) {
      nextId = "s1";
    } else {
      nextId = "winner";
    }
  } else if (placement == 3 || placement == 4) {
    if (currentId.includes("p")) {
      nextId = 'j2'
    } else if (currentId.includes("j")) {
      nextId = "s2";
    } else {
      nextId = "winner";
    }
  } else if (placement == 5 || placement == 6) {
    if (currentId.includes("p")) {
      nextId = 'j3'
    }
  } else if (placement == 7 || placement == 8) {
    if (currentId.includes("p")) {
      nextId = 'j4'
    }
  } else if (currentId == 'winner') {
    alert(player + " wins!");
    return;
  }
  var tag = "<button type='button' class='btn btn-secondary' onclick='progressPlayer(\"" + nextId + "\", \"" + player + "\")\'>" + player + "</button>";
  document.getElementById(nextId).innerHTML = tag;
}