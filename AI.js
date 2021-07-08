const Game = require("./Game");
const Player = require("./Player");

//Import Rock.js, Paper.js, Scissors.js, Lizard.js, & Spock.js
class AI extends Player {
    constructor(){
        this.name = "Computer";
        this.aISelection = this.aISelection();
    }
    aISelection(){
        let selection = Math.floor(Math.random() * 5);
        return selection;
    }
}

module.exports = AI;