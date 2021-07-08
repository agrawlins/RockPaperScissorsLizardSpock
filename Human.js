const Player = require("./Player");

//Create Child Class of Player for 
class Human extends Player {
    constructor(stringMake, stringModel) {
        this.options
        this.model = stringModel;
    }

    hands() {
        console.log(`The ${this.make} ${this.model}'s engine has started. Moving forward.`);
    }
}

module.exports = Human;
