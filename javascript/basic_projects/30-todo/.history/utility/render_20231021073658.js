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


// Attach the addList function to the "Add List" button click event
document.getElementById('addListButton').addEventListener('click', render);

