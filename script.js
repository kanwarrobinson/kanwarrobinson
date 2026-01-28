/* ============================================
   PORTFOLIO JAVASCRIPT
   Modern, Interactive, Smooth Animations
   ============================================ */

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

// Main Initialization Function
function initializePortfolio() {
    // Load configuration
    loadConfiguration();
    
    // Initialize features
    initializeNavigation();
    initializeTheme();
    initializeParticles();
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeSkills();
    initializeProjects();
    initializeExperience();
    initializeTestimonials();
    initializeContactForm();
    initializeBackToTop();
    initializeStats();
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
}

/* ============================================
   CONFIGURATION LOADING
   ============================================ */

function loadConfiguration() {
    if (typeof portfolioConfig === 'undefined') {
        console.warn('Portfolio configuration not found. Using default values.');
        return;
    }
    
    const config = portfolioConfig;
    
    // Personal Info
    if (config.personal) {
        setText('#hero-name', config.personal.name);
        setText('#hero-tagline', config.personal.tagline);
        setText('#about-bio', config.personal.bio);
        setText('#about-email', config.personal.email);
        setText('#about-phone', config.personal.phone);
        setText('#contact-email', config.personal.email);
        setText('#contact-phone', config.personal.phone);
        setText('#contact-location', config.personal.location);
        setText('#footer-name', config.personal.name);
        setText('#footer-author', config.personal.name);
        
        // Profile Images
        setImage('#profile-image', config.personal.profileImage);
        setImage('#about-image', config.personal.profileImage);
        
        // Resume Link
        setLink('#resume-download', config.personal.resumeLink);
        
        // Update page title
        document.title = `${config.personal.name} | ${config.personal.title}`;
    }
    
    // Social Links
    if (config.social) {
        setLink('#github-link', config.social.github);
        setLink('#linkedin-link', config.social.linkedin);
        setLink('#twitter-link', config.social.twitter);
        setLink('#medium-link', config.social.medium);
    }
    
    // Apply theme colors
    if (config.theme) {
        applyThemeColors(config.theme);
    }
}

function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element && text) {
        element.textContent = text;
    }
}

