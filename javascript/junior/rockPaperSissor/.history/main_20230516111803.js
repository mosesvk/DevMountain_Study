let playGame = confirm('Shall we play rock, paper, or scissors?')

if (playGame) {
    // play
    let playerChoice = prompt('Please enter rock, paper, or scissors.')
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase()
        console.log(playerOne)
    }
}

console.log('hello')