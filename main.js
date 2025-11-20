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

document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const mediaQuery = window.matchMedia('(max-width: 375px)');
    
    function initAccordion() {
        if (mediaQuery.matches) {

            accordionHeaders.forEach(header => {

                header.classList.remove('active');
                header.nextElementSibling.classList.remove('active');
                
                header.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    const isActive = this.classList.contains('active');

                    accordionHeaders.forEach(otherHeader => {
                        otherHeader.classList.remove('active');
                        otherHeader.nextElementSibling.classList.remove('active');
                    });

                    if (!isActive) {
                        this.classList.add('active');
                        content.classList.add('active');
                    }
                });
            });
        } else {
            
            accordionHeaders.forEach(header => {
                header.classList.remove('active');
                header.nextElementSibling.style.maxHeight = 'none';
                header.nextElementSibling.style.overflow = 'visible';
                header.nextElementSibling.classList.add('active');
            });
        }
    }
    
 
    initAccordion();

    mediaQuery.addEventListener('change', initAccordion);
});
