const AI = require("./AI");
const Human = require("./Human");
const Options = require("./Options");

//Import Player.js
class Game{
    constructor(){
        this.name = "Rock, Paper, Scissors, Lizard, Spock";
        this.handsArray = [];
        this.score = score;
    }

    usernameSelection(){
        console.log(`Please enter your name:`);
        let username = prompt();
        if(verifyUsernameIsName(username) = true){
            console.log(`Welcome, ${username}, to ${Game.name}!`)
            mainMenu(username);
        }else if(verifyUsernameIsName(username) = false){
            console.log(`Whoa there! I may not be a smart program, but I know that ${username} ain't yer name: names ONLY HAVE LETTERS!!`);
            usernameSelection();
        }
    }

    mainMenu(username){
        console.log(`What would you like to do? \n (Enter the number beside your choice) \n
            1) Begin a new game against ${AI.name} \n
            2) Exit`);
        let mainMenuSelection = prompt();
        if(verifyInputIsNumber(mainMenuSelection) = true){
            switch (mainMenuSelection) {
                case "1":
                    mainGameStepOne(username);
                case "2":
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
                    mainGameStepTwo(username, mainGameStepOne);
                    return parseInt(mainGameStepOne);
                case "2":
                    mainGameStepTwo(username, mainGameStepOne);
                    return parseInt(mainGameStepOne);
                case "3":
                    mainGameStepTwo(username, mainGameStepOne);
                    return parseInt(mainGameStepOne);
                case "4":
                    mainGameStepTwo(username, mainGameStepOne);
                    return parseInt(mainGameStepOne);
                case "5":
                    mainGameStepTwo(username, mainGameStepOne);
                    return parseInt(mainGameStepOne);
            }
        }else if(verifyInputIsNumber(tutorialStepOne) = false){
            console.log("Please input a number 1-5");
        }
    }
    mainGameStepTwo(username, mainGameStepOne){
        aISelection()
    }
    
    verifyInputIsNumber(menuInput){
        if(/^\d+$/.test(menuInput) = true){
            return true;
        }else{
            return false;
        }
    }
    
    verifyUsernameIsName(username){
        if(/^[a-z]+$/i.test(username) = true){
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