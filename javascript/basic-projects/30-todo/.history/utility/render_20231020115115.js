function render() {
  const listsContainer = document.getElementById('listsContainer');

  listsContainer.innerHTML = '';

  for (const listKey in lists) {
    const list = lists[listKey];

    const listLink = document.createElement('a');
    listLink.href = '#';
    listLink.classList.add('block', 'bg-gray-100', 'p-2', 'rounded-lg', 'my-1');
    listLink.textContent = list.name;

    listLink.addEventListener('click', function () {
      loadList(listKey);
    });

    listsContainer.appendChild(listLink);
  }
}

function loadList(listKey) {
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
