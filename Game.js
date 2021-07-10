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
        console.log(`Welcome to ${this.name}! What would you like to do? (Enter the number beside your choice) \n 1) Begin a new game against the computer  (Singleplayer) \n 2) Begin a new game against another player (Multiplayer) \n 3) Exit`);
        let mainMenuSelection = prompt();
            switch (mainMenuSelection){
                case "1":
                    this.playerOne = new Human;
                    this.playerTwo = new AI;
                    mainGame(this.playerOne, this.playerTwo);
                    break;
                case "2":
                    this.playerOne = new Human;
                    this.playerTwo = new Human
                    mainGame(this.playerOne, this.playerTwo);
                    break;
                case "3":
                    exitMenu();
                    break;
                default:
                    console.log("That's not a choice! Please enter '1', '2', or '3'!");
                    this.mainMenu();
            }
    }
}
function exitMenu(){
    console.log("Are you REALLY chickening out,?! \n 1) Yes. I just remembered; I'm allergic to winning! \n 2) On second thought, maybe I CAN do this...");
    let exitMenuSelection = prompt();
        switch (exitMenuSelection) {
            case "1":
                console.log("I know what you're made of now: it's called 'Afraidium'. It's yellow, and tastes like chicken... BUH-GAWK!!!");
                break;
            case "2":
                console.log("Now, THAT'S more like it!");
                this.mainMenu();
                break;
            default:
                console.log("That's not a choice! Please enter '1' or '2'!");
                exitMenu();
        }
}
function mainGame(playerOne, playerTwo){
    for (let i = 0; i < 3; i++) {
        playerOne.selection();
        playerTwo.selection();
        console.log(`${playerOne.username} chose ${playerOne.choice}!`);
        console.log(`${playerTwo.username} chose ${playerTwo.choice}!`);
        
        if(playerOne.choice === playerTwo.choice){
            i--;
            console.log("Well, crap, it's a tie... Go again!");
        }else if(playerOne.choice === playerOne.hands[0]){
            if(playerTwo.choice === playerTwo.hands[1]){
                console.log(`${playerTwo.hands[1]} covers ${playerOne.hands[0]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[2]){
                console.log(`${playerOne.hands[0]} smashes ${playerTwo.hands[2]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[3]){
                console.log(`${playerOne.hands[0]} smashes ${playerTwo.hands[3]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[4]){
                console.log(`${playerTwo.hands[4]} vaporizes ${playerOne.hands[0]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }
        }else if(playerOne.choice === playerOne.hands[1]){
            if(playerTwo.choice === playerTwo.hands[0]){
                console.log(`${playerOne.hands[1]} covers ${playerTwo.hands[0]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[2]){
                console.log(`${playerTwo.hands[2]} cuts ${playerOne.hands[1]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[3]){
                console.log(`${playerTwo.hands[3]} eats ${playerOne.hands[1]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[4]){
                console.log(`${playerOne.hands[1]} disproves ${playerTwo.hands[4]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }
        }else if(playerOne.choice === playerOne.hands[2]){
            if(playerTwo.choice === playerTwo.hands[0]){
                console.log(`${playerTwo.hands[0]} smashes ${playerOne.hands[2]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[1]){
                console.log(`${playerOne.hands[2]} cuts ${playerTwo.hands[1]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[3]){
                console.log(`${playerOne.hands[2]} decapitates ${playerTwo.hands[3]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[4]){
                console.log(`${playerTwo.hands[4]} vaporizes ${playerOne.hands[2]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }
        }else if(playerOne.choice === playerOne.hands[3]){
            if(playerTwo.choice === playerTwo.hands[0]){
                console.log(`${playerTwo.hands[0]} crushes ${playerOne.hands[3]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[1]){
                console.log(`${playerOne.hands[3]} eats ${playerTwo.hands[1]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[2]){
                console.log(`${playerTwo.hands[2]} decapitates ${playerOne.hands[3]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[4]){
                console.log(`${playerOne.hands[3]} poisons ${playerTwo.hands[4]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }
        }else if(playerOne.choice === playerOne.hands[4]){
            if(playerTwo.choice === playerTwo.hands[0]){
                console.log(`${playerOne.hands[4]} vaporizes ${playerTwo.hands[0]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[1]){
                console.log(`${playerTwo.hands[1]} disproves ${playerOne.hands[4]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }else if(playerTwo.choice === playerTwo.hands[2]){
                console.log(`${playerOne.hands[4]} vaporizes ${playerTwo.hands[2]}: ${playerOne.username} wins round ${i+1}!`);
                playerOne.score ++;
            }else if(playerTwo.choice === playerTwo.hands[3]){
                console.log(`${playerTwo.hands[3]} poisons ${playerOne.hands[4]}: ${playerTwo.username} wins round ${i+1}!`);
                playerTwo.score ++;
            }
        }
    } endGame(playerOne, playerTwo);
}
function endGame(playerOne, playerTwo){
    console.log(`${playerOne.username}'s score: ${playerOne.score}`);
    console.log(`${playerTwo.username}'s score: ${playerTwo.score}`);
    if(playerOne.score > playerTwo.score){
        console.log(`${playerOne.username} wins!`);
        requestRematch();
    }else if(playerOne.score < playerTwo.score){
        console.log(`${playerTwo.username} wins!`);
        requestRematch();
    }
}
function requestRematch(){
    console.log("Play again? \n 1) Yes \n 2) No");
    let requestRematchSelection = prompt();
    switch (requestRematchSelection) {
        case "1":
            mainGame(this.playerOne, this.playerTwo);
            break;
        case "2":
            console.log(`Thanks for playing ${this.name}!`)
        default:
            console.log("That's not a choice! Please enter '1'or '2'!");
            requestRematch();
    }
}
module.exports = Game;