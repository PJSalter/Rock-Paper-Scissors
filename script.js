// Grab the buttons from the page

const userButtons = document.querySelectorAll(".move-button")
console.log(userButtons)


//picking out all the elements from the id and classes from the HTML.
//picking from the span.

const robotChoice = document.getElementById("computer-choice")
console.log(robotChoice);
const personChoice = document.getElementById("user-choice")
console.log(personChoice)
const outcomeText = document.getElementById("outcome-text")
console.log(outcomeText)
let userChoice;
let computerChoice;
let result;
//then grab all the buttons of choice with an add event listener to essentially listen out for a click.
//pass through the event.
userButtons.forEach(element => 
  element.addEventListener("click", (event) => {
    //image was the target for the click
     userChoice = element.id
     personChoice.innerHTML = userChoice
     getCompChoice();
     console.log(element.id);
     calculateWinner();
  })
  )

function getCompChoice() {
  const indexedNumber = Math.floor(Math.random() * 3) + 1; //or the userButtons.length instead of the 3.

if (indexedNumber === 1) {
  computerChoice = 'rock';
}
if (indexedNumber === 2) {
  computerChoice = 'paper';
}
if (indexedNumber === 3) {
  computerChoice = 'scissors';
}
robotChoice.innerHTML = computerChoice
}

// Work out the winners
//console.log(result);
function calculateWinner() {
// Check if there is a tie
console.log(userChoice)
console.log(computerChoice)
if (computerChoice === userChoice) {
  result = 'Its a tie!';
}
if(computerChoice === 'rock' && userChoice === 'paper') {
  result = 'you win!';
}
if(computerChoice === 'rock' && userChoice === 'scissors') {
  result = 'you lose!';
}
if(computerChoice === 'paper' && userChoice === 'scissors') {
  result = 'you win!';
}
if(computerChoice === 'paper' && userChoice === 'rock') {
  result = 'you lose!';
}
if(computerChoice === 'scissors' && userChoice === 'rock') {
  result = 'you win!';
}
if(computerChoice === 'scissors' && userChoice === 'paper') {
   result = 'you lose!';
}
console.log(result);
console.log(outcomeText)
 outcomeText.innerHTML = result;
//console.log(personChoice)
 //personChoice.innerHTML = result;
}
