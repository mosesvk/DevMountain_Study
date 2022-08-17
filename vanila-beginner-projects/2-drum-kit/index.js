const buttons = document.querySelectorAll(".drum")

let w_audio = new Audio('/sounds/tom-1.mp3')
let a_audio = new Audio('/sounds/tom-2.mp3')
let s_audio = new Audio('/sounds/tom-3.mp3')
let d_audio = new Audio('/sounds/tom-4.mp3')
let j_audio = new Audio('/sounds/snare.mp3')
let k_audio = new Audio('/sounds/crash.mp3')
let l_audio = new Audio('/sounds/kick-bass.mp3')

buttons.forEach(item => item.addEventListener('click', () => {
  let letter = item.innerHTML
  if (letter == 'w') w_audio.play();
  if (letter == 'a') a_audio.play();
  if (letter == 's') s_audio.play();
  if (letter == 'd') d_audio.play();
  if (letter == 'j') j_audio.play();
  if (letter == 'k') k_audio.play();
  if (letter == 'l') l_audio.play();
}))


