// classList - shows/gets all classes
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

console.log(navToggle.style)
console.log(links.classList)

// contains - checks classList for specific class

navToggle.addEventListener('click', (e) => {
    console.log(links.classList.toggle('show-links'))
})

// add - add class

// remove - remove class

// toggle - toggles class
