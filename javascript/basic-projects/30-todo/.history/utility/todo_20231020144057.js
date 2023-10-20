let addTodoBtn = document.querySelector('#addTodoButton');
addTodoBtn.addEventListener('click', addTodo);

function addTodo() {
  // Get the input element where the user types the new to-do
  const todoInput = document.getElementById('todoInput');

  // Get the current list key from local storage
  const selectedListKey = localStorage.getItem('selectedList');

  // Get the text from the input field
  const todoText = todoInput.value;

  // Check if the text is not empty
  if (todoText.trim() !== '') {
    // Retrieve the lists from local storage
    const lists = JSON.parse(localStorage.getItem('data'));

    // Find the current list by its key
    const currentList = lists.find(list => list.name === selectedListKey);

    if (currentList) {
      // Create a new to-do element (todoItem)
      const todoItem = document.createElement('li');
      todoItem.classList.add(
        'flex', 'items-center', 'justify-between',
        'bg-gray-100', 'p-2', 'rounded-lg', 'my-1',
        'hover:bg-gray-200', 'text-gray-800', 'hover:text-black', 'transition-colors'
      );

      // Create a checkbox input for marking as completed
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('mr-2');
      checkbox.addEventListener('change', function () {
        // Update the completed status in the current list's todos
        const index = currentList.todos.findIndex(todo => todo.text === todoText);
        if (index !== -1) {
          currentList.todos[index].completed = checkbox.checked;
          // Update the lists in local storage
          localStorage.setItem('data', JSON.stringify(lists));
        }
      });

      // Create a span for the todo text
      const todoTextSpan = document.createElement('span');
      todoTextSpan.textContent = todoText;
      todoTextSpan.classList.add('flex-1'); // Ensure the text takes up the remaining space

      // Create a delete button for the to-do
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('bg-red-500', 'text-white', 'p-1', 'rounded', 'hover:bg-red-600', 'transition-colors');
      deleteButton.addEventListener('click', function () {
        // Remove the to-do from the current list
        const index = currentList.todos.findIndex(todo => todo.text === todoText);
        if (index !== -1) {
          currentList.todos.splice(index, 1);
          // Update the lists in local storage
          localStorage.setItem('data', JSON.stringify(lists));
          // Call the render function to update the interface
          render();
        }
      });

      // Append the checkbox, todo text, and delete button to the todoItem
      todoItem.appendChild(checkbox);
      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(deleteButton);

      // Append the new to-do to the current list
      currentList.todos.push({ text: todoText, completed: false });

      // Update the lists in local storage
      localStorage.setItem('data', JSON.stringify(lists));

      // Clear the input field
      todoInput.value = '';

      // Add the new to-do item to the currentTodoList
      const currentTodoList = document.getElementById('currentTodoList');
      currentTodoList.appendChild(todoItem);

      // Call the render function to update the interface
      render();
    }
  }
}

