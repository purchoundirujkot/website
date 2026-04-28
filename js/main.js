// Main JavaScript for Purchoundi-Rujkot Website

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        navLinks.style.gap = '1rem';
    }
}

// Content Management System - Rendering Logic
function loadContent() {
    if (!window.siteData) return;

    const data = window.siteData;

    // Fill simple text elements
    document.querySelectorAll('[data-content]').forEach(el => {
        const keyPath = el.getAttribute('data-content').split('.');
        let value = data;
        for (const key of keyPath) {
            value = value ? value[key] : null;
        }
        if (value !== null && value !== undefined) el.innerText = value;
    });

    // Fill HTML elements
    document.querySelectorAll('[data-html]').forEach(el => {
        const keyPath = el.getAttribute('data-html').split('.');
        let value = data;
        for (const key of keyPath) {
            value = value ? value[key] : null;
        }
        if (value) el.innerHTML = value;
    });

    // Render Committee List
    const committeeContainer = document.getElementById('committee-render-list');
    if (committeeContainer && data.committee) {
        committeeContainer.innerHTML = data.committee.map(member => `
            <div class="committee-item">
                <span class="committee-name">${member.name}</span>
                <span class="committee-post">${member.post}</span>
            </div>
        `).join('');
    }

    // Render Activities List
    const activitiesContainer = document.getElementById('activities-render-grid');
    if (activitiesContainer && data.activities) {
        const isInsidePages = window.location.pathname.includes('/Pages/');
        activitiesContainer.innerHTML = data.activities.map(act => {
            const imgPath = isInsidePages ? `../${act.image}` : act.image;
            return `
                <div class="card">
                    <div class="card-img" style="background-image: url('${imgPath}');"></div>
                    <div class="card-body">
                        <p style="color: var(--text-muted); font-size: 0.9rem;">${act.date}</p>
                        <h3>${act.title}</h3>
                        <p>${act.description}</p>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render Gallery
    const galleryContainer = document.getElementById('gallery-render-grid');
    if (galleryContainer && data.gallery && data.gallery.images) {
        const isInsidePages = window.location.pathname.includes('/Pages/');
        galleryContainer.innerHTML = data.gallery.images.map(img => {
            const imgUrl = (img.url.startsWith('http') || !isInsidePages) ? img.url : `../${img.url}`;
            return `
                <div class="card">
                    <div class="card-img" style="background-image: url('${imgUrl}'); height: 250px;"></div>
                    <div class="card-body">
                        <p style="text-align: center; font-weight: 600;">${img.caption}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Initialize content on load
document.addEventListener('DOMContentLoaded', () => {
    loadContent();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple animation on scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
