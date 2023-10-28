let currentSelectedListLink = null; // To keep track of the currently selected list link


function render() {
  const listsContainer = document.getElementById('listsContainer');
  const currentTodoContainer = document.getElementById('currentTodoContainer'); // Get the currentTodoContainer element

  listsContainer.innerHTML = '';

  const lists = JSON.parse(localStorage.getItem('data'));

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
  }

  // Check if there is an active selectedList
  const selectedList = localStorage.getItem('selectedList');

  if (selectedList) {
    // If there is a selected list, display the container
    currentTodoContainer.style.display = 'block';
  } else {
    // If there is no selected list, hide the container
    currentTodoContainer.style.display = 'hidden';
  }
}


function loadList(lists, listKey) {
  const todoListContainer = document.getElementById('currentTodoList');
  const listNameContainer = document.getElementById('currentListName');

  todoListContainer.innerHTML = '';
  listNameContainer.textContent = '';

  const selectedList = lists[listKey];

  if (selectedList) {
    console.log(selectedList)
    listNameContainer.textContent = selectedList.name;

    selectedList.todos.forEach((todo) => {
      const listItem = document.createElement('li');
      listItem.textContent = todo.text;
      listItem.classList.add(todo.completed ? 'line-through' : 'text-black'); // Apply Tailwind CSS classes for completed to-dos

      todoListContainer.appendChild(listItem);
    });
  }
}
