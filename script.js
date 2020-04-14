let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
var generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

console.log(generateTarget());