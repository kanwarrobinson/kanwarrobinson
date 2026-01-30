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
    initializeSkillsGrid();
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
        setImage('#about-image', config.personal.aboutImage || config.personal.profileImage);
        
        // Resume Link
        setLink('#resume-download', config.personal.resumeLink);
        
        // Terminal/Code Window
        if (config.personal.terminal) {
            renderTerminalCode(config.personal.terminal);
        }
        
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

function renderTerminalCode(terminal) {
    const filenameElement = document.getElementById('terminal-filename');
    const codeElement = document.getElementById('terminal-code');
    
    if (filenameElement && terminal.filename) {
        filenameElement.textContent = terminal.filename;
    }
    
    if (codeElement && terminal.code && Array.isArray(terminal.code)) {
        // Clear existing content
        codeElement.innerHTML = '';
        
        // Process each line of code
        terminal.code.forEach((line, index) => {
            const lineFragment = document.createDocumentFragment();
            let i = 0;
            
            while (i < line.length) {
                // Check for comment
                if (line.substring(i, i + 2) === '//') {
                    const span = document.createElement('span');
                    span.className = 'code-comment';
                    span.textContent = line.substring(i);
                    lineFragment.appendChild(span);
                    i = line.length;
                }
                // Check for string
                else if (line[i] === "'") {
                    let j = i + 1;
                    while (j < line.length && line[j] !== "'") j++;
                    const span = document.createElement('span');
                    span.className = 'code-string';
                    span.textContent = line.substring(i, j + 1);
                    lineFragment.appendChild(span);
                    i = j + 1;
                }
                // Check for keyword
                else if (/\b(const|let|var)\b/.test(line.substring(i))) {
                    const match = line.substring(i).match(/^(const|let|var)\b/);
                    if (match) {
                        const span = document.createElement('span');
                        span.className = 'code-keyword';
                        span.textContent = match[1];
                        lineFragment.appendChild(span);
                        i += match[1].length;
                    } else {
                        lineFragment.appendChild(document.createTextNode(line[i]));
                        i++;
                    }
                }
                // Check for property (word followed by colon)
                else if (/^\w+\s*:/.test(line.substring(i))) {
                    const match = line.substring(i).match(/^(\w+)(\s*):/);
                    if (match) {
                        const propSpan = document.createElement('span');
                        propSpan.className = 'code-property';
                        propSpan.textContent = match[1];
                        lineFragment.appendChild(propSpan);
                        if (match[2]) lineFragment.appendChild(document.createTextNode(match[2]));
                        lineFragment.appendChild(document.createTextNode(':'));
                        i += match[0].length;
                    } else {
                        lineFragment.appendChild(document.createTextNode(line[i]));
                        i++;
                    }
                }
                // Check for bracket
                else if (/[{}\[\]()]/.test(line[i])) {
                    const span = document.createElement('span');
                    span.className = 'code-bracket';
                    span.textContent = line[i];
                    lineFragment.appendChild(span);
                    i++;
                }
                // Regular character
                else {
                    lineFragment.appendChild(document.createTextNode(line[i]));
                    i++;
                }
            }
            
            codeElement.appendChild(lineFragment);
            
            // Add line break except for last line
            if (index < terminal.code.length - 1) {
                codeElement.appendChild(document.createElement('br'));
            }
        });
    }
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
    
    const config = portfolioConfig?.personal?.typingAnimation || {};
    const texts = config.texts || [
        portfolioConfig?.personal?.title || 'Full Stack Developer',
        'Creative Problem Solver',
        'Tech Enthusiast'
    ];
    
    const typeSpeed = config.typeSpeed || 150;
    const deleteSpeed = config.deleteSpeed || 50;
    const pauseAfterType = config.pauseAfterType || 2000;
    const pauseBeforeDelete = config.pauseBeforeDelete || 500;
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentSpeed = typeSpeed;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            currentSpeed = deleteSpeed;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            currentSpeed = typeSpeed;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            currentSpeed = pauseAfterType;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            currentSpeed = pauseBeforeDelete;
        }
        
        setTimeout(type, currentSpeed);
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
    const track = document.getElementById('projects-track');
    const filterContainer = document.getElementById('projects-filter');
    const prevBtn = document.getElementById('projects-prev');
    const nextBtn = document.getElementById('projects-next');
    if (!track || !filterContainer || !portfolioConfig?.projects) return;

    const allProjects = portfolioConfig.projects;
    const categories = Array.from(new Set(allProjects.map(project => project.category).filter(Boolean)));
    let activeFilter = 'all';
    let currentIndex = 0;
    let autoTimer;

    function getVisibleCount() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }

    function buildFilters() {
        const buttons = [
            { label: 'All Projects', value: 'all' }
        ];
        
        // Only add Featured filter if there are featured projects
        if (allProjects.some(project => project.featured)) {
            buttons.push({ label: 'Featured', value: 'featured' });
        }
        
        // Add category filters
        buttons.push(...categories.map(category => ({ label: category, value: category })));

        filterContainer.innerHTML = buttons.map((btn, index) => `
            <button class="filter-btn ${btn.value === 'all' ? 'active' : ''}" data-filter="${btn.value}" data-aos="fade-up" data-aos-delay="${index * 50}">
                ${btn.label}
            </button>
        `).join('');
    }

    function getFilteredProjects() {
        if (activeFilter === 'all') return allProjects;
        if (activeFilter === 'featured') return allProjects.filter(project => project.featured);
        return allProjects.filter(project => project.category === activeFilter);
    }

    function renderProjects() {
        const projects = getFilteredProjects();
        track.innerHTML = projects.map((project, index) => `
            <div class="project-card" data-category="${project.category || ''}" data-aos="fade-up" data-aos-delay="${(index % 4) * 80}">
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

        currentIndex = 0;
        updateCarousel();
        AOS.refresh();
    }

    function updateCarousel() {
        const cards = track.querySelectorAll('.project-card');
        if (!cards.length) return;

        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, cards.length - visibleCount);
        currentIndex = Math.min(currentIndex, maxIndex);

        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const offset = (cardWidth + gap) * currentIndex;
        track.style.transform = `translateX(-${offset}px)`;

        if (prevBtn && nextBtn) {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
        }
    }

    function nextSlide() {
        const cards = track.querySelectorAll('.project-card');
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, cards.length - visibleCount);
        currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
        updateCarousel();
    }

    function prevSlide() {
        const cards = track.querySelectorAll('.project-card');
        const visibleCount = getVisibleCount();
        const maxIndex = Math.max(0, cards.length - visibleCount);
        currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
        updateCarousel();
    }

    function startAutoScroll() {
        stopAutoScroll();
        autoTimer = setInterval(nextSlide, 3500);
    }

    function stopAutoScroll() {
        if (autoTimer) clearInterval(autoTimer);
    }

    buildFilters();
    renderProjects();
    startAutoScroll();

    filterContainer.addEventListener('click', (event) => {
        const button = event.target.closest('.filter-btn');
        if (!button) return;
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        activeFilter = button.dataset.filter;
        renderProjects();
        startAutoScroll();
    });

    prevBtn?.addEventListener('click', () => {
        prevSlide();
        startAutoScroll();
    });

    nextBtn?.addEventListener('click', () => {
        nextSlide();
        startAutoScroll();
    });

    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);

    window.addEventListener('resize', () => {
        updateCarousel();
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
    
    // Set form action from config
    const formspreeEndpoint = portfolioConfig?.contact?.formspreeEndpoint;
    if (formspreeEndpoint) {
        form.action = formspreeEndpoint;
    }
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Submit form to Formspree
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                showFormStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
                form.reset();
            } else {
                showFormStatus('error', 'Oops! Something went wrong. Please try again or email me directly.');
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

/* ============================================
   SKILLS GRID ANIMATION
   ============================================ */

function initializeSkillsGrid() {
    const container = document.getElementById('skills-category-grid');
    if (!container || !portfolioConfig?.skills) return;

    const skills = portfolioConfig.skills;
    
    skills.forEach((category, catIndex) => {
        // Create category card
        const categoryCard = document.createElement('div');
        categoryCard.className = 'skill-category-card';
        categoryCard.setAttribute('data-aos', 'fade-up');
        categoryCard.setAttribute('data-aos-delay', catIndex * 100);
        
        // Add category title
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'skill-category-title';
        categoryTitle.textContent = category.category;
        categoryCard.appendChild(categoryTitle);
        
        // Create icon grid
        const iconGrid = document.createElement('div');
        iconGrid.className = 'skill-icon-grid';
        
        // Add skill icons
        category.items.forEach((skill, skillIndex) => {
            const iconSpan = document.createElement('span');
            iconSpan.className = 'skill-icon';
            iconSpan.setAttribute('data-label', skill.displayName || skill.name);
            
            // Use image if icon path is provided, otherwise fallback to font icon
            if (skill.icon && (skill.icon.endsWith('.svg') || skill.icon.endsWith('.png') || skill.icon.endsWith('.jpg'))) {
                const img = document.createElement('img');
                img.src = skill.icon;
                img.alt = skill.name;
                img.className = 'skill-icon-img';
                img.onerror = function() {
                    // Fallback to generic icon if image fails to load
                    this.style.display = 'none';
                    const fallbackIcon = document.createElement('i');
                    fallbackIcon.className = 'fas fa-code';
                    iconSpan.appendChild(fallbackIcon);
                };
                iconSpan.appendChild(img);
            } else {
                // Use font awesome icon
                const icon = document.createElement('i');
                icon.className = skill.icon || 'fas fa-code';
                iconSpan.appendChild(icon);
            }
            
            iconGrid.appendChild(iconSpan);
        });
        
        categoryCard.appendChild(iconGrid);
        container.appendChild(categoryCard);
    });
}

// Initialize EmailJS if configured
if (portfolioConfig?.contact?.emailjsPublicKey && typeof emailjs !== 'undefined') {
    emailjs.init(portfolioConfig.contact.emailjsPublicKey);
}

console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ and modern web technologies', 'color: #8b5cf6; font-size: 12px;');
