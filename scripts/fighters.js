var fighter_json = require("../resources/json/fighters.json");

function displayFighterStats(key) {
  fighter = fighter_json[key];
  document.getElementById("fighter-image").src = "../" + fighter.image;
  document.getElementById("fighter-image").alt = fighter.name;
  document.getElementById("f-name").innerHTML = fighter.name;
  document.getElementById("f-type").innerHTML = fighter.type;
  document.getElementById("f-game").innerHTML = fighter.game;
  document.getElementById("f-tier").innerHTML = fighter.tier;
  document.getElementById("f-total").innerHTML = fighter.total_fights;
  document.getElementById("f-wins").innerHTML = fighter.wins;
  document.getElementById("f-losses").innerHTML = fighter.losses;
}