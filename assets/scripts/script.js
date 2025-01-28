// 127 - 
// const startGameBtn = document.getElementById('start-game-btn');

// function startGame(){
//     console.log('Game is Starting');
// }

// const person={
//     name:"Max",
//     greet: function greet(){
//         console.log('Hello There')
//     }
// }

// // person.greet() // method
// // startGame() // functions

// console.dir(startGame);

// startGameBtn.addEventListener('click', startGame);

// 130 - 
// const startGameBtn = document.getElementById('start-game-btn');

// start(); // Reference Error because initialization

// Function Expression
// const start = function(){
//     console.log('Game is Starting');
// }

// Function Declaration
// function startGame(){
//     console.log('Game is Starting');
// }

// const person={
//     name:"Max",
//     greet: function greet(){
//         console.log('Hello There')
//     }
// }

// // person.greet() // method
// // startGame() // functions

// console.dir(startGame);

// startGameBtn.addEventListener('click', startGame);

// 131
// const startGameBtn = document.getElementById('start-game-btn');

// const start = function(){
// }

// const person={
//     name:"Max",
//     greet: function greet(){
//         console.log('Hello There')
//     }
// }

// We can give name to this anonymous function to know when it gives error
// startGameBtn.addEventListener('click', function startGame(){
//     console.log('Game is Starting');
// });
// If We don't give name to this anonymous function then it will show anonymous
// startGameBtn.addEventListener('click', function(){
//     console.log('Game is Starting');
// });


// 132 -
const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const startGameBtn = document.getElementById('start-game-btn');



const getPlayerChoice= function(){
    const selection = prompt(`${ROCK}, ${PAPER} & ${SCISSORS}?`, '')?.toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid Choice! We Chose ${DEFAULT_USER_CHOICE} For you!`);
        return DEFAULT_USER_CHOICE
    }
    return selection
}

function getComputerChoice(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    } else if(randomValue < 0.67){
        return SCISSORS
    } else{
        return PAPER
    }
}

const getWinner = (cChoice, pChoice) => 
      cChoice === pChoice ? RESULT_DRAW : 
    (
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) ? RESULT_PLAYER_WINS: RESULT_COMPUTER_WINS

    // if(cChoice === pChoice){
    //     return RESULT_DRAW
    // }else if(
    //     cChoice === ROCK && pChoice === PAPER || 
    //     cChoice === PAPER && pChoice === SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK
    // ){
    //     return RESULT_PLAYER_WINS;
    // }else{
    //     return RESULT_COMPUTER_WINS
    // }


startGameBtn.addEventListener('click', () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true
    console.log('Game is Starting');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice,playerChoice);
    let message = `You picked ${playerChoice}, computer picked ${computerChoice}, you `
    console.log(winner)
    if(winner === RESULT_DRAW){
        message = message + 'had a draw'
    } else if(winner === RESULT_COMPUTER_WINS){
        message = message + 'lost'
    } else{
        message = message + 'win'
    }
    alert(message);
    gameIsRunning = false;
});


// 134 -  Arrow Function

// General Syntax (args1, args2) =>{ ... }

// No Arguments / Parameters 
// () => { ... }
// Empty pair of parentheses

// Exactly one (1) Argument / Parameter
// args => { ... }
// Parenthese can be omitted

// Exactly one expression in function body
// (a, b) => a + b
// Curly braces can be omitted, result is returned

// More than one expression in function body
// (a, b) => { 
//   a *= 2; return a + b;
// }
// Curly braces and return statement required

// const loadPerson = pName => ({name: pName });
// console.log(loadPerson("Meezan"))