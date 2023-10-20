let currentSelectedListLink = null; // To keep track of the currently selected list link


function render() {
  const listsContainer = document.getElementById('listsContainer');

  listsContainer.innerHTML = '';

  const lists = JSON.parse(localStorage.getItem('data'))

  if (lists) {
    for (const listKey in lists) {
      const list = lists[listKey];

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
      listLink.textContent = list.name;

      listLink.addEventListener('click', function (e) {
        console.log(e.target)
        if (currentSelectedListLink) {
          // Remove the active class
          currentSelectedListLink.classList.remove('bg-blue-500');
          // Set text color to the default value using Tailwind CSS class
          currentSelectedListLink.classList.add('text-blue-600');

          // localStorage.setItem('selectedList', listLink.textContent)
        }

        loadList(lists, listKey);
        listLink.classList.add('bg-blue-500');
        listLink.classList.add('text-white');
        // Set text color to white for the selected link
        listLink.classList.remove('text-blue-600');

        // Update the currently selected list link
        currentSelectedListLink = listLink;
      });

      listsContainer.appendChild(listLink);
    }
  }
}

function loadList(lists, listKey) {
  const todoListContainer = document.getElementById('currentTodoList');
  const listNameContainer = document.getElementById('currentListName');

  todoListContainer.innerHTML = '';
  listNameContainer.textContent = '';

  const selectedList = lists[listKey];

  if (selectedList) {
    listNameContainer.textContent = selectedList.name;

    selectedList.todos.forEach((todo) => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      listItem.classList.add(todo.completed ? 'line-through' : 'text-black'); // Apply Tailwind CSS classes for completed to-dos

      todoListContainer.appendChild(listItem);
    });
  }
}
