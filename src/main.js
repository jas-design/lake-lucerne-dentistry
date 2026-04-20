// Common UI components and interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer if they exist as containers
    injectSharedComponents();

    // Initialize Lucide icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    const mainNav = document.getElementById('main-nav');
    const topBar = document.getElementById('top-bar');
    
    if (header && mainNav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                mainNav.classList.add('py-2', 'shadow-lg');
                mainNav.classList.remove('py-4');
                if (topBar) {
                    topBar.classList.add('h-0', 'opacity-0', 'overflow-hidden');
                    topBar.classList.remove('py-2', 'opacity-100');
                }
            } else {
                mainNav.classList.remove('py-2', 'shadow-lg');
                mainNav.classList.add('py-4');
                if (topBar) {
                    topBar.classList.remove('h-0', 'opacity-0', 'overflow-hidden');
                    topBar.classList.add('py-2', 'opacity-100');
                }
            }
        });
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('translate-x-full');
            }, 10);
        });
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    }

    // FAQ Toggle
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const iconPlus = btn.querySelector('.lucide-plus');
            const iconMinus = btn.querySelector('.lucide-minus');
            
            const isOpen = !content.classList.contains('hidden');
            
            // Close all
            document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
            document.querySelectorAll('.lucide-minus').forEach(m => m?.classList.add('hidden'));
            document.querySelectorAll('.lucide-plus').forEach(p => p?.classList.remove('hidden'));
            
            if (!isOpen) {
                content.classList.remove('hidden');
                iconPlus?.classList.add('hidden');
                iconMinus?.classList.remove('hidden');
            }
        });
    });

    // Gallery Lightbox (Simplified)
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');

    if (galleryItems && lightbox && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightbox.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        if (closeLightbox) {
            closeLightbox.addEventListener('click', () => {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Thank you! Your message has been sent. We will get back to you shortly.');
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Testimonial Carousel
    initTestimonialCarousel();

    // Hero Slider
    initHeroSlider();
});

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides.length < 2) return;

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('opacity-0', 'z-0');
                slide.classList.add('opacity-100', 'z-10');
            } else {
                slide.classList.remove('opacity-100', 'z-10');
                slide.classList.add('opacity-0', 'z-0');
            }
        });

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('bg-primary');
                dot.classList.remove('bg-slate-300');
            } else {
                dot.classList.remove('bg-primary');
                dot.classList.add('bg-slate-300');
            }
        });
        currentSlide = index;
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSlide(i));
    });

    setInterval(() => {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }, 6000);
}

function initTestimonialCarousel() {
    const track = document.getElementById('testimonial-track');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (!track || !dotsContainer) return;

    const slides = Array.from(track.children);
    let currentIndex = 0;

    // Responsive dots: On mobile we want 1 slide per view, on desktop 2
    function getDotsCount() {
        return window.innerWidth >= 768 ? Math.ceil(slides.length / 2) : slides.length;
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        const count = getDotsCount();
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = `dot w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === 0 ? 'bg-primary border-2 border-primary' : 'bg-gray-200'}`;
            dot.addEventListener('click', () => updateCarousel(i));
            dotsContainer.appendChild(dot);
        }
    }

    function updateCarousel(index) {
        currentIndex = index;
        const isDesktop = window.innerWidth >= 768;
        const offset = currentIndex * (isDesktop ? 100 : 100); 
        // Actually on mobile each is 100%, on desktop 100% moves 2 slides (since container is max-w and slides are 50%)
        track.style.transform = `translateX(-${offset}%)`;
        
        // Update dots
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('bg-primary', 'border-primary');
                dot.classList.remove('bg-gray-200');
            } else {
                dot.classList.remove('bg-primary', 'border-primary');
                dot.classList.add('bg-gray-200');
            }
        });
    }

    createDots();
    window.addEventListener('resize', createDots);

    // Auto-slide
    setInterval(() => {
        const count = getDotsCount();
        let nextIndex = (currentIndex + 1) % count;
        updateCarousel(nextIndex);
    }, 5000);
}

function injectSharedComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    const navLinks = [
        { name: 'Home', href: 'index.html' },
        { name: 'About Us', href: 'about.html' },
        { name: 'Services', href: 'services.html' },
        { name: 'Gallery', href: 'gallery.html' },
        { name: 'Contact', href: 'contact.html' },
    ];

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
        <header class="fixed w-full z-50 transition-all duration-500" id="main-header">
            <div id="top-bar" class="bg-accent text-white py-2 hidden lg:block border-b border-white/10 transition-all duration-500">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px] font-medium">
                    <div class="flex items-center space-x-8">
                        <a href="mailto:info@lakelucernedentistry.com" class="flex items-center hover:text-primary transition-all"><i data-lucide="mail" class="w-3.5 h-3.5 mr-2"></i> info@lakelucernedentistry.com</a>
                        <span class="flex items-center"><i data-lucide="phone" class="w-3.5 h-3.5 mr-2"></i> +1 (407) 555-0123</span>
                    </div>
                    <div class="flex items-center space-x-5">
                        <a href="#" class="hover:text-primary transition-all"><i data-lucide="facebook" class="w-3.5 h-3.5"></i></a>
                        <a href="#" class="hover:text-primary transition-all"><i data-lucide="instagram" class="w-3.5 h-3.5"></i></a>
                        <a href="#" class="hover:text-primary transition-all"><i data-lucide="twitter" class="w-3.5 h-3.5"></i></a>
                    </div>
                </div>
            </div>
            <nav class="bg-white/95 backdrop-blur-md shadow-sm transition-all duration-500 py-4" id="main-nav">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <a href="index.html" class="flex items-center">
                            <img src="images/logo.png" alt="Lake Lucerne" class="h-12 w-auto transition-all" id="logo-img" onerror="this.src='https://ui-avatars.com/api/?name=LL&background=A4C77B&color=fff'">
                            <div class="ml-3 flex flex-col">
                                <span class="font-serif text-2xl font-bold tracking-tight text-accent italic leading-none">Lake Lucerne</span>
                                <span class="text-[9px] uppercase tracking-[0.2em] font-bold text-primary mt-1">Implant Dentistry</span>
                            </div>
                        </a>
                        
                        <div class="hidden lg:flex items-center space-x-10">
                            ${navLinks.map(link => `
                                <a href="${link.href}" class="nav-link text-[15px] font-bold uppercase tracking-tight text-accent hover:text-primary transition-all relative flex items-center">
                                    ${link.name} ${['Home', 'About Us', 'Services'].includes(link.name) ? '<i data-lucide="chevron-down" class="ml-1 w-3.5 h-3.5"></i>' : ''}
                                </a>
                            `).join('')}
                            <a href="contact.html" class="bg-primary text-white px-8 py-3.5 rounded-md font-bold text-[13px] uppercase tracking-widest hover:bg-accent hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                                BOOK APPOINTMENT
                            </a>
                        </div>

                        <button id="mobile-menu-btn" class="lg:hidden p-2 text-accent focus:outline-none">
                            <i data-lucide="menu" class="w-8 h-8"></i>
                        </button>
                    </div>
                </div>

                <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-gray-100 absolute w-full left-0 animate-fade-in shadow-xl">
                    <div class="px-4 pt-4 pb-8 space-y-2">
                        ${navLinks.map(link => `
                            <a href="${link.href}" class="block py-4 text-lg font-bold border-b border-gray-50 text-accent hover:text-primary">${link.name}</a>
                        `).join('')}
                        <a href="contact.html" class="block w-full bg-primary text-white text-center py-5 rounded-xl font-bold mt-6 shadow-lg shadow-primary/20">Book Now</a>
                    </div>
                </div>
            </nav>
        </header>
        `;
    }

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="bg-accent text-white pt-24 pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                    <div class="space-y-8">
                        <a href="index.html" class="flex items-center">
                            <img src="images/logo.png" alt="Lake Lucerne" class="h-10 w-auto brightness-0 invert" onerror="this.src='https://ui-avatars.com/api/?name=LL&background=fff&color=0f172a'">
                            <span class="ml-3 font-serif text-3xl font-bold tracking-tight italic">Lake Lucerne</span>
                        </a>
                        <p class="text-gray-400 leading-relaxed text-sm">Providing exceptional dental care for the Orlando community for over 50 years. Our commitment is to your smile and long-term oral health.</p>
                        <div class="flex items-center space-x-4">
                            <a href="#" class="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><i data-lucide="facebook" class="w-4 h-4"></i></a>
                            <a href="#" class="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><i data-lucide="instagram" class="w-4 h-4"></i></a>
                            <a href="#" class="w-11 h-11 rounded-full border border-gray-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"><i data-lucide="twitter" class="w-4 h-4"></i></a>
                        </div>
                    </div>

                    <div>
                        <h3 class="font-serif text-xl font-bold mb-10 relative inline-block">Other Links<span class="absolute -bottom-3 left-0 w-10 h-0.5 bg-primary"></span></h3>
                        <ul class="space-y-5 text-gray-400 text-sm">
                            <li><a href="index.html" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Home</a></li>
                            <li><a href="about.html" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> About Us</a></li>
                            <li><a href="services.html" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Services</a></li>
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Our Team</a></li>
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Latest Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-serif text-xl font-bold mb-10 relative inline-block">Our Services<span class="absolute -bottom-3 left-0 w-10 h-0.5 bg-primary"></span></h3>
                        <ul class="space-y-5 text-gray-400 text-sm">
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Root Canal</a></li>
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Alignment Teeth</a></li>
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Cosmetic Teeth</a></li>
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Oral Hygiene</a></li>
                            <li><a href="#" class="hover:text-primary flex items-center transition-colors"><i data-lucide="chevron-right" class="w-4 h-4 mr-2 text-primary"></i> Cavity Inspection</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-serif text-xl font-bold mb-10 relative inline-block">Contact Us<span class="absolute -bottom-3 left-0 w-10 h-0.5 bg-primary"></span></h3>
                        <ul class="space-y-8 text-gray-400 text-sm">
                            <li class="flex items-start">
                                <div class="bg-primary/20 p-2.5 rounded-lg mr-4 mt-1"><i data-lucide="map-pin" class="w-5 h-5 text-primary"></i></div>
                                <span>1247 Dental Way, Suite 100,<br>Lake Lucerne, Orlando, FL</span>
                            </li>
                            <li class="flex items-center">
                                <div class="bg-primary/20 p-2.5 rounded-lg mr-4"><i data-lucide="phone" class="w-5 h-5 text-primary"></i></div>
                                <span>+1 (407) 555-0123</span>
                            </li>
                            <li class="flex items-center">
                                <div class="bg-primary/20 p-2.5 rounded-lg mr-4"><i data-lucide="mail" class="w-5 h-5 text-primary"></i></div>
                                <span>info@lakelucernedentistry.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mt-24 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[13px]">
                    <p>Copyright © 2026 Lake Lucerne Cosmetic & Implant Dentistry. All rights reserved.</p>
                    <div class="flex space-x-8 mt-6 md:mt-0 font-medium tracking-tight">
                        <a href="#" class="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" class="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
            
            <button id="scroll-top" class="fixed bottom-10 right-10 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-10 transition-all duration-300 z-[100] hover:bg-accent hover:-translate-y-1 transform">
                <i data-lucide="arrow-up" class="w-7 h-7"></i>
            </button>
        </footer>
        `;
        
        // Re-initialize Lucide for the newly injected footer but main.js handles it
        const scrollBtn = document.getElementById('scroll-top');
        if (scrollBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    scrollBtn.classList.remove('opacity-0', 'translate-y-10');
                } else {
                    scrollBtn.classList.add('opacity-0', 'translate-y-10');
                }
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
}
