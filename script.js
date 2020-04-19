let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
var generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

var compareGuesses = (userGuess, computerGuess, targetNum) => {

}

console.log(generateTarget());

// var mathematicalExp = (num1, num2, sign) => {
//     if (sign === 'addition') {
//         return num1 + num2;
//     } else if (sign === 'subtraction') {
//         return num1 - num2;
//     } else if (sign === 'division') {
//         return num1 / num2;
//     } else if (sign === 'multiplication') {
//         return num1 * num2;
//     } else {
//         return 'Input a valid mathematical sign.';
//     }
// }

// var mathematicalExp = (num1, num2, sign) => {
//     switch (sign) {
//         case 'addition':
//             return num1 + num2;
//             break;
//         case 'subtraction':
//             return num1 - num2;
//             break;
//         case 'division':
//             return num1 / num2;
//             break;
//         case 'multiplication':
//             return num1 * num2;
//             break;
//         default:
//             return 'Please input a valid mathematical sign';
//     }
// }