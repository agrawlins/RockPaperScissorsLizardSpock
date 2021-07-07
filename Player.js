//Import Human.js and AI.js

//Create class for Player (Human-OR-AI)
class Player {

}

class Player1 {
    nameOfPlayer1 = prompt("Enter your username:");
    layer1 = nameOfPlayer1;
}

class Player2 {
    constructor(){
        nameOfPlayer2 = selectHumanOrAI();
        player2 = nameOfPlayer2;
    }
}
//Import selections from Human.js and AI.js
//Export selections to Game.js


module.exports = Player;