// ****** SELECT ITEMS **********
const submitBtn = document.querySelector('.submit-btn');
const groceryList = document.querySelector('.grocery-list');
const groceryInput = document.querySelector('#grocery');
const alert = document.querySelector('.alert');
const groceryContainer = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-Btn');

submitBtn.addEventListener('click', addItem);

document.addEventListener('DOMContentLoaded', setUpItems)

function addItem(e) {
  e.preventDefault();
  const value = groceryInput.value;
  const id = new Date().getTime().toString();

  // create an article that will hold each of the todo list items

  if (value !== '') {

    // create list item helper function. passing two args
    createListItem(id, value)

    // when finished creating, show the grocery list container
    groceryContainer.classList.add('show-container');

    // add to local storage helper func. pass 2 args
    addToLocalStorage(id, value);

    // set back to default func. 
    setBackToDefault();
  } else {
    console.log(localStorage);
  }
}

function setBackToDefault() {
    // set the value input and editId to an empty string
    // editFlag needs to be false and the submit button text to be 'submit'
  groceryInput.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}


function addToLocalStorage(id, value) {
    // passing down two args - id, and text of grocery item
        // they will be put into the "list" local storage
        // but we will first need to extract the local storage and push the new items into local storage

}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function setUpItems() {
    let items = getLocalStorage()

    if (items.length > 0) {
        items.forEach((item, id) => createListItem(id, item.value))
        groceryContainer.classList.add('show-container')
    }
}

function createListItem(id, value) {
  const element = document.createElement('article');
  let attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add('grocery-item');
  element.innerHTML = `
    <p class='title'>${value}</p>
    <div>
        <button type='button' class='edit-btn'>
            <i class='fas fa-edit'></i>
        </button>
        <button type='button' class='delete-btn'>
            <i class='fas fa-trash'></i>
        </button>
    </div>
    `;

    const deleteBtn = element.querySelector(".delete-btn");
    // deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    // editBtn.addEventListener("click", editItem);
  
    // append child
    groceryList.appendChild(element);
}

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
