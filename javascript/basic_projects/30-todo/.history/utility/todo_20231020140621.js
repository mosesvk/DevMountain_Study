function addTodo() {
  // Get the input element where the user types the new to-do
  const todoInput = document.getElementById('todoInput');

  // Get the current list key from local storage
  const selectedListKey = localStorage.getItem('selectedList');

  // Get the text from the input field
  const todoText = todoInput.value;

  // Check if the text is not empty
  if (todoText.trim() !== '') {
    // Retrieve the lists from local storage
    const lists = JSON.parse(localStorage.getItem('your-storage-key')); // Replace 'your-storage-key' with your storage key

    // Find the current list by its key
    const currentList = lists.find(list => list.key === selectedListKey);

    if (currentList) {
      // Create a new to-do object
      const newTodo = {
        text: todoText,
        completed: false,
      };

      // Add the new to-do to the current list
      currentList.todos.push(newTodo);

      // Update the lists in local storage
      localStorage.setItem('your-storage-key', JSON.stringify(lists)); // Replace 'your-storage-key' with your storage key

      // Clear the input field
      todoInput.value = '';

      // Call the render function to update the interface
      render();
    }
  }
}
