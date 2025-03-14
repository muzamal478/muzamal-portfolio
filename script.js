document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Navbar background change on scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    document.getElementById("contact").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
    
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
    
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }
    
        let emailAddress = "muzamalasghar47@gmail.com"; // Replace with your email
        let subject = `New Contact from ${name}`;
        let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    });
    
    // Toggle mobile navbar
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
    });

    // Add scroll effect to hero section
    const heroSection = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY / 2;
        heroSection.style.backgroundPositionY = `${scrollValue}px`;
    });
});

// Typing Effect for Skills
const skills = ["Software Engineer", "Web Developer", "Mobile Developer", "AI & ML Enthusiast"];
let skillIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenSkills = 2000;
const typedText = document.querySelector(".typed-text");

function typeSkill() {
    if (charIndex < skills[skillIndex].length) {
        typedText.innerHTML += skills[skillIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeSkill, typingSpeed);
    } else {
        setTimeout(eraseSkill, delayBetweenSkills);
    }
}

function eraseSkill() {
    if (charIndex > 0) {
        typedText.innerHTML = skills[skillIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseSkill, erasingSpeed);
    } else {
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(typeSkill, typingSpeed);
    }
}

// Start Animation on Page Load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeSkill, 500);
});

// Smooth Scroll for About Section
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-link").forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// Smooth Scroll Animation
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, 
                behavior: 'smooth'
            });
        }
    });
});
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    let emailAddress = "muzamalasghar47@gmail.com"; // Replace with your email
    let subject = `New Contact from ${name}`;
    let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
});

