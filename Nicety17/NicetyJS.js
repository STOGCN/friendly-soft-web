// Loading Screen
const loadingScreen = document.getElementById('loading-screen');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe hero section for counter animation
const heroSection = document.querySelector('.hero');
if (heroSection) {
    observer.observe(heroSection);
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('aos-animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for particles
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        const speed = 0.5 + (index * 0.1);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const originalText = typingElement.textContent;
        setTimeout(() => {
            typeWriter(typingElement, originalText, 50);
        }, 1000);
    }
});

// Enhanced modal functionality
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalImages = document.getElementById('modal-images');
const closeBtn = document.getElementById('close');
const prevBtn = document.querySelector('.modal-nav-btn.prev');
const nextBtn = document.querySelector('.modal-nav-btn.next');

const projectData = {
    "Chaing mai Robotic Games": {
        desc: "Microbit programing",
        images: ["img/IMG_4768.jpg", "img/IMG_4770.jpg", "img/IMG_4767.jpg"],
        tech: ["Microbit", "Python", "Robotics"]
    },
    "Only Food": {
        desc: "Delivery Application",
        images: ["img/IMG_4775.jpg", "img/IMG_4776.jpg", "img/IMG_4777.jpg"],
        tech: ["React Native", "Firebase", "Application Development"]
    },
    "Sang Som": {
        desc: "Sneaker Website",
        images: ["img/home1.png", "img/home2.png", "img/search1.png"],
        tech: ["HTML", "CSS", "JavaScript"]
    }
};

let slideIndex = 0;
let slideInterval;
let currentProject = null;

cards.forEach(card => {
    const btn = card.querySelector('.btn-view');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = card.querySelector('strong').innerText;
        const data = projectData[title];
        currentProject = title;
        
        modalTitle.innerText = title;
        modalDesc.innerText = data.desc;

        // Clear and populate images
        modalImages.innerHTML = '';
        data.images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.toggle('active', index === 0);
            modalImages.appendChild(img);
        });

        // Update tech tags
        const techContainer = document.querySelector('.modal-tech');
        techContainer.innerHTML = '';
        data.tech.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            techContainer.appendChild(tag);
        });

        // Add navigation and indicators
        const nav = document.createElement('div');
        nav.className = 'modal-nav';
        nav.innerHTML = `
            <button class="modal-nav-btn prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="modal-nav-btn next">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        modalImages.appendChild(nav);

        const indicators = document.createElement('div');
        indicators.className = 'modal-indicators';
        data.images.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = 'modal-indicator';
            indicator.classList.toggle('active', index === 0);
            indicator.addEventListener('click', () => goToSlide(index));
            indicators.appendChild(indicator);
        });
        modalImages.appendChild(indicators);

        slideIndex = 0;
        updateSlide();
        slideInterval = setInterval(nextSlide, 3000);

        modal.style.display = 'block';
        
        // Add event listeners for navigation
        const newPrevBtn = modal.querySelector('.modal-nav-btn.prev');
        const newNextBtn = modal.querySelector('.modal-nav-btn.next');
        
        newPrevBtn.addEventListener('click', prevSlide);
        newNextBtn.addEventListener('click', nextSlide);
    });
});

function updateSlide() {
    const imgs = modalImages.querySelectorAll('img');
    const indicators = modalImages.querySelectorAll('.modal-indicator');
    
    imgs.forEach((img, i) => {
        img.classList.toggle('active', i === slideIndex);
    });
    
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === slideIndex);
    });
}

function nextSlide() {
    const imgs = modalImages.querySelectorAll('img');
    slideIndex = (slideIndex + 1) % imgs.length;
    updateSlide();
}

function prevSlide() {
    const imgs = modalImages.querySelectorAll('img');
    slideIndex = slideIndex === 0 ? imgs.length - 1 : slideIndex - 1;
    updateSlide();
}

function goToSlide(index) {
    slideIndex = index;
    updateSlide();
}

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    clearInterval(slideInterval);
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
        clearInterval(slideInterval);
    }
});

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            clearInterval(slideInterval);
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    }
});

// Hover effects for cards
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'perspective(1000px) rotateX(2.5deg) rotateY(-3deg) translateY(-3px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});

// Skills progress animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.bar');
    
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const fill = bar.querySelector('.bar-fill');
        const text = bar.querySelector('.bar-text');
        
        if (fill && text) {
            setTimeout(() => {
                fill.style.width = percent + '%';
                text.textContent = percent + '%';
            }, 500);
        }
    });
}

// Observe skills section for animation
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
}

// Update year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);