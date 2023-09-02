// ****** SELECT ITEMS **********
const submitBtn = document.querySelector('.submit-btn')
const groceryList = document.querySelector('.grocery-list')
const groceryInput = document.querySelector('#grocery')
const alert = document.querySelector('.alert')
const groceryContainer = document.querySelector('.grocery-container')
const clearBtn = document.querySelector('.clear-Btn')


submitBtn.addEventListener('click', addItem)

function addItem(e) {
    e.preventDefault()
    const value = groceryInput.value
    const id = new Date().getTime().toString()

    if (value !== '') {

        addToLocalStorage(id, value)
    } else {
        console.log(localStorage)
    }

}

function addToLocalStorage (id, val) {
    const grocery = {id, val}
    let items = getLocalStorage()
    console.log('items', items)
    console.log('grocery', grocery)
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items))
    console.log('items', items)

}


function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }


// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
