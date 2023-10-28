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

// Helper function to render the interface (you need to define this function)
function render() {
  // Define your render function here
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
      // Update the completed status in the current list's todos
      const index = currentList.todos.findIndex(
        (todo) => todo.text === todoText
      );

      if (index !== -1) {
        currentList.todos[index].completed = checkbox.checked;
        currentList.todos.sort((a, b) =>
          a.completed === b.completed ? 0 : a.completed ? 1 : -1
        );

        // Update the lists in local storage
        localStorage.setItem('data', JSON.stringify(lists));

        if (checkbox.checked) {
          todoItem.children[1].classList.add('line-through', 'text-gray-500');
        } else {
          todoItem.children[1].classList.remove(
            'line-through',
            'text-gray-500'
          );
        }
      }

      render();
}

// Event handler for delete button click
function onDeleteClick() {
      // Remove the to-do from the current list
      const index = currentList.todos.findIndex(
        (todo) => todo.text === todoText
      );
      if (index !== -1) {
        currentList.todos.splice(index, 1);
        // Update the lists in local storage
        localStorage.setItem('data', JSON.stringify(lists));
        // Call the render function to update the interface
        render();
      }
}

const addTodoBtn = document.querySelector('#addTodoButton');
addTodoBtn.addEventListener('click', addTodo);

// function addTodo() {
//   // Get the input element where the user types the new to-do
//   const todoInput = document.getElementById('todoInput');

//   // Get the current list key from local storage
//   let selectedListKey = localStorage.getItem('selectedList');

//   // Check if the selectedListKey is null or undefined
//   if (selectedListKey === null || selectedListKey === undefined) {
//     // Set a default list key or handle it as needed in your application
//     selectedListKey = 'defaultList';
//     // You can also update the 'selectedList' in local storage here if needed.
//   }

//   // Get the text from the input field
//   const todoText = todoInput.value;

//   // Check if the text is not empty
//   if (todoText.trim() !== '') {
//     // Retrieve the lists from local storage
//     const lists = JSON.parse(localStorage.getItem('data')) || {};

//     if (!lists[selectedListKey]) {
//       lists[selectedListKey] = { name: selectedListKey, todos: [] };
//     }

//     const currentList = lists[selectedListKey];

//     // Create a new to-do element (todoItem)
//     const todoItem = document.createElement('li');
//     todoItem.classList.add(
//       'flex',
//       'items-center',
//       'justify-between',
//       'bg-gray-100',
//       'p-2',
//       'rounded-lg',
//       'my-1',
//       'hover:bg-gray-200',
//       'text-gray-800',
//       'hover:text-black',
//       'transition-colors'
//     );

//     // Create a checkbox input for marking as completed
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('mr-2');
//     checkbox.addEventListener('click', function () {

//     });

//     // Create a span for the todo text
//     const todoTextSpan = document.createElement('span');
//     todoTextSpan.textContent = todoText;
//     todoTextSpan.classList.add('flex-1'); // Ensure the text takes up the remaining space

//     // Create a delete button for the to-do
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.classList.add(
//       'bg-red-500',
//       'text-white',
//       'p-1',
//       'rounded',
//       'hover:bg-red-600',
//       'transition-colors'
//     );
//     deleteButton.addEventListener('click', function () {

//     });

//     // Append the checkbox, todo text, and delete button to the todoItem
//     todoItem.appendChild(checkbox);
//     todoItem.appendChild(todoTextSpan);
//     todoItem.appendChild(deleteButton);

//     // Append the new to-do to the current list
//     currentList.todos.push({ text: todoText, completed: false });

//     // Update the lists in local storage for the specific list
//     localStorage.setItem('data', JSON.stringify(lists));

//     // Clear the input field
//     todoInput.value = '';

//     // Add the new to-do item to the currentTodoList
//     const currentTodoList = document.getElementById('currentTodoList');
//     currentTodoList.appendChild(todoItem);

//     // Call the render function to update the interface
    

//     render();
//   }

// }
