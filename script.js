document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    
    // Language Toggle
    const languageToggle = document.getElementById('language-toggle');
    console.log('Language Toggle:', languageToggle);
    
    let isEnglish = false;

    // Inicializar el texto del botón
    const updateButtonText = () => {
        const langText = document.querySelector('.lang-text');
        if (langText) {
            langText.textContent = isEnglish ? 'EN' : 'ES';
            console.log('Button text updated to:', langText.textContent);
        }
    };

    // Establecer el texto inicial
    updateButtonText();

    const translations = {
        es: {
            about: "Sobre Mí",
            skills: "Habilidades",
            certifications: "Certificaciones",
            labs: "Laboratorios",
            contact: "Contacto",
            subtitle: "Profesional Junior de Ciberseguridad | Certificado eJPTv2",
            viewLabs: "Ver Mis Laboratorios",
            contactMe: "Contactar",
            scroll: "Desplazar",
            aboutMe: "// Sobre Mí",
            hello: "¡Hola! Soy",
            aboutText1: "Soy un <span class=\"highlight\">Profesional Junior de Ciberseguridad</span> apasionado y comprometido con la protección de sistemas y datos en el mundo digital.",
            aboutText2: "Mi curiosidad por entender cómo funcionan las cosas y cómo protegerlas me llevó a obtener la certificación <span class=\"highlight\">eJPTv2</span> y a practicar en laboratorios prácticos.",
            aboutText3: "Estoy ansioso por contribuir a un equipo dinámico, aprender de profesionales experimentados y enfrentar desafíos reales de ciberseguridad. <strong>¡Conectemos!</strong>",
            coreSkills: "// Habilidades Principales",
            networking: "Redes",
            securityConcepts: "Conceptos de Seguridad",
            operatingSystems: "Sistemas Operativos",
            tools: "Herramientas",
            scripting: "Programación",
            methodologies: "Metodologías",
            networkingDesc: "TCP/IP, Modelo OSI, DNS, DHCP, Firewalls, VPNs",
            securityConceptsDesc: "Evaluación de Vulnerabilidades, Pruebas de Penetración, Respuesta a Incidentes, Modelado de Amenazas",
            operatingSystemsDesc: "Linux (Kali, Ubuntu), Windows",
            toolsDesc: "Nmap, Metasploit, Wireshark, Burp Suite, Nessus",
            scriptingDesc: "Python Básico, Bash",
            methodologiesDesc: "PTES, OWASP Top 10",
            certificationsTitle: "// Certificaciones",
            issuingOrg: "Organización Emisora",
            dateAcquired: "Fecha de Obtención",
            certDescription: "Una certificación completa y práctica que cubre metodologías y herramientas de pruebas de penetración. Valida habilidades prácticas en pruebas de penetración de redes y aplicaciones web.",
            labExperience: "// Experiencia en Laboratorios",
            labIntro: "Me involucro activamente en el aprendizaje práctico a través de varias plataformas para perfeccionar mis habilidades de ciberseguridad. Estas son algunas de las plataformas que utilizo:",
            thmTitle: "TryHackMe",
            thmDesc: "Completé numerosas salas y rutas de aprendizaje enfocadas en varios dominios de ciberseguridad, incluyendo explotación web, seguridad de redes y escalada de privilegios.",
            thmAreas: "Áreas Clave",
            thmSkills: "Fundamentos Web, Explotación de Redes, Escalada de Privilegios en Linux y Windows, Conceptos Básicos de Ingeniería Inversa.",
            htbTitle: "Hack The Box",
            htbDesc: "Regularmente resuelvo máquinas y desafíos, mejorando mis habilidades en enumeración, explotación y técnicas post-explotación en diversos entornos.",
            htbAreas: "Áreas Clave",
            htbSkills: "Active Directory, Ataques a Aplicaciones Web, Explotación de Sistemas, Desafíos de Criptografía.",
            viewTHM: "Ver Mi Perfil THM",
            viewHTB: "Ver Mi Perfil HTB",
            labOutro: "Estas plataformas proporcionan una experiencia invaluable en la simulación de escenarios del mundo real y mantenerse al día con las amenazas y vulnerabilidades emergentes.",
            getInTouch: "// Contacto",
            rights: "Todos los derechos reservados",
            designed: "Diseñado con"
        },
        en: {
            about: "About",
            skills: "Skills",
            certifications: "Certifications",
            labs: "Labs",
            contact: "Contact",
            subtitle: "Junior Cybersecurity Professional | eJPTv2 Certified",
            viewLabs: "View My Labs",
            contactMe: "Get In Touch",
            scroll: "Scroll",
            aboutMe: "// About Me",
            hello: "Hello! I'm",
            aboutText1: "I'm an <span class=\"highlight\">IT Technician</span> specialized in technical support and systems administration, with a current focus on the field of <span class=\"highlight\">Cybersecurity</span>.",
            aboutText2: "My experience includes participation in system migration projects, Docker container implementation, and more recently, work with SIEM tools, digital forensics, and ethical hacking techniques. Additionally, I have obtained the <span class=\"highlight\">eJPTv2</span> certification that validates my knowledge in offensive security.",
            aboutText3: "My passion for technology drives me to seek opportunities where I can continue my professional development, contribute with my skills, and face new challenges in the cybersecurity field. <strong>I'm open to new connections and opportunities!</strong>",
            coreSkills: "// Core Skills",
            networking: "Networking",
            securityConcepts: "Security Concepts",
            operatingSystems: "Operating Systems",
            tools: "Tools",
            scripting: "Scripting",
            methodologies: "Methodologies",
            networkingDesc: "TCP/IP, OSI Model, DNS, DHCP, Firewalls, VPNs",
            securityConceptsDesc: "Vulnerability Assessment, Penetration Testing, Incident Response, Threat Modeling",
            operatingSystemsDesc: "Linux (Kali, Ubuntu), Windows",
            toolsDesc: "Nmap, Metasploit, Wireshark, Burp Suite, Nessus",
            scriptingDesc: "Basic Python, Bash",
            methodologiesDesc: "PTES, OWASP Top 10",
            certificationsTitle: "// Certifications",
            issuingOrg: "Issuing Organization",
            dateAcquired: "Date Acquired",
            certDescription: "A comprehensive, hands-on certification covering penetration testing methodologies and tools. Validates practical skills in network and web application penetration testing.",
            labExperience: "// Lab Experience",
            labIntro: "I actively engage in hands-on learning through various platforms to sharpen my practical cybersecurity skills. Here are some of the platforms I use:",
            thmTitle: "TryHackMe",
            thmDesc: "I've completed numerous rooms and learning paths focused on various cybersecurity domains, including web exploitation, network security, and privilege escalation.",
            thmAreas: "Key Areas",
            thmSkills: "Web Fundamentals, Network Exploitation, Linux and Windows Privilege Escalation, Basic Reverse Engineering Concepts.",
            htbTitle: "Hack The Box",
            htbDesc: "I regularly solve machines and challenges, improving my skills in enumeration, exploitation, and post-exploitation techniques across various environments.",
            htbAreas: "Key Areas",
            htbSkills: "Active Directory, Web Application Attacks, System Exploitation, Cryptography Challenges.",
            viewTHM: "My THM Profile",
            viewHTB: "My HTB Profile",
            labOutro: "These platforms provide invaluable experience in simulating real-world scenarios and keeping up-to-date with emerging threats and vulnerabilities.",
            getInTouch: "// Get In Touch",
            rights: "All Rights Reserved",
            designed: "Designed with"
        }
    };

    function updateLanguage() {
        console.log('Updating language, isEnglish:', isEnglish);
        const lang = isEnglish ? 'en' : 'es';
        const t = translations[lang];

        try {
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-links a');
            console.log('Nav links found:', navLinks.length);
            if (navLinks.length >= 5) {
                navLinks[0].textContent = t.about;
                navLinks[1].textContent = t.skills;
                navLinks[2].textContent = t.certifications;
                navLinks[3].textContent = t.labs;
                navLinks[4].textContent = t.contact;
            }

            // Update hero section
            const subtitle = document.querySelector('.subtitle');
            if (subtitle) subtitle.textContent = t.subtitle;

            const heroCta = document.querySelector('.hero-cta');
            if (heroCta) {
                const primaryBtn = heroCta.querySelector('.btn-primary');
                const secondaryBtn = heroCta.querySelector('.btn-secondary');
                if (primaryBtn) primaryBtn.textContent = t.viewLabs;
                if (secondaryBtn) secondaryBtn.textContent = t.contactMe;
            }

            const scrollIndicator = document.querySelector('.scroll-down-indicator a');
            if (scrollIndicator) scrollIndicator.textContent = t.scroll;

            // Update about section
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const aboutTitle = aboutSection.querySelector('h2');
                if (aboutTitle) aboutTitle.textContent = t.aboutMe;
            }

            const aboutText = document.querySelector('.about-text');
            if (aboutText) {
                const aboutHeading = aboutText.querySelector('h3');
                const aboutParagraphs = aboutText.querySelectorAll('p');
                
                if (aboutHeading) aboutHeading.innerHTML = `${t.hello} <span class="highlight">Miguel Monje</span>`;
                if (aboutParagraphs.length >= 3) {
                    aboutParagraphs[0].innerHTML = t.aboutText1;
                    aboutParagraphs[1].innerHTML = t.aboutText2;
                    aboutParagraphs[2].innerHTML = t.aboutText3;
                }
            }

            // Update skills section
            const skillsSection = document.querySelector('#skills');
            if (skillsSection) {
                const skillsTitle = skillsSection.querySelector('h2');
                if (skillsTitle) skillsTitle.textContent = t.coreSkills;
                
                const skillCards = skillsSection.querySelectorAll('.skill-card');
                if (skillCards.length >= 6) {
                    // Update titles
                    skillCards[0].querySelector('h3').textContent = t.networking;
                    skillCards[1].querySelector('h3').textContent = t.securityConcepts;
                    skillCards[2].querySelector('h3').textContent = t.operatingSystems;
                    skillCards[3].querySelector('h3').textContent = t.tools;
                    skillCards[4].querySelector('h3').textContent = t.scripting;
                    skillCards[5].querySelector('h3').textContent = t.methodologies;
                    
                    // Update descriptions
                    skillCards[0].querySelector('p').textContent = t.networkingDesc;
                    skillCards[1].querySelector('p').textContent = t.securityConceptsDesc;
                    skillCards[2].querySelector('p').textContent = t.operatingSystemsDesc;
                    skillCards[3].querySelector('p').textContent = t.toolsDesc;
                    skillCards[4].querySelector('p').textContent = t.scriptingDesc;
                    skillCards[5].querySelector('p').textContent = t.methodologiesDesc;
                }
            }

            // Update certifications section
            const certSection = document.querySelector('#certifications');
            if (certSection) {
                const certTitle = certSection.querySelector('h2');
                if (certTitle) certTitle.textContent = t.certificationsTitle;
                
                const certCard = certSection.querySelector('.cert-card');
                if (certCard) {
                    const certInfoItems = certCard.querySelectorAll('.cert-info-item');
                    if (certInfoItems.length >= 2) {
                        // Update organization info
                        const orgItem = certInfoItems[0];
                        orgItem.querySelector('strong').textContent = t.issuingOrg;
                        orgItem.querySelector('p').textContent = 'INE Security';

                        // Update date info
                        const dateItem = certInfoItems[1];
                        dateItem.querySelector('strong').textContent = t.dateAcquired;
                        dateItem.querySelector('p').textContent = 'April 2025';
                    }

                    // Update description
                    const description = certCard.querySelector('.cert-description');
                    if (description) {
                        description.textContent = t.certDescription;
                    }
                }
            }

            // Update labs section
            const labsSection = document.querySelector('#labs');
            if (labsSection) {
                const labsTitle = labsSection.querySelector('h2');
                const sectionIntro = labsSection.querySelector('.section-intro');
                const labsOutro = labsSection.querySelector('.labs-outro');
                
                if (labsTitle) labsTitle.textContent = t.labExperience;
                if (sectionIntro) sectionIntro.textContent = t.labIntro;
                if (labsOutro) labsOutro.textContent = t.labOutro;
                
                const labCards = labsSection.querySelectorAll('.lab-platform-card');
                if (labCards.length >= 2) {
                    // TryHackMe card
                    const thmCard = labCards[0];
                    thmCard.querySelector('h3').textContent = t.thmTitle;
                    thmCard.querySelectorAll('p')[0].textContent = t.thmDesc;
                    thmCard.querySelectorAll('p')[1].innerHTML = `<em>${t.thmAreas}:</em> ${t.thmSkills}`;
                    thmCard.querySelector('.btn').textContent = t.viewTHM;

                    // HackTheBox card
                    const htbCard = labCards[1];
                    htbCard.querySelector('h3').textContent = t.htbTitle;
                    htbCard.querySelectorAll('p')[0].textContent = t.htbDesc;
                    htbCard.querySelectorAll('p')[1].innerHTML = `<em>${t.htbAreas}:</em> ${t.htbSkills}`;
                    htbCard.querySelector('.btn').textContent = t.viewHTB;
                }
            }

            // Update contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const contactTitle = contactSection.querySelector('h2');
                if (contactTitle) contactTitle.textContent = t.getInTouch;
            }

            // Update footer
            const footer = document.querySelector('footer');
            if (footer) {
                const footerParagraphs = footer.querySelectorAll('p');
                if (footerParagraphs.length >= 2) {
                    footerParagraphs[0].textContent = `© 2025 Miguel Monje. ${t.rights}.`;
                    footerParagraphs[1].innerHTML = `${t.designed} <i class="fas fa-heart"></i> and <i class="fas fa-code"></i>`;
                }
            }

            // Update language button text
            updateButtonText();

        } catch (error) {
            console.error('Error updating language:', error);
        }
    }

    // Event listener para el botón de idioma
    if (languageToggle) {
        console.log('Adding click listener to language toggle');
        languageToggle.addEventListener('click', () => {
            console.log('Language toggle clicked');
            isEnglish = !isEnglish;
            updateLanguage();
            updateButtonText();
        });
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    // Smooth Scrolling for anchor links & Active Nav Link Highlighting
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"], .hero-cta a[href^="#"], .scroll-down-indicator a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    navAnchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let targetPosition = targetElement.offsetTop - navbarHeight;
                if (targetId === '#hero') {
                    targetPosition = 0;
                }
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active Nav Link Highlighting on Scroll
    function highlightNavLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 50;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navAnchors.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
        if (window.scrollY < sections[0].offsetTop - navbarHeight - 50) {
             const heroLink = document.querySelector('.nav-links a[href="#hero"]');
             if(heroLink) heroLink.classList.add('active');
        }
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();

    // Optional: Simple fade-in animation on scroll
    const animatedElements = document.querySelectorAll('.content-section > .container > *, .skill-card, .lab-platform-card, .cert-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});