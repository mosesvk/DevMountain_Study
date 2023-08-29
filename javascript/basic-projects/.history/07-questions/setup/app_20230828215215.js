//using selectors inside the element
// traversing the dom

const articles = document.querySelectorAll('.question')

articles.forEach(question => {

    const button = question.children[0].children[1]

    button.addEventListener('click', () => {
        console.log(question)
    })

})