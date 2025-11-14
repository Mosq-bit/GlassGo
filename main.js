document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.header__nav-menu');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
    
    const navLinks = document.querySelectorAll('.header__nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            burgerMenu.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
});