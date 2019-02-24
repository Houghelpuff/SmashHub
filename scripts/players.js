var players_json = require("../resources/json/players.json");
var fighters_json = require("../resources/json/fighters.json");
var generic_json = require("../resources/json/generic.json");

var fs = require("fs");

function populateDropdown() {
  var dropdownItems = "";
  for (var player in players_json) {
    dropdownItems += "<a class=\"dropdown-item\" href=\"#\" onclick='displayPlayerStats(\"" + player + "\")'>" + player + "</a><div class=\"dropdown-divider\"></div>";
  }
  console.log(dropdownItems);
  document.getElementById("player-dropdown").innerHTML = dropdownItems;
}

function savePlayers(json) {
  fs.writeFile(__dirname + '/../resources/json/players.json', JSON.stringify(json), function (e) {
    if (e) throw e;
    console.log('Player Saved!');
  });
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
  savePlayers(players_json);
  alert("Player Created!");
  document.getElementById("newPlayer").value = "";
  location.reload();
}

function getMostPlayed(playerKey, json) {
  var mostPlayed = json[playerKey].most_used;
  for (var key in json[playerKey].fighters) {
    // console.log(key + ": " + json[playerKey].fighters[key].times_used + " | " + mostPlayed + ": " + json[playerKey].fighters[mostPlayed].times_used);
    if (json[playerKey].fighters[key].times_used > json[playerKey].fighters[mostPlayed].times_used) {
      mostPlayed = key;
    }
  }
  console.log("Most Played: " + mostPlayed);
  json[playerKey].most_used = mostPlayed;
  savePlayers(json);
}

function getWorstPlayed(playerKey, json) {
  var worstPlayed = json[playerKey].worst;
  for (var key in json[playerKey].fighters) {
    // console.log(key + ": " + json[playerKey].fighters[key].losses + " | " + worstPlayed + ": " + json[playerKey].fighters[worstPlayed].losses);
    if (json[playerKey].fighters[key].losses > json[playerKey].fighters[worstPlayed].losses) {
      worstPlayed = key;
    }
  }
  console.log("Worst Played: " + worstPlayed);
  json[playerKey].worst = worstPlayed;
  savePlayers(json);
}

function getBestPlayed(playerKey, json) {
  var bestPlayed = json[playerKey].best;
  for (var key in json[playerKey].fighters) {
    // console.log(key + ": " + json[playerKey].fighters[key].wins + " | " + bestPlayed + ": " + json[playerKey].fighters[bestPlayed].wins);
    if (json[playerKey].fighters[key].wins > json[playerKey].fighters[bestPlayed].wins) {
      bestPlayed = key;
    }
  }
  console.log("Best Played: " + bestPlayed);
  json[playerKey].best = bestPlayed;
  savePlayers(json);
}

function displayPlayerStats(key) {
  console.log(key);
  getMostPlayed(key, players_json);
  getBestPlayed(key, players_json);
  getWorstPlayed(key, players_json);
  document.getElementById("p-name").innerHTML = key;
  document.getElementById("p-total").innerHTML = players_json[key].total_plays;
  document.getElementById("p-wins").innerHTML = players_json[key].wins;
  document.getElementById("p-losses").innerHTML = players_json[key].losses;
  document.getElementById("p-most").innerHTML = players_json[key].most_used;
  document.getElementById("p-best").innerHTML = players_json[key].best;
  document.getElementById("p-worst").innerHTML = players_json[key].worst;
  document.getElementById("fighter-image").src = "../" + fighters_json[players_json[key].most_used].image;
  document.getElementById("fighter-image").alt = fighters_json[players_json[key].most_used].name;
}