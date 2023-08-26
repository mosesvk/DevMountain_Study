const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')

 btn.addEventListener('click', () => {
    let hexColor = '#'
    let i = 0
    while (i < 6) {
        let randIdx = Math.floor(Math.random() * hex.length)
        hexColor += String(hex[randIdx])
        i++
    }

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
    
 })