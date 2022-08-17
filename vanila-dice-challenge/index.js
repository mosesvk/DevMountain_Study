const results = document.querySelector('#results');
const imgPlayerOne = document.querySelector('#img1');
const imgPlayerTwo = document.querySelector('#img2');

const randNum1 = Math.round(Math.random() * 6) + 1;
const randNum2 = Math.round(Math.random() * 6) + 1;

imgPlayerOne.src = `/images/dice${randNum1}.png`
imgPlayerTwo.src = `/images/dice${randNum2}.png`

if (randNum1 > randNum2) {
  results.innerHTML = '🏆 Player 1 Wins!'
} 
if (randNum2 > randNum1) {
  results.innerHTML = 'Player 2 Wins! 🏆'
} 

