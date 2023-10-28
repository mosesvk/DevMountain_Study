function render() {
    // Get the HTML element for the list container
    const listsContainer = document.getElementById('listsContainer');
  
    // Clear the existing content in the container
    listsContainer.innerHTML = '';
  
    // Loop through each list and create an anchor element for each
    for (const listKey in lists) {
      const list = lists[listKey];
  
      const listLink = document.createElement('a');
      listLink.href = '#';
      listLink.className = 'list-group-item list-group-item-action';
      listLink.textContent = list.name;
  
      // Add a click event listener to the anchor element to load the selected list
      listLink.addEventListener('click', function () {
        loadList(listKey);
      });
  
      // Append the anchor element to the listsContainer
      listsContainer.appendChild(listLink);
    }
  }
  
  function loadList(listKey) {
    // Get the HTML elements you want to update
    const todoListContainer = document.getElementById('currentTodoList');
    const listNameContainer = document.getElementById('currentListName');
  
    // Clear the existing content in the containers
    todoListContainer.innerHTML = '';
    listNameContainer.textContent = '';
  
    // Access the selected list
    const selectedList = lists[listKey];
  
    if (selectedList) {
      // Set the list name
      listNameContainer.textContent = selectedList.name;
  
      // Render the to-dos
      selectedList.todos.forEach((todo) => {
        const listItem = document.createElement('li');
        listItem.textContent = todo.text;
  
        if (todo.completed) {
          listItem.classList.add('completed'); // Apply a CSS class for completed to-dos
        }
  
        todoListContainer.appendChild(listItem);
      });
    }
  }
