
// this is very not finished and is very bad and has errors
// i just need to commit and push to fix something so shh
// (its something with the github ssh keys)
//oh yeah im tired by the way

let choices = new Map();
choices.set("scissors", 1);
choices.set("paper", 2);
choices.set("rock", 3);


let gameOfRPS = true;
let newgame = true

var opponentHP = 3;
var userHP = 3;

while(gameOfRPS) {
    // if (newgame) {
    // var userHP = 3; // im too tired to make this work like it should
    // var opponentHP = 3;
    // }
    

    let opponentchoice = Math.floor(Math.random() * 3 + 1);
    let userchoice = Math.floor(Math.random() * 3 + 1);

    if (opponentHP <= 0 || userHP <= 0) {
        gameOfRPS = false;
        newgame = false;
    }

    if (userchoice === 1 && opponentchoice === 3) {
        userHP = userHP - 1;
    }
    else if (userchoice < opponentchoice) {
        opponentHP = opponentHP - 1;
    }
    else if (userchoice > opponentchoice) {
        userHP = userHP - 1;
    }
    else {
        opponentHP = opponentHP - 1;
    }

    console.log(opponentHP);
    console.log(userHP);


}
