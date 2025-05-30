window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollPercent = (scrollTop / docHeight) * 100;

    document.getElementById('scroll-progress-bar').style.width = scrollPercent + '%'
})

/* back to top button */

const backToTopBtn = document.getElementById('backToTop');

// Show button when not at the very top
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize hidden if already at top on load
if (window.scrollY === 0) {
    backToTopBtn.classList.add('hidden');
}