function render() {
  console.log(lists);
  // Get the HTML elements you want to update
  const todoListContainer = document.getElementById('currentTodoList');
  const listNameContainer = document.getElementById('currentListName');

  // Clear the existing content in the containers
  todoListContainer.innerHTML = '';
  listNameContainer.textContent = '';

  // Access the current list (for example, currentList is a global variable)
  const currentList = lists[1]; // Assuming you want to render list with key 1

  if (currentList) {
    // Set the list name
    listNameContainer.textContent = currentList.name;

    // Render the to-dos
    currentList.todos.forEach((todo) => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;

      if (todo.completed) {
        listItem.classList.add('completed'); // Apply a CSS class for completed to-dos
      }

      todoListContainer.appendChild(listItem);
    });
  }
}
