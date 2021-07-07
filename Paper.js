const Lizard = require("./Lizard");
const Rock = require("./Rock");
const Scissors = require("./Scissors");
const Spock = require("./Spock");

class Paper {
    1 = Rock;
    2 = Spock;
    3 = Scissors;
    4 = Lizard;
}
//Kills
    //Rock
    //Spock
//Gets Killed By
    //Scissors
    //Lizard

module.exports = Paper;