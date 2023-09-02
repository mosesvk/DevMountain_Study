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
        const element = `
            <article data-id=${id} class='grocery-item'>
                <p class='title'>${value}</p>
                <div>
                    <button type='button' class='edit-btn'>
                        <i class='fas fa-edit'></i>
                    </button>
                    <button type='button' class='delete-btn'>
                        <i class='fas fa-trash'></i>
                    </button>
                </div>
            </article>
        `


        addToLocalStorage(id, value)
    } else {
        console.log(localStorage)
    }

}

function addToLocalStorage (id, val) {
    const grocery = {id, val}
    let items = getLocalStorage()
    // console.log('grocery', grocery)
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items))
    // console.log('items', items)

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
