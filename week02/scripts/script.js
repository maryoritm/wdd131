const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add a click event listener to the button
button.addEventListener('click', function () {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a list item (li) element
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Add an event listener to the delete button to remove the li element
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Return focus to the input field
        });

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list
        list.append(li);

        // Clear the input field
        input.value = '';
    }

    // Regardless if a list item was created or not, set focus back to the input element
    input.focus();
});
