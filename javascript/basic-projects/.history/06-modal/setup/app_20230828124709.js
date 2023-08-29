// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const openBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')
const modalBackground = document.querySelector('.modal-background')


openBtn.addEventListener('click', () => {
    console.log(modalOverlay.classList)

    modalOverlay.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {

    modalOverlay.classList.remove('open-modal')
})

modalBackground.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')

})