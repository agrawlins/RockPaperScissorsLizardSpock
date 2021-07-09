const Player = require("./Player");

//Create Child Class of Player for 
class Human extends Player {
    constructor(stringMake, stringModel) {
        super();
        this.username = prompt("Please Enter your name:")
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
