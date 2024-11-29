document.addEventListener('DOMContentLoaded', function() {
    // Create sections object
    const sections = {};
    document.querySelectorAll('section[id]').forEach(section => {
        sections[section.id] = section.offsetTop;
    });

    // Handle scroll
    window.onscroll = function() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (let id in sections) {
            const section = document.getElementById(id);
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (section.offsetTop <= scrollPosition + 100) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                navLink.classList.add('active');
            }
        }
    };

    // Smooth scroll to sections
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });
});