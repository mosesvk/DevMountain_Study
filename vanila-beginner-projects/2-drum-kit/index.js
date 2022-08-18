const buttons = document.querySelectorAll(".drum")

let w_audio = new Audio('/sounds/tom-1.mp3')
let a_audio = new Audio('/sounds/tom-2.mp3')
let s_audio = new Audio('/sounds/tom-3.mp3')
let d_audio = new Audio('/sounds/tom-4.mp3')
let j_audio = new Audio('/sounds/snare.mp3')
let k_audio = new Audio('/sounds/crash.mp3')
let l_audio = new Audio('/sounds/kick-bass.mp3')

buttons.forEach(item => item.addEventListener('click', () => {
  let letterClick = item.innerHTML

  makeSound(letterClick)
}))

document.addEventListener('keydown', (e) => {
  let letterPress = e.key
  
  makeSound(letterPress)
})

const makeSound = (key) => {

  switch(key) {
    case 'w':
      w_audio.play()
      break;
    case 'a':
      a_audio.play()
      break;
    case 's':
      s_audio.play()
      break;
    case 'd':
      d_audio.play()
      break;
    case 'j':
      j_audio.play()
      break;
    case 'k':
      k_audio.play()
      break;
    case 'l':
      l_audio.play()
      break;
    default:
      console.log(key)
  }
}


