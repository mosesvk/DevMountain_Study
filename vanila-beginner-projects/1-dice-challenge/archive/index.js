let randNum1 = Math.floor(Math.random() * 6) + 1
let randNum2 = Math.floor(Math.random() * 6) + 1

let imgSrc1 = `images/dice${randNum1}.png`
let imgSrc2 = `images/dice${randNum2}.png`

const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", imgSrc1);
image2.setAttribute("src", imgSrc2);


if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randNum2 > randNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}



