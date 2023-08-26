let playGame = confirm('Shall we play rock, paper, or scissors?');

if (playGame) {
  // play
  let playerChoice = prompt('Please enter rock, paper, or scissors.');
  if (playerChoice || playerChoice === '') {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === 'rock' ||
      playerOne === 'paper' ||
      playerOne === 'scissors'
    ) {
      let computerChoice = Math.floor(Math.floor(Math.random() * 3 + 1));
      let computer =
        computerChoice === 1
          ? 'rock'
          : computerChoice === 2
          ? 'paper'
          : 'scissors';

      let result =
        playerOne === computer
          ? 'Tie game!'
          : playerOne === 'rock' && computer === 'paper'
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === 'paper' && computer === 'scissors'
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === 'scissors' && computer === 'rock'
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins`;

    alert(result)
    let playAgain = confirm('play again?')
    playAgain ? location.reload() : alert('ok, thanks for playing.')
    } else {
        alert("You didn't enter rock, paper, or scissors")
    }
  } else {
    alert('I guess you changed your mind. Maybe next time')
  }
} else {
    alert('Ok, maybe next time.')
}
