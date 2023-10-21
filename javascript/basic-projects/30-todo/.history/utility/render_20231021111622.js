let currentSelectedListLink = null; // To keep track of the currently selected list link

// Function to initialize the application
function initializeApp() {
  // Retrieve the lists and selected list from local storage
  let lists = JSON.parse(localStorage.getItem('data')) || {};
  let selectedListKey = localStorage.getItem('selectedList');

  // If the selectedListKey is not set, set a default list
  if (!selectedListKey) {
    selectedListKey = 'defaultList';
    localStorage.setItem('selectedList', selectedListKey);
  }

  // Render the lists and selected list
  render(lists, selectedListKey);
}



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




