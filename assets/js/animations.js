function initNavigationAnimations() {
    // Efekat za aktivnu stranicu
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-nav');
        }
        
        link