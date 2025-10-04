// ========== Theme Toggle Functionality ==========
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ========== Typing Animation ==========
const roles = [
    "Emerging Front End Developer",
    "Passionate Full Stack Developer",
    "UI Design Enthusiast",
    "Eager Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 50;
let erasingSpeed = 10;
let delayBetweenRoles = 1500;

const typedText = document.getElementById("typed-text");

function type() {
    if (charIndex < roles[roleIndex].length) {
        typedText.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        roleIndex++;
        if (roleIndex >= roles.length) roleIndex = 0;
        setTimeout(type, typingSpeed);
    }
}

// Start typing animation
document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) setTimeout(type, 1000);
});

// ========== Skills Carousel ==========
const skills = [
    { name: "Python", icon: "fab fa-python", color: "linear-gradient(to bottom right,#3b82f6,#1e3a8a)" },
    { name: "Java", icon: "fab fa-java", color: "linear-gradient(to bottom right,#ef4444,#7f1d1d)" },
    { name: "C", icon: "fas fa-c", color: "linear-gradient(to bottom right,#8b5cf6,#4c1d95)" },
    { name: "HTML", icon: "fab fa-html5", color: "linear-gradient(to bottom right,#f97316,#7c2d12)" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "linear-gradient(to bottom right,#3b82f6,#1e40af)" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "linear-gradient(to bottom right,#facc15,#854d0e)" },
    { name: "Angular", icon: "fab fa-angular", color: "linear-gradient(to bottom right,#dc2626,#7f1d1d)" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "linear-gradient(to bottom right,#8b5cf6,#4c1d95)" },
    { name: "Flask", icon: "fas fa-flask", color: "linear-gradient(to bottom right,#6b7280,#1f2937)" },
    { name: "MySQL", icon: "fas fa-database", color: "linear-gradient(to bottom right,#3b82f6,#1e40af)" },
    { name: "Firestore", icon: "fas fa-fire", color: "linear-gradient(to bottom right,#f97316,#7c2d12)" },
    { name: "Git", icon: "fab fa-git-alt", color: "linear-gradient(to bottom right,#dc2626,#7f1d1d)" },
    { name: "Firebase", icon: "fas fa-cloud", color: "linear-gradient(to bottom right,#facc15,#854d0e)" },
    { name: "NumPy", icon: "fas fa-calculator", color: "linear-gradient(to bottom right,#3b82f6,#1e3a8a)" },
    { name: "Pandas", icon: "fas fa-table", color: "linear-gradient(to bottom right,#dc2626,#7f1d1d)" },
    { name: "Matplotlib", icon: "fas fa-chart-line", color: "linear-gradient(to bottom right,#22c55e,#14532d)" }
];

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function createCarousel(line) {
    const shuffled = shuffle([...skills]);
    const doubled = [...shuffled, ...shuffled];

    doubled.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card";
        card.style.background = skill.color;
        card.innerHTML = `
            <i class="${skill.icon} text-white text-2xl"></i>
            <div class="skill-name">${skill.name}</div>
        `;
        card.addEventListener("click", () => {
            line.style.animationPlayState = "paused";
            card.classList.add("show-name");
            setTimeout(() => {
                line.style.animationPlayState = "running";
                card.classList.remove("show-name");
            }, 2000);
        });
        line.appendChild(card);
    });
}

const line = document.querySelector(".carousel-line");
createCarousel(line);

// ========== Mobile Menu Toggle ==========
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('nav-hidden');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('nav-hidden');
    });
});

// ========== Active Navigation & Scroll Effects ==========
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');
const navLogo = document.getElementById('navLogo');
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    // Show/hide navbar logo on scroll
    if (window.scrollY > 100) {
        navLogo.classList.add('visible');
    } else {
        navLogo.classList.remove('visible');
    }

    // Active navigation link highlighting
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });

    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Scroll to top functionality
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== Email.js Contact Form ==========
(function () {
    emailjs.init("7l4r57mf8s_MAANhp"); // Replace with your EmailJS public key
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_xb2kiyf", "template_wvbzk78", this) // Replace with your IDs
        .then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for reaching out. I will get back to you soon.',
                confirmButtonColor: '#3b82f6'
            });
            form.reset();
        }, function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later!',
                confirmButtonColor: '#d33'
            });
        });
});