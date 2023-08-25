const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "blue"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // get random number between for the length of the colors array
    const randNum = Math.floor(Math.random() * colors.length)
    const bgColor = colors[randNum]

    document.body.style.backgroundColor = bgColor

    // document.querySelector('#colorName').innerHTML = bgColor
    color.textContent = bgColor
})