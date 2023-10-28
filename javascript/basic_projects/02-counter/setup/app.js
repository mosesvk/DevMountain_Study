let count = 0

const value = document.querySelector('#value')
const buttons = document.querySelectorAll('.btn')
let color;

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('decrease')) {
            count -= 1
        } else if (styles.contains('increase')) {
            count += 1
        } else {
            count = 0 
        }

        if (count > 0) {
            color = 'green'
        } else if (count < 0) {
            color = 'red'
        } else {
            color = 'black'
        }

        value.style.color = color
        value.textContent = count
    })
})