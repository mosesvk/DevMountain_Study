function addList() {
    // Get the input element for the list name
    const listInput = document.getElementById('listInput');
    const listName = listInput.value.trim(); // Get the trimmed list name

    if (listName === '') {
        // Ensure the input is not empty
        alert('Please enter a list name.');
        return;
    }

    // Create a new list object
    const newList = {
        name: listName,
        todos: [] // You can initialize with an empty array of todos
    };

    // Add the new list to your 'lists' data
    if (localStorage.getItem('data') === null) {
        // If 'lists' data doesn't exist in local storage, create an initial array
        const initialLists = [newList];
        localStorage.setItem('data', JSON.stringify(initialLists));
    } else {
        // If 'lists' data already exists in local storage, update it
        const storedLists = JSON.parse(localStorage.getItem('data'));
        storedLists.push(newList);
        localStorage.setItem('data', JSON.stringify(storedLists));
    }

    // Clear the input field
    listInput.value = '';

    // Call the render function to update the UI
    render();
}

// Attach the addList function to the "Add List" button click event
document.getElementById('addListButton').addEventListener('click', addList);

