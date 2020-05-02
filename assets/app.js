const playerScore_span = document.getElementById('playerscore');
const computerScore_span = document.getElementById('computerscore');

const  playerScore = 0;
const  computerScore = 0;

const scoreBoard_div = document.querySelector('.scoreboard');
const win_div = document.querySelector('.win');
const lose_div = document.querySelector('.lose');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

rock_div.addEventListener('click', function() {
    console.log("You chose Rock");
})
paper_div.addEventListener('click', function() {
    console.log("You chose Paper");
})
scissors_div.addEventListener('click', function() {
    console.log("You chose Scissors");
})
