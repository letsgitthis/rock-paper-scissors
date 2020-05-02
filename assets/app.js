let  playerScore = 0;
let  computerScore = 0;

const playerScore_span = document.getElementById('playerscore');
const computerScore_span = document.getElementById('computerscore');

const scoreBoard_div = document.querySelector('.scoreboard');
const win_div = document.querySelector('.win');
const lose_div = document.querySelector('.lose');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function computer() {
    const options = ['r', 'p', 's'];
    const randomOption = Math.floor(Math.random() * 3);
    return options [randomOption];
}

function win(playerButton, computerButton) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
}
function lose(playerButton, computerButton) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
}
function tie() {

}

function game(playerButton) {
    const computerButton = computer();
    console.log(computer);
    switch (playerButton + computerButton) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "pr":
        case "sp":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            tie();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        console.log('You chose Rock');
        game('r');
    })
    paper_div.addEventListener('click', function() {
        console.log('You chose Paper');
        game('p');
    })
    scissors_div.addEventListener('click', function() {
        console.log('You chose Scissors')
        game('s');
    })
}

main();
