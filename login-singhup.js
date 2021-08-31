var fs = require("fs");
let readlineSync = require("readline-sync");
// var length=password.length;
let user=readlineSync.question("login or signup");
if (user=="singnup"){
    let username=readlineSync.question("enter the username ");
    var password= readlineSync.question("enter the password ");
    if(password.length>=11){
        if (password.includes( "@") || password.includes("#") ){
            if (password[0].toUpperCase()== password[0]){
                if(password.includes(1)|| password.includes(2)|| password.includes(3)){ 
                    let password2=readlineSync.question("confirm your password");
                    if (password2==password){
                        let name=readlineSync.question("enter your full name");
                        let dateOfBirth=readlineSync.questionInt("enter your date of birth ");
                        let gender=readlineSync.question("enter yor gender ");
                        let description=readlineSync.question("enter your professtion");
                        let hobbies=readlineSync.question("enter your hobbies ");
                        console.log("you have login sucessfully");
                        let user_detail={"username":username,"password":password,"profile":{"dateOfBirth":dateOfBirth,"gender":gender,"description":description,"hobbies":hobbies}}
                        // console.log(user_detail)
                        let file=JSON.stringify(user_detail,null,4);
                        fs.writeFileSync(username+".json",file);
                    }
                    else{ 
                        console.log("password doesn't match")
                    }
                }
                else{
                    console.log("not a storong pasword")
                }
            }
            else{                                       
                console.log("error1")                                                               
            }
        }
        else{
            console.log("error2")
        }
    }
    else{
        console.log("error3")
    }
}
else if (user=="login"){
    let username=readlineSync.question("enter the username ");
    var read=fs.readFileSync(username+".json");

    var data=JSON.parse(read)
    if (username==data["username"]){
        var password= readlineSync.question("enter the password ");
        if (password==data["password"]){
            console.log("you have login succesfully")
            console.log(data);      
        }
    }
   
}