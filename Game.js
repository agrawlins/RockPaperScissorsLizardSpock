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
}
    
function mainMenu(username){
        console.log(`What would you like to do? \n (Enter the number beside your choice) \n
            1) Begin a new game against ${AI.name} \n
            2) Begin a new game against another player (multiplayer) \n
            3) Exit`);
        let mainMenuSelection = prompt();
        if(verifyInputIsNumber(mainMenuSelection) = true){
            switch (mainMenuSelection) {
                case "1":
                    humanSelection(this.playerOne);
                case "2":
                    humanSelection(this.playerOne, this.playerTwo)
                case "3":
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

    let playerHumanScore = 0;
    
    function giveHumanPoint(playerHumanScore){
        
    }
    
function giveAIPoint(playerAIScore){
    let playerAIScore = 0; {
        if (playerAIScore < 3){
            let newAIScore = playerAIScore + 1;
            console.log(`${AI.name} gets one point.`);
            playerHumanSelection();
            return newAIScore;
        }
        
    }
        
}

  playerHumanSelection();      
function playerHumanSelection(){
        console.log(`${Game.name}! Which symbol will you choose? \n
        1) Rock \n
        2) Paper \n
        3) Scissors \n
        4) Lizard \n
        5) Spock \n`);
        let humanSelection = prompt();
        if(verifyInputIsNumber(humanSelection) = true && (parseInt(humanSelection) > 0 && parseInt(humanSelection) < 6)){
            switch (humanSelection){
                case "1":
                    mainGameStepTwo(username, humanSelection);
                    return this.handsArray[0];
                case "2":
                    mainGameStepTwo(username, humanSelection);
                    return this.handsArray[1];
                case "3":
                    mainGameStepTwo(username, humanSelection);
                    return this.handsArray[2];
                case "4":
                    mainGameStepTwo(username, humanSelection);
                    return this.handsArray[3];
                case "5":
                    mainGameStepTwo(username, humanSelection);
                    return this.handsArray[4];
            }
        }else if(verifyInputIsNumber(humanSelection) = false){
            console.log("Please input a number 1-5");
        }
    }
function playerAISelection(){
            let aIRandomSelection = Math.floor(Math.random() * 5);
        if (aIRandomSelection = 0) {
            console.log(`${AI.name} has chosen ${this.handsArray[0]}`);
            return aIRandomSelection;
        } else if (aIRandomSelection = 1) {
            console.log(`${AI.name} has chosen ${this.handsArray[1]}`);
            return aIRandomSelection;
        } else if (aIRandomSelection = 2) {
            console.log(`${AI.name} has chosen ${this.handsArray[2]}`);
            return aIRandomSelection;
        } else if (aIRandomSelection = 3) {
            console.log(`${AI.name} has chosen ${this.handsArray[3]}`);
            return aIRandomSelection;
        } else if (aIRandomSelection = 4){
            console.log(`${AI.name} has chosen ${this.handsArray[4]}`);
            return aIRandomSelection;
        }
    } 
    
    
    
    

function compareSelections(playerHumanSelection, playerAISelection){
    if (this.playerOne.handsArray === aIRandomSelection) {
        console.log("Well, that's unfortunate... go again");
        }

	//If the user chose rock...
	else if (playerHumanSelection === this.handsArray[0]) {
		if (playerAISelection === this.handsArray[1]) {
			alert(`${this.handsArray[1]} wins!`);
		} else if (playerAISelection === this.handsArray[2]) {
			alert(`${this.handsArray[0]} wins!`);
		} else if (playerAISelection === this.handsArray[3]) {
			alert(`${this.handsArray[0]} wins!`);
		} else if(playerAISelection === this.handsArray[4]){
			alert(`${this.handsArray[4]} wins!`);
		}
	}

	//If the user chose paper...
	else if (playerHumanSelection === this.handsArray[1]) {
		if (playerAISelection === this.handsArray[0]) {
			alert(`${this.handsArray[1]} wins!`);
		} else if (playerAISelection === this.handsArray[2]) {
			alert(`${this.handsArray[2]} wins!`);
		} else if (playerAISelection === this.handsArray[3]) {
			alert(`${this.handsArray[3]} wins!`);
		} else {
			alert(`${this.handsArray[1]} wins!`);
		}
	}

	//If the user chose scissors...
	else if (playerHumanSelection === this.handsArray[2]) {
		if (playerAISelection === this.handsArray[0]) {
			alert(`${this.handsArray[0]} wins!`);
		} else if (playerAISelection === this.handsArray[1]) {
			alert(`${this.handsArray[2]} wins!`);
		} else if (playerAISelection === this.handsArray[3]) {
			alert(`${this.handsArray[2]} wins!`);
		} else {
			alert(`${this.handsArray[4]} wins!`);
		}
	}

	//If the user chose lizard...
	else if (playerHumanSelection === this.handsArray[3]) {
		if (playerAISelection === this.handsArray[0]) {
			alert(`${this.handsArray[0]} wins!`);
		} else if (playerAISelection === this.handsArray[1]) {
			alert(`${this.handsArray[3]} wins!`);
		} else if (playerAISelection === this.handsArray[2]) {
			alert(`${this.handsArray[2]} wins!`);
		} else {
			alert(`${this.handsArray[3]} wins!`);
		}
	}

	//If the user chose spock...
	else if (playerHumanSelection === this.handsArray[4]) {
		if (playerAISelection === this.handsArray[0]) {
			alert(`${this.handsArray[4]} wins!`);
		} else if (playerAISelection === this.handsArray[1]) {
			alert(`${this.handsArray[1]} wins!`);
		} else if (playerAISelection === this.handsArray[2]) {
			alert(`${this.handsArray[4]} wins!`);
		} else {
			alert(`${this.handsArray[3]} wins!`);

		}
	}
}


function verifyInputIsNumber(menuInput){
        if(/^\d+$/.test(menuInput) = true){
            return true;
        }else{
            return false;
        }
    }
function optionsArray(){
        let rock = new Options("Rock");
        let paper = new Options("Paper");
        let scissors = new Options("Scissors");
        let lizard = new Options("Lizard");
        let spock = new Options("Spock");
        this.handsArray.push(rock, paper, scissors, lizard, spock);
    }
module.exports = Game