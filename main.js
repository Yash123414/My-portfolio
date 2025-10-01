// Main JavaScript functionality for portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initScrollAnimations();
    initSkillBars();
    initCounterAnimations();
    initSmoothScrolling();
    initParticleSystem();
});

// Typewriter effect for hero section
function initTypewriter() {
    const typed = new Typed('#typed-text', {
        strings: [
            'Building immersive gaming experiences 🎮',
            'Creating defense solutions for Indian Army 🛡️',
            'Developing smart real estate platforms 🏗️',
            'Exploring new technologies 🚀'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Animated skill bars
function initSkillBars() {
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 300);
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-bar').forEach(bar => {
        skillObserver.observe(bar.parentElement);
    });
}

// Animated counters
function initCounterAnimations() {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 40);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
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
}

// Enhanced particle system
function initParticleSystem() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach((particle, index) => {
        // Random size between 2-8px
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        
        // Random animation duration
        const duration = Math.random() * 4 + 4;
        particle.style.animationDuration = duration + 's';
        
        // Random delay
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        // Add hover interaction
        particle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.background = 'rgba(0, 212, 255, 0.3)';
        });
        
        particle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'rgba(74, 144, 226, 0.1)';
        });
    });
}

// Project filtering functionality (for projects page)
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 500,
                        easing: 'easeOutQuart'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: 0,
                        translateY: -20,
                        duration: 300,
                        easing: 'easeInQuart',
                        complete: () => {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Contact form validation and submission
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateContactForm(data)) {
            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
        } else {
            showNotification('Please fill in all required fields correctly.', 'error');
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
}

function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
    }
    
    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    // Update field appearance
    if (isValid) {
        field.classList.remove('border-red-500');
        field.classList.add('border-green-500');
    } else {
        field.classList.remove('border-green-500');
        field.classList.add('border-red-500');
    }
    
    return isValid;
}

function validateContactForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return (
        data.name &&
        data.name.trim().length >= 2 &&
        data.email &&
        emailRegex.test(data.email) &&
        data.message &&
        data.message.trim().length >= 10
    );
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-600' :
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    } text-white`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                ×
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

// Skills chart initialization (for about page)
function initSkillsChart() {
    const chartContainer = document.getElementById('skills-chart');
    if (!chartContainer) return;
    
    // This would be implemented with ECharts.js for detailed skill visualizations
    console.log('Skills chart initialized');
}

// Project modal functionality
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Load project details based on projectId
    loadProjectDetails(projectId, modalContent);
    
    // Show modal with animation
    modal.classList.remove('hidden');
    anime({
        targets: modal,
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    anime({
        targets: modalContent,
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutBack'
    });
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    
    anime({
        targets: modal,
        opacity: 0,
        duration: 200,
        easing: 'easeInQuart',
        complete: () => {
            modal.classList.add('hidden');
        }
    });
}

function loadProjectDetails(projectId, container) {
    // Project data would be loaded from a data source
    const projects = {
        'army-inventory': {
            title: 'PROJECT ALPHA - Army Inventory System',
            description: 'Secure inventory management system...',
            technologies: ['Python', 'Database Management', 'Security'],
            features: ['Real-time tracking', 'Analytics dashboard', 'Secure access control']
        }
        // Add more projects...
    };
    
    const project = projects[projectId];
    if (project) {
        container.innerHTML = `
            <h2 class="text-2xl font-bold mb-4">${project.title}</h2>
            <p class="text-gray-400 mb-4">${project.description}</p>
            <div class="mb-4">
                <h3 class="font-semibold mb-2">Technologies:</h3>
                <div class="flex flex-wrap gap-2">
                    ${project.technologies.map(tech => `<span class="bg-gray-700 px-2 py-1 rounded text-sm">${tech}</span>`).join('')}
                </div>
            </div>
        `;
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .card-hover {
        transition: all 0.3s ease;
    }
    
    .card-hover:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(74, 144, 226, 0.2);
    }
    
    .filter-btn.active {
        background: linear-gradient(135deg, #4a90e2, #00d4ff);
        color: white;
    }
`;
document.head.appendChild(style);