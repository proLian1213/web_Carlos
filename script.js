document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const quienesSomosBtn = document.getElementById('quienesSomosBtn');
    const infoContent = document.getElementById('infoContent');

    // Funciones para abrir y cerrar el menú
    const openMenu = () => {
        menuOverlay.classList.add('active');
        hamburgerBtn.style.opacity = '0';
        hamburgerBtn.style.visibility = 'hidden';
    };

    const closeMenu = () => {
        menuOverlay.classList.remove('active');
        hamburgerBtn.style.opacity = '1';
        hamburgerBtn.style.visibility = 'visible';
    };

    // Event Listeners
    hamburgerBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Cerrar menú si se hace clic fuera del panel (en el overlay oscuro)
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            closeMenu();
        }
    });

    // Toggle de la sección Quiénes somos
    quienesSomosBtn.addEventListener('click', () => {
        infoContent.classList.toggle('active');
    });

    // Botón A qué nos dedicamos
    const aQueNosDedicamosBtn = document.getElementById('aQueNosDedicamosBtn');
    const serviciosSection = document.getElementById('servicios');
    
    if (aQueNosDedicamosBtn && serviciosSection) {
        aQueNosDedicamosBtn.addEventListener('click', () => {
            closeMenu();
            serviciosSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botón Por qué elegirnos
    const porQueElegirnosBtn = document.getElementById('porQueElegirnosBtn');
    const porQueElegirnosSection = document.getElementById('por-que-elegirnos');

    if (porQueElegirnosBtn && porQueElegirnosSection) {
        porQueElegirnosBtn.addEventListener('click', () => {
            closeMenu();
            porQueElegirnosSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botón Nuestros sectores
    const nuestrosSectoresBtn = document.getElementById('nuestrosSectoresBtn');
    const sectoresSection = document.getElementById('sectores');

    if (nuestrosSectoresBtn && sectoresSection) {
        nuestrosSectoresBtn.addEventListener('click', () => {
            closeMenu();
            sectoresSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botón Nuestros trabajos
    const nuestrosTrabajosBtn = document.getElementById('nuestrosTrabajosBtn');
    const trabajosRealizadosSection = document.getElementById('trabajos-realizados');

    if (nuestrosTrabajosBtn && trabajosRealizadosSection) {
        nuestrosTrabajosBtn.addEventListener('click', () => {
            closeMenu();
            trabajosRealizadosSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botón Blog de trabajos realizados
    const blogTrabajosBtn = document.getElementById('blogTrabajosBtn');
    const blogTrabajosSection = document.getElementById('blog-trabajos');

    if (blogTrabajosBtn && blogTrabajosSection) {
        blogTrabajosBtn.addEventListener('click', () => {
            closeMenu();
            blogTrabajosSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Botón Contacto
    const contactoBtn = document.getElementById('contactoBtn');
    const contactoSection = document.getElementById('contacto');

    if (contactoBtn && contactoSection) {
        contactoBtn.addEventListener('click', () => {
            closeMenu();
            contactoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Intersection Observer para Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Quita la clase para que se vuelva a animar al hacer scroll de nuevo
            }
        });
    }, {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Efecto de máquina de escribir (Typewriter)
    const textToType = "Impresión en gran formato · Diseño · Rotulación";
    const typewriterElement = document.getElementById('typewriter');
    let isDeleting = false;
    let charIndex = 0;
    
    if (typewriterElement) {
        function typeWriter() {
            const currentSpeed = isDeleting ? 30 : 70; // Velocidad de escritura vs borrado
            
            if (!isDeleting && charIndex <= textToType.length) {
                // Escribiendo
                typewriterElement.textContent = textToType.substring(0, charIndex);
                charIndex++;
                if (charIndex > textToType.length) {
                    // Terminó de escribir, esperar 5 segundos (estado estático)
                    isDeleting = true;
                    setTimeout(typeWriter, 5000);
                    return;
                }
            } else if (isDeleting && charIndex >= 0) {
                // Borrando
                typewriterElement.textContent = textToType.substring(0, charIndex);
                charIndex--;
                if (charIndex < 0) {
                    // Terminó de borrar, esperar medio segundo y volver a empezar
                    isDeleting = false;
                    setTimeout(typeWriter, 500);
                    return;
                }
            }
            setTimeout(typeWriter, currentSpeed);
        }
        
        // Iniciar el efecto después de un pequeño retraso
        setTimeout(typeWriter, 1000);
    }
});
