// Modern Portfolio JavaScript
class Portfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavbar();
        this.setupHamburgerMenu();
        this.setupScrollAnimations();
        this.setupSkillsAnimation();
        this.setupSmoothScrolling();
        this.setupActiveNavLinks();
        this.setupContactForm();
            this.setupHeroTitleAnimation(); // <-- เพิ่มตรงนี้

    }

    // Navbar scroll effects
    setupNavbar() {
        const navbar = document.getElementById('navbar');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Navbar effects
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Hamburger menu functionality
    setupHamburgerMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        }
    }

    // Active navigation links based on scroll position
    setupActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        const updateActiveLink = () => {
            let current = '';
            const scrollPosition = window.scrollY + 200;

            // Simple home detection
            if (scrollPosition < 500) {
                current = 'home';
            } else {
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = sectionId;
                    }
                });
            }

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                const linkId = href.substring(1);
                
                if (linkId === current) {
                    link.classList.add('active');
                }
            });
        };

        // Update on scroll
        window.addEventListener('scroll', updateActiveLink);
        
        // Update on page load
        updateActiveLink();
    }

    // Scroll animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-card, .gallery-item, .about-img, .about-text').forEach(el => {
            observer.observe(el);
        });
    }

    // Skills progress animation
    setupSkillsAnimation() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.getAttribute('data-level');
                    entry.target.style.width = level + '%';
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillsObserver.observe(bar);
        });
    }


    setupHeroTitleAnimation() {
    // Typewriter animation for hero title
const heroTitle = document.querySelector('.hero-title');
const messages = ["Welcome to my profile", "I'm Rongrot Butkaeo"];
let msgIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 150;

function typeHero() {
    const currentMessage = messages[msgIndex];
    heroTitle.textContent = currentMessage.substring(0, charIndex);

    if (!isDeleting && charIndex < currentMessage.length) {
        charIndex++;
        speed = 150;
    } else if (!isDeleting && charIndex === currentMessage.length) {
        isDeleting = true;
        speed = 1000; // รอ 1 วินาที ก่อนลบ
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        speed = 50; // ความเร็วลบ
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length; // เปลี่ยนข้อความต่อไป
        speed = 500; // รอครึ่งวินาทีก่อนพิมพ์ข้อความใหม่
    }

    setTimeout(typeHero, speed);
}

typeHero();

}

    // Smooth scrolling
    setupSmoothScrolling() {
        // Simple and clean smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = anchor.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: Math.max(0, targetPosition),
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    anchor.classList.add('active');
                }
            });
        });
    }

    // Contact form functionality
    setupContactForm() {
        const contactForm = document.getElementById('contact-form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitButton = contactForm.querySelector('#submit-button');
                const nameInput = contactForm.querySelector('#name');
                const emailInput = contactForm.querySelector('#email');
                const messageInput = contactForm.querySelector('#message');
                
                // Show loading state
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Simulate form submission
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    const successMessage = document.getElementById('success-message');
                    if (successMessage) {
                        successMessage.textContent = 'Message sent successfully! Thank you for contacting me.';
                        successMessage.style.display = 'block';
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.style.display = 'none';
                        }, 5000);
                    }
                    
                    // Reset button
                    submitButton.disabled = false;
                    submitButton.textContent = 'Send Message';
                }, 2000);
            });
        }
    }
}

// Add CSS for animations
const animationStyles = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
    }

    /* Ensure elements start hidden */
    .skill-card,
    .gallery-item,
    .about-img,
    .about-text {
        opacity: 0;
        transform: translateY(30px);
    }

    /* Show elements when they have the animation class */
    .skill-card.animate-fade-in-up,
    .gallery-item.animate-fade-in-up,
    .about-img.animate-fade-in-up,
    .about-text.animate-fade-in-up {
        opacity: 1;
        transform: translateY(0);
    }

    /* Navbar active state animations */
    .nav-link.active {
        animation: navPulse 2s infinite;
    }

    @keyframes navPulse {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
        }
        50% {
            box-shadow: 0 4px 25px rgba(0, 212, 255, 0.4);
        }
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
    
    // Add hover effects for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add navbar scroll indicator
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #00d4ff, #0099cc);
        z-index: 1001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollIndicator.style.width = scrollPercent + '%';
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    // Reset hamburger menu on resize
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Portfolio;
}
