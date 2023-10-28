// classList - shows/gets all classes
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

// console.log(navToggle.style)
// console.log(links.classList)

// contains - checks classList for specific class

navToggle.addEventListener('click', (e) => {
    let classes = e.target.classList

    console.log(classes)
    console.log(links.classList)

    if (!classes.contains('show-links')) {
        // classes.add('show-links')
    } else {
        // classes.delete('show-links')
    }
})

// add - add class

// remove - remove class

// toggle - toggles class
// navToggle.addEventListener('click', (e) => {
//     links.classList.toggle('show-links')
// })