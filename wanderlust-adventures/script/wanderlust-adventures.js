// JavaScript for Wanderlust Adventures

// Toggle mobile menu
const toggleBtn = document.querySelector('.toggle');
const navMenu = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Send form data to server (dummy action)
        alert('Form submitted successfully.');
        form.reset();
    }
});
