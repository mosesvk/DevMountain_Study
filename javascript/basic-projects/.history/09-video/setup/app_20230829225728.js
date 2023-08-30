// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const preloader = document.querySelector('.preloader')
const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', () => {
    console.log(video.paused)
})


// show the video by taking away the 'preloader' div
    // this is done after the document loads
window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader')
})