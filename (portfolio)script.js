document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    // Toggle navigation menu visibility
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Adds or removes 'active' class to nav
    });
});
