let currentSelectedListLink = null; // To keep track of the currently selected list link




function render() {
  const listsContainer = document.getElementById('listsContainer');
  const currentTodoContainer = document.getElementById('currentTodoContainer'); // Get the currentTodoContainer element

  console.log(currentTodoContainer);

  listsContainer.innerHTML = '';

  const lists = JSON.parse(localStorage.getItem('data'));

  if (lists) {
    for (const listKey in lists) {
      const list = lists[listKey];
      addList(lists, listKey, list.name);
    }
  }

  // Additional code to maintain the selected list link
  if (currentSelectedListLink) {
    currentSelectedListLink.classList.remove('bg-blue-500');
    currentSelectedListLink.classList.add('text-blue-600');
  }
  // Update the selected list link and its styling
  if (lists && currentSelectedListLink) {
    const selectedListKey = localStorage.getItem('selectedList');
    const selectedListLink = document.querySelector(`[data-list-key="${selectedListKey}"]`);
    if (selectedListLink) {
      selectedListLink.classList.add('bg-blue-500', 'text-white');
      selectedListLink.classList.remove('text-blue-600');
      currentSelectedListLink = selectedListLink;
    }
  }
}





