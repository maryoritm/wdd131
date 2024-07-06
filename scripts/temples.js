document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById('year');
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const navUl = document.querySelector('nav ul');
    const currentDateTimeSpan = document.getElementById('current-datetime');

    // Set the year in the footer
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Get current date and time
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // Adjust formatting as needed

    // Display current date and time in the footer
    currentDateTimeSpan.textContent = formattedDateTime;

    // Set the last modified date in the footer
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString();

    // Toggle the navigation menu
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('show');
        menuToggle.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    closeMenu.addEventListener('click', () => {
        navUl.classList.toggle('show');
        closeMenu.style.display = 'none';
        menuToggle.style.display = 'block';
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
});
