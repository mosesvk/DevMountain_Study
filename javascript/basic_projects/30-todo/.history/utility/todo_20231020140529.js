function addTodo() {
    // Get the input element where the user types the new to-do
    const todoInput = document.getElementById('todoInput');
  
    // Get the current list (for example, currentList is a global variable)
    const currentList = localStorage.getItem('selectedList') // Assuming you want to add a to-do to list with key 1
  
    // Get the text from the input field
    const todoText = todoInput.value;
  
    // Check if the text is not empty
    if (todoText.trim() !== '') {
      // Create a new to-do object
      const newTodo = {
        text: todoText,
        completed: false,
      };
  
      // Add the new to-do to the current list
      currentList.todos.push(newTodo);
  
      // Clear the input field
      todoInput.value = '';
  
      // Call the render function to update the interface
      render();
    }
  }
  