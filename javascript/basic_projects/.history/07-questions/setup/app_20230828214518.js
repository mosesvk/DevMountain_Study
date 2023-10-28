//using selectors inside the element
// traversing the dom

const articles = document.querySelectorAll('.question')

articles.forEach(question => {
    console.log(question)

    button.addEventListener('click', () => {
        question.classList.toggle('show-text')
    })
})