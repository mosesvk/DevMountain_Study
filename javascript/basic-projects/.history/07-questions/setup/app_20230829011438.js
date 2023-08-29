//using selectors inside the element

const articles = document.querySelectorAll('.question')

articles.forEach(question => {

    const button = question.children[0].children[1]

    button.addEventListener('click', () => {
        articles.forEach(item => item.classList.remove("show-text") ? item !== question : '')
        question.classList.toggle('show-text')
    })

})



// traversing the dom
// const buttons = document.querySelectorAll('.question-btn')

// buttons.forEach(function(btn){

//     btn.addEventListener('click', function(e){
//         // const questionTarget = e.target
//         // console.log(questionTarget)
//         const questionDiv = e.currentTarget.parentNode.parentNode
//         console.log(questionDiv)

//         questionDiv.classList.toggle('show-text')
//     })
// })