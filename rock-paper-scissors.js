const prompt = require(`prompt-sync`)({sigint: true});

let p1 = String(prompt("Player 1; Pick rock, paper, or scissors: "));

let p2 = String(prompt("Player 2; Pick rock, paper, or scissors: "));

if(p1 === "rock" && p2 === "scissors"){
    console.log("Player 1 Wins");

} else if (p1 === "scissors" && p2 === "rock"){
    console.log("Player 2 Wins");

} else if (p1 === "scissors" && p2 === "paper"){
    console.log("Player 1 Wins");

} else if (p1 === "paper" && p2 === "scissors"){
    console.log("Player 2 Wins");

} else if (p1 === "paper" && p2 === "rock"){
    console.log("Player 1 Wins");

} else if (p1 === "rock" && p2 === "paper"){
    console.log("Player 2 Wins");

} else if(p1 === "rock" && p2 === "rock"){
    console.log("Draw");

} else if(p1 === "paper" && p2 === "paper"){
    console.log("Draw");

} else if(p1 === "scissors" && p2 === "scissors"){
    console.log("Draw");
} else {
    console.log("ERROR! TRY AGAIN!");
}