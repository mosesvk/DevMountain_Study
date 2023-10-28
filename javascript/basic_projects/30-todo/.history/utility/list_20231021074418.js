function addList(lists, listKey, listName) {
  const listLink = document.createElement('a');
  listLink.href = '#';
  listLink.classList.add(
    'block',
    'p-2',
    'rounded-lg',
    'my-1',
    'hover:bg-blue-200',
    'text-blue-600',
    'hover:text-blue-800',
    'transition-colors'
  );
  listLink.textContent = listName;

  listLink.addEventListener('click', function () {
    if (currentSelectedListLink) {
      currentSelectedListLink.classList.remove('bg-blue-500');
      currentSelectedListLink.classList.add('text-blue-600');
      localStorage.setItem('selectedList', listLink.textContent);
    }

    loadList(lists, listKey);
    listLink.classList.add('bg-blue-500');
    listLink.classList.add('text-white');
    listLink.classList.remove('text-blue-600');

    currentSelectedListLink = listLink;
  });

  listsContainer.appendChild(listLink);
}

function loadList(lists, listKey) {
  const todoListContainer = document.getElementById('currentTodoList');
  const listNameContainer = document.getElementById('currentListName');

  todoListContainer.innerHTML = '';
  listNameContainer.textContent = '';

  const selectedList = lists[listKey];
  console.log(selectedList);

  if (selectedList) {
    listNameContainer.textContent = selectedList.name;

    // If there is a selected list, remove the 'hidden' class to display the container
    currentTodoContainer.classList.remove('hidden');

    selectedList.todos.forEach((todo) => {
      // Create a list item similar to a todo item
      const listItem = document.createElement('li');
      listItem.classList.add(
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

      // Create a span for the list item text
      const listItemText = document.createElement('span');
      listItemText.textContent = todo.text;
      listItemText.classList.add('flex-1'); // Ensure the text takes up the remaining space

      // Create a delete button for the list item
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


// Add an event listener for the "Add List" button
const addListBtn = document.getElementById('addListButton');
addListBtn.addEventListener('click', function () {
  // Get the list name from the input field (you should have an input field for the list name)
  const listNameInput = document.getElementById('listInput');
  const listName = listNameInput.value;

  if (listName.trim() !== '') {
    // Add your new list to the data and update it in local storage
    const lists = JSON.parse(localStorage.getItem('data')) || {};
    const listKey = generateUniqueListKey(); // Implement a function to generate a unique key
    lists[listKey] = { name: listName, todos: [] };
    localStorage.setItem('data', JSON.stringify(lists));

    // Clear the input field
    listNameInput.value = '';

    // Call render to update the interface
    render();
  }
});

// Call render to initially render the interface
render();