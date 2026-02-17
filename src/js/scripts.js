// scripts.js

const ABOUT_SCROLL_OFFSET_VH = 25;

function scrollToAboutWithOffset() {
    const about = document.getElementById('about');
    if (!about) return;
    const offsetPx = (ABOUT_SCROLL_OFFSET_VH / 100) * window.innerHeight;
    const targetPosition = about.getBoundingClientRect().top + window.pageYOffset - offsetPx;
    window.scrollTo({ top: Math.max(0, targetPosition), behavior: 'smooth' });
}

// When navigating to #about (link click or URL hash), scroll with offset so section is in upper-middle
document.addEventListener('click', function(e) {
    const a = e.target.closest('a[href="#about"]');
    if (!a) return;
    e.preventDefault();
    scrollToAboutWithOffset();
});
if (window.location.hash === '#about') {
    requestAnimationFrame(function() { scrollToAboutWithOffset(); });
}
window.addEventListener('hashchange', function() {
    if (window.location.hash === '#about') scrollToAboutWithOffset();
});

// Navbar scroll state (add nav-scrolled when user has scrolled)
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY > 0) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

// Theme toggle (dark / light mode)
(function() {
    var STORAGE_KEY = 'theme';
    var body = document.body;
    var themeToggle = document.getElementById('themeToggle');

    function setTheme(dark) {
        if (dark) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        }
        try { localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light'); } catch (e) {}
    }

    function initTheme() {
        try {
            var stored = localStorage.getItem(STORAGE_KEY);
            if (stored === 'dark') setTheme(true);
            else if (stored === 'light') setTheme(false);
            else setTheme(false);
        } catch (e) {
            setTheme(false);
        }
    }

    initTheme();
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            var isDark = body.classList.contains('theme-dark');
            setTheme(!isDark);
        });
    }
})();
