//Import Human.js and AI.js

//Create class for Player (Human-OR-AI)
class Player {
    constructor(selectPlayerType) {
        this.score = 0
        this.choice;
        this.hands = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    }
}
module.exports = Player;