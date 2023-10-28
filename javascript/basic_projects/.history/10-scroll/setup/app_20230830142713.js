// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

// show/toggle links
const navToggle = document.querySelector('.nav-toggle');
const linksDiv = document.querySelector('.links-container');
const links = document.querySelector('.links');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', () => {
  linksDiv.classList.toggle('show-links');
  // this will only work with a certain amount of links
  // because "show-links" is a SET amount of height
  // if you have more links, it wont show
  // that's why we are doing this below.
  // if you try 'fit-content' we will lose the transition because it is a function

  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(linksHeight)
  // console.log(linksContainerHeight)

  if (linksContainerHeight === 0) {
    linksDiv.style.height = `${linksHeight}px`;
  } else {
    linksDiv.style.height = 0;
  }
});

// Fixed Navbar
const navbar = document.querySelector('#nav')
const home = document.querySelector('#home')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', () => {

    const scrollHeight = window.scrollY
    const navHeight = navbar.getBoundingClientRect().height
    const homeHeight = home.getBoundingClientRect().height

    if (scrollHeight >= navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight >= homeHeight) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }


})