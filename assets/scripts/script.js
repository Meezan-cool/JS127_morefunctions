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
        return;
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

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
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
    let winner;
    if(playerChoice){
         winner = getWinner(computerChoice,playerChoice);
    }
    else{
         winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, you `
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

// Rest Parameters
const combine = (resultAlert,operation,...numbers) => {
    // Function inside a function
    const validateNumber = (num) => {
        return isNaN(num)? 0 : num
    }
    let sum = 0 
    for(let num of numbers){
        if(operation === 'ADD'){
            sum += validateNumber(num)
        }else{
            sum -= validateNumber(num)
        }
    }
    resultAlert(sum,`addition`)
    return sum
}

const showResult=(message, result)=>{
    alert(`${message} ${result}`)
}

console.log(combine(showResult.bind(this,`the addition of argument is`),'ADD','hii',2,3,4,5))
console.log(combine(showResult.bind(this,`the substraction of argument is`),'SUBTRACT',1,2,3,4,5))


// 
// const subtractUp = function(resultAlert,...numbers){
//     let sub = 0 
//     // Arguments can be used in function keywords it's used before es6
//     // for(let num of arguments){}
//     for(let num of numbers){
//         sub -= num
//     }
//     resultAlert(sub,'subtraction') 
//     return sub
// } 

// const checkInput=(...strings)=>{
//     let checker = false;
//     for(let str of strings){
//       if(str === ""){
//          checker = true;
//          break
//       }
//     }
//     return checker ? false : true
//   } 
  
// Call Back Functions -> Function passed as arguments
//   const sayHello1= (checkInput, ...strings) => {
//       let emptyString = checkInput(...strings);
//       if(!emptyString){
//           return `There is Empty String`
//       } else{
//         for(let str of strings){
//             console.log(`Hi ${str}`)
//         }
//       }
//     }
    
// let greetPerson = sayHello1(checkInput ,'Meezan','Dummy');
// console.log(greetPerson)

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName());