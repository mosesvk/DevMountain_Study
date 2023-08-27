const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.add('show-sidebar')
})