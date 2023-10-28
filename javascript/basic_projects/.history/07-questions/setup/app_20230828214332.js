//using selectors inside the element
// traversing the dom

const articles = document.querySelectorAll('.question')

articles.forEach(question => {
    const button = document.querySelector('.question-btn')
    console.log(button)

    button.addEventListener('click', () => {
        question.classList.toggle('show-text')
    })
})