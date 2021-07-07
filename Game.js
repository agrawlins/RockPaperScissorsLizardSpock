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

usernameSelection();     

function usernameSelection(){
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


function mainMenu(username){
    console.log(`What would you like to do? \n (Enter the number beside your choice) \n
        1) Begin a new game against ${AI.name} \n
        2) Exit`);
    let mainMenuSelection = prompt();
    if(verifyInputIsNumber(mainMenuSelection) = true){
        switch (mainMenuSelection) {
            case "1":
                tutorialRequest(username);
                //run mainGame();
            case "2":
                exitMenu(username)
        }
    }else if(verifyInputIsNumber(mainMenuSelection) = false){
        console.log("Try entering JUST A NUMBER this time...")
    }
}

function exitMenu(username){
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

function tutorialRequest(username){
    console.log(`Alright, ${username}; let's yeet this wheat! \n Do you need a quick run-down on how the game works first? \n 
        1) Yes, hold my hand to the promised land! \n
        2) Nope! Tutorials are for sissies!
        3) On second thought, I don't think I want to play anymore... (Exit)`);
    let tutorialMenuSelection = prompt();
    if(verifyInputIsNumber(tutorialMenuSelection) = true){
        switch (tutorialMenuSelection) {
            case "1":
                tutorial(username);
            case "2":
                mainGame(username);
            case "3":
                exitMenu(username);
        }
    }else if(verifyInputIsNumber(mainMenuSelection) = false){
        console.log("Try entering JUST A NUMBER this time...")
    }
}


function mainGame(username){
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
            case "2":
                mainGameStepTwo(username, mainGameStepOne);
            case "3":
                mainGameStepTwo(username, mainGameStepOne);
            case "4":
                mainGameStepTwo(username, mainGameStepOne);
            case "5":
                mainGameStepTwo(username, mainGameStepOne);
        }
    }else if(verifyInputIsNumber(tutorialStepOne) = false){
        console.log("Please input a number 1-5");
    }
}




function tutorial(username){
    console.log(`Alright, ${username}, here's how to play ${Game.name}: \n
        First, you select one of five options; \n
        1) Rock, \n
        2) Paper, \n
        3) Scissors, \n
        4) Lizard, or \n
        5) Spock. \n
        (select an option now by entering a number 1-5)`);
    let tutorialStepOne = prompt();
    if(verifyInputIsNumber(tutorialStepOne) = true && (parseInt(tutorialStepOne) > 0 && parseInt(tutorialStepOne) < 6)){
        switch (tutorialStepOne) {
            case "1":
                mainGameStepTwo(username, tutorialStepOne);
            case "2":
                //enter "Paper" as contender
            case "3":
                //enter "Scissors" as contender
            case "4":
                //enter "Lizard" as contender
            case "5":
                //enter "Spock" as contender
        }
    }else if(verifyInputIsNumber(tutorialStepOne) = false){
        console.log("Please input a number 1-5");
    }
}

function mainGameStepTwo(username, ){
    aISelection()
}

function aISelection(){
    let selection = Math.floor(Math.random() * 5);
    if(selection = 1){
        return "Rock";
    }else if(selection = 2){
        return "Paper";
    }else if(selection = 3){
        return "Scissors";
    }else if(selection = 4){
        return "Lizard";
    }else if(selection = 5){
        return "Spock";
    }else{
        aISelection();
    }
}

function verifyInputIsNumber(menuInput){
    if(/^\d+$/.test(menuInput) = true){
        return true;
    }else{
        return false;
    }
}

function verifyUsernameIsName(username){
    if(/^[a-z]+$/i.test(username) = true){
        return true;
    }else{
        return false;
    }
}






module.exports = Game;



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