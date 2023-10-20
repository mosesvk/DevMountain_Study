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
      loadList(listKey);
      // Apply an active style to the selected list link
      listLink.classList.add('bg-blue-500', 'text-white');
    });

    listsContainer.appendChild(listLink);
  }
}
