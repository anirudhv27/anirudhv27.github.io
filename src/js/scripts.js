// scripts.js
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

// Offset so the section sits in the upper-middle of the viewport (not at the very top)
const ABOUT_SCROLL_OFFSET_VH = 25;

function smoothScrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const offsetPx = (ABOUT_SCROLL_OFFSET_VH / 100) * window.innerHeight;
    const targetPosition = sectionId === 'about'
        ? section.getBoundingClientRect().top + window.pageYOffset - offsetPx
        : section.getBoundingClientRect().top + window.pageYOffset - 80;

    window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth"
    });
}

function scrollToAboutWithOffset() {
    const about = document.getElementById('about');
    if (!about) return;
    const offsetPx = (ABOUT_SCROLL_OFFSET_VH / 100) * window.innerHeight;
    const targetPosition = about.getBoundingClientRect().top + window.pageYOffset - offsetPx;
    window.scrollTo({ top: Math.max(0, targetPosition), behavior: 'smooth' });
}

function getVisibleSection() {
    let visibleSectionId = null;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.25) {
            visibleSectionId = section.id;
        }
    });
    return visibleSectionId;
}

function setActiveNavLink() {
    const visibleSectionId = getVisibleSection();
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${visibleSectionId}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', function() {
    setActiveNavLink();
});

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

// JavaScript

// Function to handle smooth scrolling
document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to handle navbar scroll changes
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const splash = document.getElementById('splash');
    const splashHeight = splash ? splash.offsetHeight : 0;

    if (window.scrollY >= splashHeight / 2) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

var scrollToNext = document.getElementById("scrollToNext");
if (scrollToNext) {
    scrollToNext.addEventListener("click", function() {
        const aboutSection = document.getElementById("about");
        if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}

document.addEventListener("scroll", function() {
    const header = document.querySelector(".gradient-swipe");
    if (header) {
      let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
      let moveAmount = scrollPercentage * 100 * 7;
      header.style.backgroundPosition = `0 -${100 - moveAmount}%`;
    }
});

  var menuToggle = document.getElementById('menuToggle');
  if (menuToggle) menuToggle.addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('close');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('close');
    }
});

// Clicking away hides the dropdown
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuToggle = document.getElementById('menuToggle');
    const menuIcon = document.querySelector('.menu-icon');
    if (!mobileMenu || !menuToggle) return;
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.classList.remove('close');
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
