document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger menu and nav links container
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelector('ul');
    
    // Add hamburger menu before nav
    nav.insertBefore(hamburger, navLinks);
    
    // Add click event listener to hamburger
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Toggle hamburger icon
        hamburger.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '☰';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '☰';
        }
    });
});