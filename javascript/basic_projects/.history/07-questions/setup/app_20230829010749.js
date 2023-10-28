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
        const questionTarget = e.target
        const questionDiv = e.currentTarget
        console.log(questionTarget)
        console.log(questionDiv)
        d
        // questionDiv.classList.toggle('show-text')
    })
})