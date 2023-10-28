function addList(lists, listKey, listName) {
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
    listLink.textContent = listName;
  
    listLink.addEventListener('click', function () {
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
  

// Attach the addList function to the "Add List" button click event
document.getElementById('addListButton').addEventListener('click', addList);

