const AI = require("./AI");
const Human = require("./Human");
const Options = require("./Options");
const Player = require("./Player");

//Import Player.js
class Game{
    constructor(){
        this.name = "Rock, Paper, Scissors, Lizard, Spock";
        this.handsArray = [];
        this.playerOne = new Player(Human);
        this.playerTwo = new Player(AI);
    }

    mainMenu(username){
        console.log(`What would you like to do? \n (Enter the number beside your choice) \n
            1) Begin a new game against ${AI.name} \n
            2) Begin a new game against another player (multiplayer) \n
            3) Exit`);
        let mainMenuSelection = prompt();
        if(verifyInputIsNumber(mainMenuSelection) = true){
            switch (mainMenuSelection) {
                case "1":
                    mainGameStepOne(this.playerOne);
                case "2":
                    mainGameStepOne(this.playerOne, this.playerTwo)
                case "3":
                    exitMenu(username)
            }
        }else if(verifyInputIsNumber(mainMenuSelection) = false){
            console.log("Try entering JUST A NUMBER this time...")
        }
    }

    exitMenu(username){
        console.log(`Are you REALLY chickening out, ${username}?! \n
            1) Yes, I'm terrified of robots! \n
            2) On second thought, maybe I CAN do this...`);
        let exitMenuSelection = prompt();
        if(verifyInputIsNumber(exitMenuSelection) = true){
            switch (exitMenuSelection) {
                case "1":
                    console.log("I know what you're made of now: it's called 'Afraidium'. It's yellow, and tastes like chicken... BUH-GAWK!!!");
                    usernameSelection();
                case "2":
                    console.log("Now, THAT'S more like it!")
                    mainMenu(username);
            }
        }else if(verifyInputIsNumber(exitMenuSelection) = false){
            console.log("Try entering JUST A NUMBER this time...")
        }
    }

    mainGameStepOne(username){
        console.log(`${Game.name}! Which symbol will you choose? \n
        1) Rock \n
        2) Paper \n
        3) Scissors \n
        4) Lizard \n
        5) Spock \n`);
        let mainGameStepOne = prompt();
        if(verifyInputIsNumber(mainGameStepOne) = true && (parseInt(mainGameStepOne) > 0 && parseInt(mainGameStepOne) < 6)){
            switch (mainGameStepOne){
                case "1":
                    mainGameStepTwo(username)
                    return this.handsArray[0];
                case "2":
                    mainGameStepTwo(username)
                    return this.handsArray[1];
                case "3":
                    mainGameStepTwo(username);
                    return this.handsArray[2];
                case "4":
                    mainGameStepTwo(username);
                    return this.handsArray[3];
                case "5":
                    mainGameStepTwo(username);
                    return this.handsArray[4];
            }
        }else if(verifyInputIsNumber(tutorialStepOne) = false){
            console.log("Please input a number 1-5");
        }
    }
    mainGameStepTwo(username){
    }

    optionsPeckingOrder(){
        let rockVersusRock = this.handsArray[0] && this.handsArray[0];
        let rockVersusPaper = this.handsArray[0] && this.handsArray[1];
        let rockVersusScissors = this.handsArray[0] && this.handsArray[2];
        let rockVersusLizard = this.handsArray[0] && this.handsArray[3];
        let rockVersusSpock = this.handsArray[0] && this.handsArray[4];
        let paperVersusRock = this.handsArray[1] && this.handsArray[0];
        let paperVersusPaper = this.handsArray[1] && this.handsArray[1];
        let paperVersusScissors = this.handsArray[1] && this.handsArray[2];
        let paperVersusLizard = this.handsArray[1] && this.handsArray[3];
        let paperVersusSpock = this.handsArray[1] && this.handsArray[4];
        let scissorsVersusRock = this.handsArray[2] && this.handsArray[0];
        let scissorsVersusPaper = this.handsArray[2] && this.handsArray[1];
        let scissorsVersusScissors = this.handsArray[2] && this.handsArray[2];
        let scissorsVersusLizard = this.handsArray[2] && this.handsArray[3];
        let scissorsVersusSpock = this.handsArray[2] && this.handsArray[4];
        let lizardVersusRock = this.handsArray[3] && this.handsArray[0];
        let lizardVersusPaper = this.handsArray[3] && this.handsArray[1];
        let lizardVersusScissors = this.handsArray[3] && this.handsArray[2];
        let lizardVersusLizard = this.handsArray[3] && this.handsArray[3];
        let lizardVersusSpock = this.handsArray[3] && this.handsArray[4];
        let spockVersusRock = this.handsArray[4] && this.handsArray[0];
        let spockVersusPaper = this.handsArray[4] && this.handsArray[1];
        let spockVersusScissors = this.handsArray[4] && this.handsArray[2];
        let spockVersusLizard = this.handsArray[4] && this.handsArray[3];
        let spockVersusSpock = this.handsArray[4] && this.handsArray[4];

    }
    
    verifyInputIsNumber(menuInput){
        if(/^\d+$/.test(menuInput) = true){
            return true;
        }else{
            return false;
        }
    }
    
    

    optionsArray() {
        let rock = new Options("Rock");
        let paper = new Options("Paper");
        let scissors = new Options("Scissors");
        let lizard = new Options("Lizard");
        let spock = new Options("Spock");
        this.handsArray.push(rock, paper, scissors, lizard, spock);
    }
}
   

module.exports = Game;