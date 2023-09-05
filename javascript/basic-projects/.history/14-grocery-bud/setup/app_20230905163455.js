// ****** SELECT ITEMS **********
const submitBtn = document.querySelector('.submit-btn');
const groceryList = document.querySelector('.grocery-list');
const groceryInput = document.querySelector('#grocery');
const alert = document.querySelector('.alert');
const groceryContainer = document.querySelector('.grocery-container');
const clearBtn = document.querySelector('.clear-Btn');

submitBtn.addEventListener('click', addItem);

document.addEventListener('DOMContentLoaded', setUpItems);

function addItem(e) {
  // remember the default action of a submit will cause will cause the application to re-render
  // create selectors for the text value and id
  // use the date and time to create an id string
  // create an article that will hold each of the todo list items
  // create list item helper function. passing two args
  // when finished creating, show the grocery list container
  // this is specifically for the first item
  // because there will be no container shown if there are no items but once we add the first item, we always want to show the container
  // add to local storage helper func. pass 2 args
  // set back to default func.

  e.preventDefault();

  const value = groceryInput.value;
  const id = new Date().getTime().toString();

  createListItem(id, value);

  addToLocalStorage(id, value);
}

function deleteItem(e) {
    e.preventDefault()

    console.log(e.target)
}

function setBackToDefault() {
  // set the value input and editId to an empty string
  // editFlag needs to be false and the submit button text to be 'submit'
}

function addToLocalStorage(id, value) {
  // passing down two args - id, and text of grocery item
  // they will be put into the "list" local storage
  // but we will first need to extract the local storage and push the new items into local storage

  const items = getLocalStorage() // [...] or []
  items.push({id, value});

  localStorage.setItem('list', JSON.stringify(items));

  groceryContainer.classList.add('show-container')
}

function getLocalStorage() {
  // show local storage if there are any
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function createListItem(id, value) {
  // create an article element. add a "data-id" attribute that equals the id passed down

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

  const deleteBtn = element.querySelector('.delete-btn');
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector('.edit-btn');
  // editBtn.addEventListener("click", editItem);

  // append child
  groceryList.appendChild(element);
}

function setUpItems() {
  // grab the current local storage and loop through each of the items
  // display the items as a grocery item using the helper function
  // show the grocery container.
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item, id) => createListItem(id, item.value));
    groceryContainer.classList.add('show-container');
  }
}

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
