let currentSelectedListLink = null; // To keep track of the currently selected list link




function render(todo) {
  const listsContainer = document.getElementById('listsContainer');

  listsContainer.innerHTML = '';

  const lists = JSON.parse(localStorage.getItem('data'));

  console.log(JSON.parse(localStorage.getItem('data')))

  // console.log('----')

  if (lists) {
    for (const listKey in lists) {
      const list = lists[listKey];
      // console.log(list)
      addList(lists, listKey, list.name);
    }
  }

}




