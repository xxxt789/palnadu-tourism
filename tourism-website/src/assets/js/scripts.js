document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Hover effects for buttons
    const buttons = document.querySelectorAll('.hover-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });

    // Dynamic content loading example
    const loadContentButton = document.getElementById('load-content');
    loadContentButton.addEventListener('click', function() {
        const contentArea = document.getElementById('dynamic-content');
        contentArea.innerHTML = '<p>Loading new content...</p>';
        setTimeout(() => {
            contentArea.innerHTML = '<p>New content loaded!</p>';
        }, 2000);
    });
});