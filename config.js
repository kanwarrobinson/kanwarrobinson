// ============================================
// PORTFOLIO CONFIGURATION
// Edit this file to customize your portfolio
// ============================================

const portfolioConfig = {
    // Personal Information
    personal: {
        name: "Kanwar Robinson",
        title: "Software Development Engineer - II",
        tagline: "Building intelligent, production-ready AI systems that scale",
        email: "kanwarrobinson.salethraja@gmail.com",
        phone: "+91 63820 79802",
        location: "Coimbatore, India",
        
        // About Section Image (separate from profile)
        aboutImage: "assets/about.jpg",
        
        // Bio
        bio: "AI-Focused Software Engineer with 2+ years of experience delivering LLM-driven applications and cloud-native microservices. Specialized in FastAPI, LangChain, and LangGraph, with a strong focus on multi-agent orchestration, chatbot architectures, and scalable backend systems. Architected an AI assistant that reduced FastAPI response latency by 40% and deflected 35% of support tickets.",
        
        // Resume Download Link
        resumeLink: "assets/resume.pdf"
    },

    // Social Media Links
    social: {
        github: "https://github.com/kanwarrobinson",
        linkedin: "https://in.linkedin.com/in/kanwar-robinson",
        twitter: "https://twitter.com/kanwar_robinson",
        medium: "https://in.linkedin.com/in/kanwar-robinson",
        dev: "https://in.linkedin.com/in/kanwar-robinson"
    },

    // Skills - Add or remove as needed
    skills: [
        {
            category: "Backend Development",
            color: "#3b82f6", // Blue
            items: [
                { name: "Python", displayName: "Python 3.11", level: 95, icon: "fab fa-python" },
                { name: "FastAPI", displayName: "FastAPI", level: 92, icon: "fas fa-bolt" },
                { name: "Java", displayName: "Java 17", level: 85, icon: "fab fa-java" },
                { name: "Spring Boot", displayName: "Spring Boot 3", level: 85, icon: "fas fa-leaf" },
                { name: "REST APIs", displayName: "REST APIs", level: 90, icon: "fas fa-network-wired" },
                { name: "Microservices", displayName: "Microservices", level: 88, icon: "fas fa-cubes" }
            ]
        },
        {
            category: "AI/ML & LLM",
            color: "#8b5cf6", // Purple
            items: [
                { name: "LangChain", displayName: "LangChain", level: 92, icon: "fas fa-link" },
                { name: "LangGraph", displayName: "LangGraph", level: 90, icon: "fas fa-project-diagram" },
                { name: "RAG", displayName: "RAG", level: 88, icon: "fas fa-brain" },
                { name: "OpenAI", displayName: "OpenAI APIs", level: 85, icon: "fas fa-robot" },
                { name: "Vector Stores", displayName: "Vector Stores", level: 87, icon: "fas fa-database" },
                { name: "Multi-Agent", displayName: "Multi-Agent AI", level: 90, icon: "fas fa-users-cog" }
            ]
        },
        {
            category: "DevOps & Cloud",
            color: "#10b981", // Green
            items: [
                { name: "Kubernetes", displayName: "Kubernetes", level: 88, icon: "fas fa-dharmachakra" },
                { name: "Docker", displayName: "Docker", level: 92, icon: "fab fa-docker" },
                { name: "Helm", displayName: "Helm", level: 85, icon: "fas fa-ship" },
                { name: "Jenkins", displayName: "Jenkins", level: 82, icon: "fab fa-jenkins" },
                { name: "GitHub Actions", displayName: "GitHub Actions", level: 85, icon: "fab fa-github" },
                { name: "GKE", displayName: "GKE", level: 80, icon: "fab fa-google" }
            ]
        },
        {
            category: "Data & Messaging",
            color: "#f59e0b", // Orange
            items: [
                { name: "MongoDB", displayName: "MongoDB", level: 90, icon: "fas fa-database" },
                { name: "Redis", displayName: "Redis Stack", level: 92, icon: "fas fa-server" },
                { name: "Kafka", displayName: "Apache Kafka", level: 85, icon: "fas fa-stream" },
                { name: "Zookeeper", displayName: "Zookeeper", level: 80, icon: "fas fa-sitemap" },
                { name: "OpenTelemetry", displayName: "OpenTelemetry", level: 82, icon: "fas fa-chart-line" },
                { name: "Prometheus", displayName: "Prometheus", level: 78, icon: "fas fa-fire" }
            ]
        }
    ],

    // Projects - Add your amazing projects here
    projects: [
        {
            title: "Agentic AI Assistant",
            category: "AI/LLM",
            description: "Developed a multi-agent chatbot architecture using Agentic AI design patterns with LangGraph and RAG, enabling dynamic tool use, memory chaining, and goal-driven execution. Built on FastAPI and containerized with Docker, deployed on Kubernetes (GKE) using Helm with OpenTelemetry tracing and Prometheus/Grafana for real-time observability.",
            image: "assets/project1.svg",
            tags: ["LangGraph", "FastAPI", "RAG", "Kubernetes", "Docker", "OpenTelemetry"],
            demoLink: "#",
            githubLink: "https://github.com/kanwar-robinson/agentic-ai-assistant",
            featured: true
        },
        {
            title: "Customer Support Chatbot",
            category: "AI/LLM",
            description: "Built an AI-powered customer support chatbot from scratch serving as both Onboarding Agent and Documentation Assistant. Leveraged LangChain and LangGraph for multi-agent framework with Redis-Stack for conversational memory and OpenAI LLMs. Reduced API response latency by 40% and deflected 35% of support tickets.",
            image: "assets/project2.svg",
            tags: ["LangChain", "LangGraph", "Redis", "OpenAI", "FastAPI", "Python"],
            demoLink: "#",
            githubLink: "https://github.com/kanwar-robinson/support-chatbot",
            featured: true
        },
        {
            title: "Checkpoint Service with LangGraph",
            category: "AI/LLM",
            description: "Developed a Checkpoint Service leveraging LangGraph and Redis to store and retrieve conversational memory and user context with millisecond-level response times, enhancing the chatbot's personalization and user experience.",
            image: "assets/project3.svg",
            tags: ["LangGraph", "Redis", "FastAPI", "Python", "Kubernetes"],
            demoLink: "#",
            githubLink: "https://github.com/kanwar-robinson/checkpoint-service",
            featured: true
        },
        {
            title: "MongoDB Real-Time Data Streaming",
            category: "Data",
            description: "Designed and implemented a live data streaming solution for transferring millions of documents between MongoDB clusters using Apache Kafka with ZooKeeper, ensuring high availability and zero data loss.",
            image: "assets/project4.svg",
            tags: ["Apache Kafka", "MongoDB", "Zookeeper", "Python", "Microservices"],
            demoLink: "#",
            githubLink: "https://github.com/kanwar-robinson/data-streaming",
            featured: false
        },
        {
            title: "Redis Vector Store Migration Framework",
            category: "Data",
            description: "Contributed to the development of a migration framework for Redis Vector Store, enabling seamless transfer of vector embeddings across AppViewX versions to maintain consistency and backward compatibility during feature rollouts.",
            image: "assets/project5.svg",
            tags: ["Redis", "Vector Store", "Python", "Migration", "FastAPI"],
            demoLink: "#",
            githubLink: "https://github.com/kanwar-robinson/vector-migration",
            featured: false
        },
        {
            title: "Robotic Arm Motion Planning",
            category: "Robotics",
            description: "Developed a motion planning and path tracing system for a robotic arm using MATLAB and RoboAnalyzer, enabling precise trajectory generation and optimization. Focused on simulating and analyzing kinematics to enhance robotic movement efficiency.",
            image: "assets/project6.svg",
            tags: ["MATLAB", "RoboAnalyzer", "Kinematics", "Simulation", "Path Planning"],
            demoLink: "#",
            githubLink: "https://github.com/kanwar-robinson/robotic-arm",
            featured: false
        }
    ],

    // Work Experience
    experience: [
        {
            company: "AppViewX, Inc.",
            position: "Software Development Engineer - II",
            duration: "Aug 2023 - Present",
            location: "Coimbatore, India",
            description: [
                "Developed a customer support chatbot from scratch using LangChain and LangGraph for multi-agent framework with Redis-Stack for conversational memory",
                "Architected an AI assistant that reduced FastAPI response latency by 40% and deflected 35% of support tickets",
                "Built a Checkpoint Service with millisecond-level response times for conversational memory and user context storage",
                "Optimized AppViewX search inventory to manage 20 million records with millisecond response times using MongoDB",
                "Delivered RBAC feature for out-of-the-box solutions, managing multi-project code changes under tight deadlines",
                "Contributed to Redis Vector Store migration framework for seamless embedding transfers across versions"
            ],
            logo: "assets/appviewx.png"
        },
        {
            company: "AppViewX, Inc.",
            position: "Research & Development Intern",
            duration: "Jan 2023 - Jul 2023",
            location: "Coimbatore, India",
            description: [
                "Developed Expiry Alerts feature for CERT+ product to notify users of SSL certificate expirations using Java Spring Framework",
                "Designed and implemented live data streaming solution for transferring millions of documents between MongoDB clusters",
                "Utilized Apache Kafka with ZooKeeper ensuring high availability and zero data loss",
                "Built visual workflows in Python to enhance product functionality"
            ],
            logo: "assets/appviewx.png"
        },
        {
            company: "Talakunchi Networks",
            position: "Cybersecurity & Ethical Hacking Intern",
            duration: "Jul 2020 - Aug 2020",
            location: "Mumbai, India",
            description: [
                "Identified common web vulnerabilities based on OWASP Top 10 including SQL injection and XSS",
                "Built Python scripts to analyze server logs and highlight unusual activity",
                "Reduced open vulnerabilities by 60% through systematic security analysis",
                "Conducted penetration tests with Nmap, Burp Suite, and Metasploit",
                "Produced prioritized remediation report that eliminated three critical vulnerabilities"
            ],
            logo: "assets/talakunchi.png"
        }
    ],

    // Education
    education: [
        {
            degree: "Bachelor of Engineering in Mechanical Engineering",
            institution: "Coimbatore Institute of Technology, Coimbatore",
            duration: "Jul 2019 - May 2023",
            description: "GPA: 8.57/10. Specialized in manufacturing processes, materials science, and automation systems."
        }
    ],

    // Testimonials & Awards
    testimonials: [
        {
            name: "AppViewX Recognition",
            position: "Circle of Excellence 2024",
            image: "assets/appviewx-logo.svg",
            text: "Awarded the Circle of Excellence 2024 for tackling key challenges in CERT+, including expiry alerts, onboarding streamlining, UI enhancements, infrastructure scaling, and driving product-led growth."
        },
        {
            name: "AppViewX Recognition",
            position: "Engineer of the Month - Dec 2024",
            image: "assets/appviewx-logo.svg",
            text: "Awarded Engineer of the Month for implementing Redis Stack Server to enhance robust conversational memory and maintain state in the LLM engine, significantly improving chatbot performance."
        },
        {
            name: "AppViewX Recognition",
            position: "Spot Award - Nov 2023",
            image: "assets/appviewx-logo.svg",
            text: "Recognized with a Spot Award for efficiently implementing automated Expiry Alert workflows across Jira, Slack, ServiceNow, and CERT+ OOB roles, enhancing workflow automation and operational efficiency."
        }
    ],
    // Contact Form - EmailJS Configuration (optional)
    // Sign up at https://www.emailjs.com/ for free email service
    contact: {
        emailjsServiceId: "YOUR_SERVICE_ID",
        emailjsTemplateId: "YOUR_TEMPLATE_ID",
        emailjsPublicKey: "YOUR_PUBLIC_KEY"
    },

    // Theme Colors - Customize your color scheme
    theme: {
        primaryColor: "#6366f1",      // Indigo
        secondaryColor: "#8b5cf6",    // Purple
        accentColor: "#ec4899",       // Pink
        darkBg: "#0f172a",            // Dark blue-gray
        lightBg: "#ffffff"            // White
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioConfig;
}
