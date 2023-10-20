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
    // You can replace 'your-storage-key' with your desired key
    if (localStorage.getItem('your-storage-key') === null) {
        // If 'lists' data doesn't exist in local storage, create an initial array
        const initialLists = [newList];
        localStorage.setItem('your-storage-key', JSON.stringify(initialLists));
    } else {
        // If 'lists' data already exists in local storage, update it
        const storedLists = JSON.parse(localStorage.getItem('your-storage-key'));
        storedLists.push(newList);
        localStorage.setItem('your-storage-key', JSON.stringify(storedLists));
    }

    // Clear the input field
    listInput.value = '';

    // Call the render function to update the UI
    render();
}

// Attach the addList function to the "Add List" button click event
document.getElementById('addListButton').addEventListener('click', addList);

// Initialize your 'lists' data and render the UI on page load
function init() {
    if (localStorage.getItem('your-storage-key') === null) {
        // If 'lists' data doesn't exist in local storage, initialize it with an empty array
        localStorage.setItem('your-storage-key', JSON.stringify([]));
    }
    
    // Call the render function to display the initial data
    render();
}

// Call the init function on page load
init();
