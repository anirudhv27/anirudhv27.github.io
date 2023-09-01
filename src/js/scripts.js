// scripts.js
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar a');

function smoothScrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - 80; // Assuming navbar is 80px in height
    
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
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
    const splashHeight = document.getElementById('splash').offsetHeight;

    if (window.scrollY >= splashHeight / 2) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
});

document.getElementById("scrollToNext").addEventListener("click", function() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener("scroll", function() {
    const header = document.querySelector(".gradient-swipe");
    if (header) {
      let scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight));
      // Move the gradient to the right based on the scroll position
      let moveAmount = scrollPercentage * 100 * 7; // Move a full 100% over the entire scroll
      header.style.backgroundPosition = `0 -${100 - moveAmount}%`;
    }
  });
  