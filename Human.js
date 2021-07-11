const Player = require("./Player");
const prompt = require("prompt-sync")();

class Human extends Player {
    constructor() {
        super();
        this.username = prompt("Please Enter your name:");
    }
    selection(){
        console.log(`Which gesture do you choose, ${this.username}? \n 1) ${this.hands[0]} \n 2) ${this.hands[1]} \n 3) ${this.hands[2]} \n 4) ${this.hands[3]} \n 5) ${this.hands[4]} \n`);
            this.choice = prompt();
            switch (this.choice){
                case "1":
                    this.choice = this.hands[0];
                    break;
                case "2":
                    this.choice = this.hands[1];
                    break;
                case "3":
                    this.choice = this.hands[2];
                    break;
                case "4":
                    this.choice = this.hands[3];
                    break;
                case "5":
                    this.choice = this.hands[4];
                    break;
                default:
                    console.log("Try selecting 1-5 this time!");
            }
        }
    }
module.exports = Human;