const Player = require("./Player");

//Import Rock.js, Paper.js, Scissors.js, Lizard.js, & Spock.js
class AI extends Player {
    constructor(){
        super();
        this.name = "Computer";
    }
    aISelection(){
        this.choice = this.hands[Math.floor(Math.random() * this.hands.length)];
    }
}

module.exports = AI;