function setImage(selector, src) {
    const element = document.querySelector(selector);
    if (element && src) {
        element.src = src;
        element.onerror = () => {
            // Use placeholder if image fails to load
            element.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(portfolioConfig.personal.name || 'User')}&size=400&background=6366f1&color=fff&bold=true`;
        };
    }
}

function setLink(selector, href) {
    const element = document.querySelector(selector);
    if (element && href) {
        element.href = href;
    }
}

function applyThemeColors(theme) {
    const root = document.documentElement;
    if (theme.primaryColor) root.style.setProperty('--primary-color', theme.primaryColor);
    if (theme.secondaryColor) root.style.setProperty('--secondary-color', theme.secondaryColor);
    if (theme.accentColor) root.style.setProperty('--accent-color', theme.accentColor);
}

/* ============================================
   NAVIGATION
   ============================================ */

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger?.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Smooth scroll and close mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

/* ============================================
   THEME TOGGLE
   ============================================ */

function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'dark' mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle?.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

/* ============================================
   PARTICLES BACKGROUND
   ============================================ */

function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: false
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

/* ============================================
   TYPING EFFECT
   ============================================ */

function initializeTypingEffect() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    
    const config = portfolioConfig?.personal || {};
    const texts = [
        config.title || 'Full Stack Developer',
        'Creative Problem Solver',
        'Tech Enthusiast',
        'UI/UX Lover'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe skill items for progress bar animation
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });
}

/* ============================================
   SKILLS SECTION
   ============================================ */

function initializeSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer || !portfolioConfig?.skills) return;
    
    const skills = portfolioConfig.skills;
    const icons = {
        'Frontend': 'fa-laptop-code',
        'Backend': 'fa-server',
        'Database & Cloud': 'fa-database',
        'Tools & Others': 'fa-tools'
    };
    
    skillsContainer.innerHTML = skills.map((category, index) => `
        <div class="skill-category" data-aos="fade-up" data-aos-delay="${index * 100}">
            <h3 class="skill-category-title">
                <span class="skill-category-icon">
                    <i class="fas ${icons[category.category] || 'fa-code'}"></i>
                </span>
                ${category.category}
            </h3>
            <div class="skill-list">
                ${category.items.map(skill => `
                    <div class="skill-item">
                        <div class="skill-name">
                            <span>${skill.name}</span>
                            <span class="skill-level">${skill.level}%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="--skill-width: ${skill.level}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

/* ============================================
   PROJECTS SECTION
   ============================================ */

function initializeProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid || !portfolioConfig?.projects) return;
    
    let visibleProjects = 6;
    const allProjects = portfolioConfig.projects;
    
    function renderProjects(projects = allProjects.slice(0, visibleProjects)) {
        projectsGrid.innerHTML = projects.map((project, index) => `
            <div class="project-card" data-category="${project.featured ? 'featured' : 'web'}" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x300/6366f1/ffffff?text=${encodeURIComponent(project.title)}'">
                    <div class="project-overlay">
                        <a href="${project.demoLink}" class="project-link" target="_blank" rel="noopener" aria-label="View demo">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.githubLink}" class="project-link" target="_blank" rel="noopener" aria-label="View code">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    renderProjects();
    
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            const filteredProjects = filter === 'all' 
                ? allProjects.slice(0, visibleProjects)
                : allProjects.filter(p => filter === 'featured' ? p.featured : true).slice(0, visibleProjects);
            
            renderProjects(filteredProjects);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    loadMoreBtn?.addEventListener('click', () => {
        visibleProjects += 3;
        if (visibleProjects >= allProjects.length) {
            loadMoreBtn.style.display = 'none';
        }
        renderProjects();
        AOS.refresh();
    });
}

/* ============================================
   EXPERIENCE SECTION
   ============================================ */

function initializeExperience() {
    if (!portfolioConfig?.experience && !portfolioConfig?.education) return;
    
    // Work Experience
    const workTimeline = document.getElementById('work-timeline');
    if (workTimeline && portfolioConfig.experience) {
        workTimeline.innerHTML = portfolioConfig.experience.map((exp, index) => `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <img src="${exp.logo}" alt="${exp.company}" class="company-logo" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(exp.company)}&size=50&background=6366f1&color=fff'">
                        <div class="timeline-title">
                            <h3>${exp.position}</h3>
                            <p>${exp.company}</p>
                        </div>
                    </div>
                    <div class="timeline-meta">
                        <span><i class="fas fa-calendar"></i> ${exp.duration}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
                    </div>
                    <ul class="timeline-description">
                        ${exp.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }
    
    // Education
    const educationTimeline = document.getElementById('education-timeline');
    if (educationTimeline && portfolioConfig.education) {
        educationTimeline.innerHTML = portfolioConfig.education.map((edu, index) => `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-title">
                        <h3>${edu.degree}</h3>
                        <p>${edu.institution}</p>
                    </div>
                    <div class="timeline-meta">
                        <span><i class="fas fa-calendar"></i> ${edu.duration}</span>
                    </div>
                    <p class="timeline-description">${edu.description}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${targetTab}-content`).classList.add('active');
            
            AOS.refresh();
        });
    });
}

/* ============================================
   TESTIMONIALS SECTION
   ============================================ */

function initializeTestimonials() {
    const slider = document.getElementById('testimonials-slider');
    if (!slider || !portfolioConfig?.testimonials) return;
    
    const testimonials = portfolioConfig.testimonials;
    let currentIndex = 0;
    
    slider.innerHTML = testimonials.map((testimonial, index) => `
        <div class="testimonial-card ${index === 0 ? 'active' : ''}">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=100&background=6366f1&color=fff'">
            <p class="testimonial-text">${testimonial.text}</p>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <p class="testimonial-position">${testimonial.position}</p>
        </div>
    `).join('');
    
    const cards = slider.querySelectorAll('.testimonial-card');
    
    function showTestimonial(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }
    
    document.getElementById('prev-testimonial')?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    document.getElementById('next-testimonial')?.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 5000);
}

/* ============================================
   CONTACT FORM
   ============================================ */

function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Check if EmailJS is configured
            if (portfolioConfig?.contact?.emailjsServiceId && typeof emailjs !== 'undefined') {
                await emailjs.send(
                    portfolioConfig.contact.emailjsServiceId,
                    portfolioConfig.contact.emailjsTemplateId,
                    data,
                    portfolioConfig.contact.emailjsPublicKey
                );
                
                showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
                form.reset();
            } else {
                // Fallback - just show success message
                showFormStatus('success', 'Thank you for your message! I\'ll get back to you soon.');
                form.reset();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus('error', 'Oops! Something went wrong. Please try again or email me directly.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
    
    function showFormStatus(type, message) {
        formStatus.className = `form-status ${type}`;
        formStatus.textContent = message;
        
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 5000);
    }
}

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */

function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ============================================
   ANIMATED STATS COUNTER
   ============================================ */

function initializeStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Initialize EmailJS if configured
if (portfolioConfig?.contact?.emailjsPublicKey && typeof emailjs !== 'undefined') {
    emailjs.init(portfolioConfig.contact.emailjsPublicKey);
}

console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ and modern web technologies', 'color: #8b5cf6; font-size: 12px;');
