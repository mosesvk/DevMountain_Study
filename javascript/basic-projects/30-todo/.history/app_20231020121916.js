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
            listItem.classList.add('flex', 'items-center', 'justify-between', 'p-2', 'border', 'border-gray-200', 'rounded-md');

            const textContainer = document.createElement('div');
            textContainer.textContent = todo.text;

            // Check input to the left of the text
            const checkInput = document.createElement('input');
            checkInput.type = 'checkbox';
            checkInput.classList.add('mr-2');
            checkInput.checked = todo.completed;

            // Delete button to the right of the text
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded-md');
            deleteButton.addEventListener('click', () => {
              // Add your delete functionality here
            });

            textContainer.appendChild(checkInput);
            textContainer.appendChild(deleteButton);
            listItem.appendChild(textContainer);

            if (todo.completed) {
              listItem.classList.add('line-through', 'text-gray-400'); // Apply completed styling
            }

            currentTodoList.appendChild(listItem);
          });
        }
      });
    });
  });