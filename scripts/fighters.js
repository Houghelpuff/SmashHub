function displayFighterStats(key) {
  var fighters = {}
  $.getJSON("../resources/json/fighters.json", function (fighter_json) {
    // console.log(fighter_json[fighter].name)
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
  })
}