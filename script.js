document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Toggle mobile menu
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('open'); // Optional: for animating hamburger icon
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        });
    });

    // Optional: Add active class to current page link in navigation
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === '' || currentPage === 'index.html') {
        document.querySelector('.main-nav ul li a[href="index.html"]').classList.add('active');
    } else {
        const activeLink = document.querySelector(`.main-nav ul li a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // You can add more JavaScript here for:
    // - Form validation on contact page
    // - Smooth scrolling for anchor links
    // - Dynamic content loading or filtering for portfolio
    // - Intersection Observer for scroll animations (e.g., fade-in elements)
});


