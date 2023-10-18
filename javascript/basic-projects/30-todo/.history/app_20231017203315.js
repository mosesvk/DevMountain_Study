  // JavaScript code
  document.addEventListener('DOMContentLoaded', function () {

    render()

    const listItems = document.querySelectorAll('.list-group-item');
  
    listItems.forEach((item) => {
      item.addEventListener('click', function () {
        const listId = this.getAttribute('data-list-id');
        const currentList = lists[listId];
  
        if (currentList) {
          const listNameContainer = document.getElementById('currentListName');
          listNameContainer.textContent = currentList.name;
  
          const currentTodoList = document.getElementById('currentTodoList');
          currentTodoList.innerHTML = ''; // Clear the existing list items
  
          currentList.todos.forEach((todo) => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.text;
  
            if (todo.completed) {
              listItem.classList.add('completed'); // Apply a CSS class for completed to-dos
            }
  
            currentTodoList.appendChild(listItem);
          });
        }
      });
    });
  });