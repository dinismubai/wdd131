document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Toggle the visibility of the navigation menu
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        if (mainNav.classList.contains('active')) {
            menuToggle.textContent = 'X'; // Change to "X" when active
        } else {
            menuToggle.textContent = '☰'; // Revert to "☰" when inactive
        }
    });
});