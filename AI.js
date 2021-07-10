const Player = require("./Player");

class AI extends Player {
    constructor(){
        super();
        this.username = "Computer";
    }
    selection(){
        this.choice = this.hands[Math.floor(Math.random() * this.hands.length)];
    }
}
module.exports = AI;