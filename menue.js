let readlineSync = require("readline-sync");
var day= readlineSync.question("chose the day: ")
var time=readlineSync.question("what is the time: ")
switch(day){
    case "monday":
        // console.log("select meal");
        switch(time){
            case "breakfast":
                console.log("vadapao");
                break;
            case "lunch":
                console.log("plao");
                break;
             case "dinner":
                console.log("rajama chawal");
        }
        break;
    case "tuesday":
        // console.log("select meal");
        switch(time){
            case "breakfast":
                console.log("meggi");
                break;
            case "lunch":
                console.log("biryani");
                break;
            case "dinner":
                console.log("fraid rise");
        };
        break;
    case "wednesday":
        // console.log("select meal");
        switch(time){
            case "breakfast":
                console.log("pasta");
                break;
            case "lunch":
                console.log("chole chawal");
                break;
            case "dinner":
                console.log("roti sabji");
        };    
};