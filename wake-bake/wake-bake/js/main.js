
(function () {
    function toggleMenu() {
        const body = document.body;
        body.classList.toggle('body--open-menu');
    }

    function scrollToSection(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth' 
            });
        }

        const body = document.body;
        body.classList.remove('body--open-menu');
    }

    function checkWindowSize() {
        if (window.innerWidth <= 900) {
            const burgerIcon = document.querySelector('.burger-icon');
            const navLinks = document.querySelectorAll('.nav__link');

            burgerIcon.addEventListener('click', toggleMenu);

            navLinks.forEach(link => {
                link.addEventListener('click', scrollToSection);
            });

            const body = document.body;
            body.classList.remove('body--open-menu');
        }
    }

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);
})();

