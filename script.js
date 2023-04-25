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

let user
function game() {
    for (i = 1; i <= 5; i++) {
        user = prompt('Choose: ')
        user = user.toLowerCase()
        let compChoice = getComputerChoice()

        console.log(play(user, compChoice))
    }

    if (userScore > compScore) {
        console.log(`You got best of 5 with a score of ${userScore} \nYou win!`)
    } else if (compScore > userScore) {
        console.log(`Computer got best of 5 with a score of ${compScore} \nYou lose! :(`)
    } else {
        console.log(`You tied the game with a score of \nUser: ${userScore} \nComputer: ${compScore}`)
    }
}