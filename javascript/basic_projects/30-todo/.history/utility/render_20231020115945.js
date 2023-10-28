let currentSelectedListLink = null; // To keep track of the currently selected list link

function render() {
    const listsContainer = document.getElementById('listsContainer');
  
    listsContainer.innerHTML = '';
  
    for (const listKey in lists) {
      const list = lists[listKey];
  
      const listLink = document.createElement('a');
      listLink.href = '#';
      listLink.classList.add('block', 'p-2', 'rounded-lg', 'my-1', 'hover:bg-blue-200', 'text-blue-600', 'hover:text-blue-800', 'transition-colors');
      listLink.textContent = list.name;
  
      listLink.addEventListener('click', function () {
        if (currentSelectedListLink) {
          // Remove the active class
          currentSelectedListLink.classList.remove('bg-blue-500');
          // Set text color to white
          currentSelectedListLink.style.color = 'white';
        }

        loadList(listKey);
        listLink.classList.add('bg-blue-500');
        // Set text color to match the desired text color
        // listLink.style.color = 'white';

        // Update the currently selected list link
        currentSelectedListLink = listLink;
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
