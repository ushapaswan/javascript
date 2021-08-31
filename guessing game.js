let readlineSync = require("readline-sync");
let userChances = readlineSync.questionInt("how many times you want to guess: ");
let randomNumber= Math.floor(Math.random()*10);
chances = userChances;
for (var i=chances; i>0; i--){
    console.log("you have "+i+"chances to guess")
    userguesses=readlineSync.questionInt("guess the number: ");

    if (userguesses==randomNumber){
        console.log("correct guess you win");
        break;
    }
    else if (userguesses>randomNumber){
        console.log("go lower");
    }
    if(userguesses<randomNumber){
        console.log("go heiher");
    }
    else if(i==1){
    console.log("sadly your chances are complete")
}

}

