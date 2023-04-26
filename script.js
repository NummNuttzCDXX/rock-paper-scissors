var compScore = 0,
    userScore = 0;

function getComputerChoice() {
    // Math.random chooses random number from 0 to 1
    // * 3 to get it to max 3 and add 1 so it doesnt choose 0
    // floor will round to nearest whole
    let compChoice = Math.floor(Math.random() * 3 + 1)
    if (compChoice === 1) {
        return 'rock'
    } else if (compChoice === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function play(playerChoice, computerChoice) {
    if ((playerChoice === 'rock') && (computerChoice === 'rock')) {
        return `This round is a tie! \n User: ${userScore} \n Computer: ${compScore}`;
    } else if ((playerChoice === 'rock') && (computerChoice === 'paper')) {
        compScore += 1
        return `Paper covers rock! Computer wins! \n User: ${userScore} \n Computer: ${compScore}`;
    } else if ((playerChoice === 'rock') && (computerChoice === 'scissors')) {
        userScore += 1
        return `Rock smashes scissors! You win!! \n User: ${userScore} \n Computer: ${compScore}`;
    } else if ((playerChoice === 'paper') && (computerChoice === 'rock')) {
        userScore += 1
        return `Paper covers rock! You Win!! \n User: ${userScore} \n Computer: ${compScore}`
    } else if ((playerChoice === 'paper') && (computerChoice === 'paper')) {
        return `This round is tie! \n User: ${userScore} \n Computer: ${compScore}`
    } else if ((playerChoice === 'paper') && (computerChoice === 'scissors')) {
        compScore += 1
        return `Scissors cuts paper! Computer wins!! \n User: ${userScore} \n Computer: ${compScore}`
    } else if ((playerChoice === 'scissors') && (computerChoice === 'rock')) {
        compScore += 1
        return `Rock smashes scissors! Computer wins!! \n User: ${userScore} \n Computer: ${compScore}`
    } else if ((playerChoice === 'scissors') && (computerChoice === 'paper')) {
        userScore += 1
        return `Scissors cuts paper! You win!! \n User: ${userScore} \n Computer: ${compScore}`
    } else if ((playerChoice === 'scissors') && (computerChoice === 'scissors')) {
        return `This round is a tie!! \n User: ${userScore} \n Computer: ${compScore}`
    }
}

// New Game: Reset scoreboard and text content
function reset() {
    compScore = 0;
    userScore = 0;
    
    results.textContent = '';
    score.textContent = '';
    results.removeAttribute('id', 'game-win');
    results.style.color = 'black'

    body.removeChild(newGameBut)
}

const body = document.querySelector('body');
const results = document.querySelector('.results');
const h2 = document.createElement('h2');
const score = document.querySelector('.score');
const addBut = document.createElement('button');
const btns = document.querySelectorAll('#buttons button'); // Returns a node list of all buttons
let newGameBut = addBut;
// .forEach iterates through list of buttons and for every button, listens for clicks, then runs play() and logs it
btns.forEach((btn) => {
    btn.addEventListener('click', function game() {
        results.textContent = play(btn.className, getComputerChoice())
        let gameWin = h2;
        
        newGameBut.textContent = 'Play Again?';
        newGameBut.setAttribute('id', 'new-game');
        if (userScore === 5) {
            results.setAttribute('id', 'game-win')
            results.style.color = 'green'
            results.textContent = "You Won the game!!";
            score.textContent = `Score: \nYou: ${userScore} \nComputer: ${compScore}`;

            body.appendChild(newGameBut);
        } else if (compScore === 5) {
            results.setAttribute('id', 'game-win')
            results.style.color = 'red'
            results.textContent = 'HA HA \n You lost to a computer!! :P';
            score.textContent = `Score: \nYou: ${userScore} \nComputer: ${compScore}`;

            body.appendChild(newGameBut);
        };
    });
});

// Butten resets game
newGameBut.addEventListener('click', reset);