const AI = require("./AI");
const Human = require("./Human");
const Player = require("./Player");
const prompt = require("prompt-sync")();
//Import Player.js
class Game{
    constructor(){
        this.name = "Rock, Paper, Scissors, Lizard, Spock";
        this.handsArray = [];
    }
    mainMenu(){
        console.log(`What would you like to do? (Enter the number beside your choice)`);
        console.log (`1) Begin a new game against ${AI.name}`)
        console.log ("2) Begin a new game against another player (multiplayer)")
        console.log ("3) Exit");
        let mainMenuSelection = prompt();
            switch (mainMenuSelection){
                case "1":
                    this.playerOne = new Human;
                    this.playerTwo = new AI;
                    singlePlayerMode();
                    break;
                case "2":
                    this.playerOne = new Human;
                    this.playerTwo = new Human
                    break;
                case "3":
                    exitMenu();
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
}
    

    
//     function giveHumanPoint(playerHumanScore){
//         let playerHumanScore = 0;
//     }
    
// function giveAIPoint(playerAIScore){
//     let playerAIScore = 0; {
//         if (playerAIScore < 3){
//             let newAIScore = playerAIScore + 1;
//             console.log(`${AI.name} gets one point.`);
//             playerHumanSelection();
//             return newAIScore;
//         }
        
//     }
        
// }

 

    
    
    
    

// function compareSelections(playerHumanSelection, playerAISelection){
//     if (this.playerOne.handsArray === aIRandomSelection) {
//         console.log("Well, that's unfortunate... go again");
//         }

// 	//If the user chose rock...
// 	else if (playerHumanSelection === this.handsArray[0]) {
// 		if (playerAISelection === this.handsArray[1]) {
// 			alert(`${this.handsArray[1]} wins!`);
// 		} else if (playerAISelection === this.handsArray[2]) {
// 			alert(`${this.handsArray[0]} wins!`);
// 		} else if (playerAISelection === this.handsArray[3]) {
// 			alert(`${this.handsArray[0]} wins!`);
// 		} else if(playerAISelection === this.handsArray[4]){
// 			alert(`${this.handsArray[4]} wins!`);
// 		}
// 	}

// 	//If the user chose paper...
// 	else if (playerHumanSelection === this.handsArray[1]) {
// 		if (playerAISelection === this.handsArray[0]) {
// 			alert(`${this.handsArray[1]} wins!`);
// 		} else if (playerAISelection === this.handsArray[2]) {
// 			alert(`${this.handsArray[2]} wins!`);
// 		} else if (playerAISelection === this.handsArray[3]) {
// 			alert(`${this.handsArray[3]} wins!`);
// 		} else {
// 			alert(`${this.handsArray[1]} wins!`);
// 		}
// 	}

// 	//If the user chose scissors...
// 	else if (playerHumanSelection === this.handsArray[2]) {
// 		if (playerAISelection === this.handsArray[0]) {
// 			alert(`${this.handsArray[0]} wins!`);
// 		} else if (playerAISelection === this.handsArray[1]) {
// 			alert(`${this.handsArray[2]} wins!`);
// 		} else if (playerAISelection === this.handsArray[3]) {
// 			alert(`${this.handsArray[2]} wins!`);
// 		} else {
// 			alert(`${this.handsArray[4]} wins!`);
// 		}
// 	}

// 	//If the user chose lizard...
// 	else if (playerHumanSelection === this.handsArray[3]) {
// 		if (playerAISelection === this.handsArray[0]) {
// 			alert(`${this.handsArray[0]} wins!`);
// 		} else if (playerAISelection === this.handsArray[1]) {
// 			alert(`${this.handsArray[3]} wins!`);
// 		} else if (playerAISelection === this.handsArray[2]) {
// 			alert(`${this.handsArray[2]} wins!`);
// 		} else {
// 			alert(`${this.handsArray[3]} wins!`);
// 		}
// 	}

// 	//If the user chose spock...
// 	else if (playerHumanSelection === this.handsArray[4]) {
// 		if (playerAISelection === this.handsArray[0]) {
// 			alert(`${this.handsArray[4]} wins!`);
// 		} else if (playerAISelection === this.handsArray[1]) {
// 			alert(`${this.handsArray[1]} wins!`);
// 		} else if (playerAISelection === this.handsArray[2]) {
// 			alert(`${this.handsArray[4]} wins!`);
// 		} else {
// 			alert(`${this.handsArray[3]} wins!`);

// 		}
// 	}
// }


function verifyInputIsNumber(menuInput){
        if(parseInt(menuInput) > 0 && parseInt(menuInput) < 5){
            return true;
        }else{
            return false;
        }
    }
module.exports = Game