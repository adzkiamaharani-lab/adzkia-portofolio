const exploreButton = document.querySelector('#home a');
const backToTop = document.querySelector('#backToTop');

// Pesan sambutan saat tombol Explore diklik
if (exploreButton) {
    exploreButton.addEventListener('click', () => {
        alert("Welcome to Adzkia's World! 🌷✨ Let's start our adventure!");
    });
}

// Tombol kembali ke atas
if (backToTop) {
    const updateBackToTop = () => {
        backToTop.style.display = window.scrollY > 200 ? 'block' : 'none';
    };

    window.addEventListener('scroll', updateBackToTop);
    updateBackToTop();

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animasi section saat di-scroll
const revealSections = document.querySelectorAll(
    '#about, #education, #skills, #experience, #contact'
);

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealSections.forEach(section => {
        section.classList.add('scroll-reveal');
        revealObserver.observe(section);
    });
} else {
    revealSections.forEach(section => {
        section.classList.add('show');
    });
}

// Animasi kartu Skills muncul bergantian
const skillCards = document.querySelectorAll('.skill-card');
const skillsSection = document.querySelector('#skills');

if ('IntersectionObserver' in window && skillsSection) {
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show-card');
                    }, index * 350);
                });

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    skillObserver.observe(skillsSection);
} else {
    skillCards.forEach(card => {
        card.classList.add('show-card');
    });
}
