const buttons = document.querySelectorAll(".drum")

let w_audio = new Audio('/sounds/tom-1.mp3')


buttons.forEach(item => item.addEventListener('click', () => {
  console.log(`${item.innerHTML} button got clicked`);
  w_audio.play();
}))


