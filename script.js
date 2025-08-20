document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior for any internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe screenshot containers for scroll animations
    const screenshotContainers = document.querySelectorAll('.screenshot-container');
    screenshotContainers.forEach((container, index) => {
        // Add initial animation styles
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        container.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(container);
    });

    // Hover effects now handled by CSS for phone-frame images

    // App Store button now works with the href in HTML - no JavaScript override needed

    // Parallax effect for phone screens (subtle)
    const contentScroll = document.querySelector('.content-scroll');
    if (contentScroll) {
        contentScroll.addEventListener('scroll', function() {
            const scrolled = contentScroll.scrollTop;
            const phoneScreens = document.querySelectorAll('.phone-screen');
            
            phoneScreens.forEach((screen, index) => {
                const speed = 0.1 + (index * 0.05);
                const yPos = -(scrolled * speed);
                screen.style.backgroundPosition = `center ${yPos}px`;
            });
        });
    }

    // Add loading animation for the page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    // Remove modal functionality since links now navigate to separate pages
});