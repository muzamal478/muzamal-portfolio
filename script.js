document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for fixed navbar height
                    behavior: "smooth"
                });
            }
        });
    });
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
        // Update ARIA attributes for accessibility
        const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
        navbarToggler.setAttribute("aria-expanded", !isExpanded);
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse.classList.contains("show")) {
                navbarCollapse.classList.remove("show");
                navbarToggler.setAttribute("aria-expanded", "false");
            }
        });
    });
    const heroSection = document.querySelector(".hero");
    window.addEventListener("scroll", () => {
        const scrollValue = window.scrollY / 2;
        heroSection.style.backgroundPositionY = `${scrollValue}px`;
    });
    const skills = ["Software Engineer", "Web Developer", "Mobile Developer", "AI & ML Enthusiast"];
    let skillIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenSkills = 2000;
    const typedText = document.querySelector(".typed-text");

    function typeSkill() {
        if (charIndex < skills[skillIndex].length) {
            typedText.textContent += skills[skillIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeSkill, typingSpeed);
        } else {
            setTimeout(eraseSkill, delayBetweenSkills);
        }
    }

    function eraseSkill() {
        if (charIndex > 0) {
            typedText.textContent = skills[skillIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseSkill, erasingSpeed);
        } else {
            skillIndex = (skillIndex + 1) % skills.length;
            setTimeout(typeSkill, typingSpeed);
        }
    }

    // Start typing animation
    setTimeout(typeSkill, 500);
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const emailAddress = "muzamalasghar47@gmail.com";
        const subject = encodeURIComponent(`New Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

        // Reset form
        contactForm.reset();
    });
    const progressBars = document.querySelectorAll(".progress-bar");
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                const width = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1];
                bar.style.width = `${width}%`;
            }
        });
    };

    window.addEventListener("scroll", animateProgressBars);
    animateProgressBars(); // Initial call for bars in viewport
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            const modalId = card.getAttribute("data-bs-target");
            const modal = document.querySelector(modalId);
            if (modal) {
                // Ensure modal is focused for accessibility
                modal.addEventListener("shown.bs.modal", () => {
                    modal.querySelector(".modal-title").focus();
                });
            }
        });
    });
    const images = document.querySelectorAll("img[data-src]");
    const lazyLoad = () => {
        images.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom >= 0) {
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
            }
        });
    };

    window.addEventListener("scroll", lazyLoad);
    lazyLoad(); // Initial call
    document.querySelectorAll(".social-icons a").forEach(link => {
        link.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                link.click();
            }
        });
    });
    const backToTop = document.createElement("button");
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = "back-to-top";
    backToTop.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        bottom: 90px;
        background: #0066ff;
        color: #fff;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    `;
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("error", (e) => {
        console.warn(`Error in ${e.filename} at line ${e.lineno}: ${e.message}`);
    }, true);
    window.addEventListener("error", (e) => {
        console.warn(`Error in ${e.filename} at line ${e.lineno}: ${e.message}`);
    }, true);

});