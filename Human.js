const Player = require("./Player");
const prompt = require("prompt-sync")();
//Create Child Class of Player for 
class Human extends Player {
    constructor() {
        super();
        this.username = prompt("Please Enter your name:")
    }
    HumanSelection(){
        console.log(`Which gesture do you choose? \n
            1) Rock \n
            2) Paper \n
            3) Scissors \n
            4) Lizard \n
            5) Spock \n`);
            let humanSelection = prompt();
            if(verifyInputIsNumber(humanSelection) = true && (parseInt(humanSelection) > 0 && parseInt(humanSelection) < 6)){
                switch (humanSelection){
                    case "1":
                        this.choice = this.hands[0];
                    case "2":
                        this.choice = this.hands[1];
                    case "3":
                        this.choice = this.hands[2];
                    case "4":
                        this.choice = this.hands[3];
                    case "5":
                        this.choice = this.hands[4];
                }
            }else if(this.verifyInputIsNumber(humanSelection) = false){
                console.log("Please input a number 1-5");
            }
        }
    }
    // usernameSelection(){
    //     console.log(`Please enter your name:`);
    //     let username = prompt();
    //     if(verifyUsernameIsName(username) = true){
    //         console.log(`Welcome, ${username}, to ${Game.name}!`)
    //         mainMenu(username);
    //     }else if(verifyUsernameIsName(username) = false){
    //         console.log(`Whoa there! I may not be a smart program, but I know that ${username} ain't yer name: names ONLY HAVE LETTERS!!`);
    //         usernameSelection();
    //     }
    // }

//     verifyUsernameIsName(username){
//         if(/^[a-z]+$/i.test(username) = true){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

module.exports = Human;
