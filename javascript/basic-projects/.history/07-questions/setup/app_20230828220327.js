//using selectors inside the element

// const articles = document.querySelectorAll('.question')

// articles.forEach(question => {

//     const button = question.children[0].children[1]

//     button.addEventListener('click', () => {
//         question.classList.toggle('show-text')
//     })

// })



// traversing the dom
const buttons = document.querySelectorAll('.question-btn')

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const questionDiv = e.target.parentNode.parentNode.parentNode

        console.log(questionDiv)
    })
})