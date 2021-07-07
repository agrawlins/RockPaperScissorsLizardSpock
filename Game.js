const AI = require("./AI");
const Human = require("./Human");

//Import Player.js
class Game{
    constructor(){
        this.name = "Rock, Paper, Scissors, Lizard, Spock";
        this.handsArray = [];
        this.score = score;
    }
}
    // selectHumanOrAI(){
        //     console.log(`Welcome to ${Game.name}! What game mode are you playing? \n 1) Singleplayer \n 2) Multiplayer?`);
        //     let playerType = prompt();
        //     switch (playerType) {
            //         case "1":
            //             return Human;
            //         case "2":
            //             return AI;
            // }

        



function mainMenu(){
    console.log(`Please enter your name:`);
    let username = prompt();
    console.log(`Welcome, ${username}, to ${Game.name}! What would you like to do? \n (Enter the number beside your choice) \n 1) Begin a new game against the computer \n 2) Exit`);
    let mainMenuSelection = prompt();
    switch (mainMenuSelection) {
        case "1":
            //run mainGame();
        case "2":
            console.log(`Are you REALLY chickening out, ${username}?! \n 1) Yes, I'm terrified of robots! \n 2) On second thought, maybe I CAN beat the computer...`)
    }
}






module.exports = Game;