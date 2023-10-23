// Helper function to create a new todo item element
function createTodoItemElement(text, completed, onCheckboxChange, onDeleteClick) {
  const todoItem = document.createElement('li');
  todoItem.classList.add(
    'flex',
    'items-center',
    'justify-between',
    'bg-gray-100',
    'p-2',
    'rounded-lg',
    'my-1',
    'hover:bg-gray-200',
    'text-gray-800',
    'hover:text-black',
    'transition-colors'
  );

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('mr-2');
  checkbox.addEventListener('click', onCheckboxChange);

  const todoTextSpan = document.createElement('span');
  todoTextSpan.textContent = text;
  todoTextSpan.classList.add('flex-1');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add(
    'bg-red-500',
    'text-white',
    'p-1',
    'rounded',
    'hover:bg-red-600',
    'transition-colors'
  );
  deleteButton.addEventListener('click', onDeleteClick);

  todoItem.appendChild(checkbox);
  todoItem.appendChild(todoTextSpan);
  todoItem.appendChild(deleteButton);

  if (completed) {
    todoTextSpan.classList.add('line-through', 'text-gray-500');
    checkbox.checked = true;
  }

  return todoItem;
}

// Helper function to add a new todo to the current list
function addTodoToCurrentList(lists, selectedListKey, todoText) {
  if (!lists[selectedListKey]) {
    lists[selectedListKey] = { name: selectedListKey, todos: [] };
  }

  const currentList = lists[selectedListKey];
  currentList.todos.push({ text: todoText, completed: false });
}

// Helper function to update local storage with the lists
function updateLocalStorage(lists) {
  localStorage.setItem('data', JSON.stringify(lists));
}

// Helper function to clear the input field
function clearInputField(inputField) {
  inputField.value = '';
}



// Original addTodo function
function addTodo() {
  const todoInput = document.getElementById('todoInput');
  let selectedListKey = localStorage.getItem('selectedList');
  // ...

  const todoText = todoInput.value;

  if (todoText.trim() !== '') {
    const lists = JSON.parse(localStorage.getItem('data')) || {};
    addTodoToCurrentList(lists, selectedListKey, todoText);
    updateLocalStorage(lists);

    const todoItem = createTodoItemElement(
      todoText,
      false,
      onCheckboxChange,
      onDeleteClick
    );

    clearInputField(todoInput);

    const currentTodoList = document.getElementById('currentTodoList');
    currentTodoList.appendChild(todoItem);

    render();
  }
}

// Event handler for checkbox change
function onCheckboxChange() {
  // Define your checkbox change logic here
}

// Event handler for delete button click
function onDeleteClick() {
  // Define your delete button click logic here
}

const addTodoBtn = document.querySelector('#addTodoButton');
addTodoBtn.addEventListener('click', addTodo);
