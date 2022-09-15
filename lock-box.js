const prompt = require(`prompt-sync`)({sigint: true});

let pinCode = Number(prompt("Enter your pin: "));


if (pinCode === 1371){
    console.log("Success, Access Granted.");
} else{
    console.log("Failure, Access Denied.");
}