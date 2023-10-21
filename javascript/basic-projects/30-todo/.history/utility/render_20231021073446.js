let currentSelectedListLink = null; // To keep track of the currently selected list link


function render() {
  const listsContainer = document.getElementById('listsContainer');
  const currentTodoContainer = document.getElementById('currentTodoContainer'); // Get the currentTodoContainer element

  listsContainer.innerHTML = '';

  const lists = JSON.parse(localStorage.getItem('data'));

  if (lists) {
    for (const listKey in lists) {
      const list = lists[listKey];
      addList(lists, listKey, list.name);
    }
  }

}


function loadList(lists, listKey) {
  const todoListContainer = document.getElementById('currentTodoList');
  const listNameContainer = document.getElementById('currentListName');
  
  todoListContainer.innerHTML = '';
  listNameContainer.textContent = '';
  
  const selectedList = lists[listKey];
  console.log(selectedList)

  if (selectedList) {
    listNameContainer.textContent = selectedList.name;

    // If there is a selected list, remove the 'hidden' class to display the container
    currentTodoContainer.classList.remove('hidden');

    selectedList.todos.forEach((todo) => {
      // Create a list item similar to a todo item
      const listItem = document.createElement('li');
      listItem.classList.add(
        'flex', 'items-center', 'justify-between',
        'bg-gray-100', 'p-2', 'rounded-lg', 'my-1',
        'hover:bg-gray-200', 'text-gray-800', 'hover:text-black', 'transition-colors'
      );

      // Create a span for the list item text
      const listItemText = document.createElement('span');
      listItemText.textContent = todo.text;
      listItemText.classList.add('flex-1'); // Ensure the text takes up the remaining space

      // Create a delete button for the list item
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('bg-red-500', 'text-white', 'p-1', 'rounded', 'hover:bg-red-600', 'transition-colors');
      deleteButton.addEventListener('click', function () {
        // Remove the list item from the current list
        const index = selectedList.todos.indexOf(todo);
        if (index !== -1) {
          selectedList.todos.splice(index, 1);
          // Update the lists in local storage
          localStorage.setItem('data', JSON.stringify(lists));
          // Call the render function to update the interface
          render();
        }
      });

      // Append the list item text and delete button to the list item
      listItem.appendChild(listItemText);
      listItem.appendChild(deleteButton);

      todoListContainer.appendChild(listItem);
    });
  } else {
    // If there is no selected list, add the 'hidden' class to hide the container
    currentTodoContainer.classList.add('hidden');
  }
}

