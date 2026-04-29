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

    // Set Random Hero Background on Home Page
    const heroSection = document.querySelector('.hero');
    if (heroSection && data.gallery && data.gallery.images) {
        const randomImg = data.gallery.images[Math.floor(Math.random() * data.gallery.images.length)];
        if (randomImg && randomImg.url) {
            const isInsidePages = window.location.pathname.includes('/Pages/');
            const imgPath = isInsidePages ? `../${randomImg.url}` : randomImg.url;
            heroSection.style.backgroundImage = `linear-gradient(rgba(26, 54, 93, 0.7), rgba(26, 54, 93, 0.7)), url('${imgPath}')`;
        }
    }

    // Fill simple text elements
    document.querySelectorAll('[data-content]').forEach(el => {
        const keyPath = el.getAttribute('data-content').split('.');
        let value = data;
        for (const key of keyPath) {
            value = value ? value[key] : null;
        }
        if (value !== null && value !== undefined) {
            // Auto-detect year for copyright or other fields
            const currentYear = new Date().getFullYear();
            if (typeof value === 'string') {
                value = value.replace('{year}', currentYear);
            }
            el.innerText = value;
        }
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
    const committeeSecondContainer = document.getElementById('committee-second-render-list');
    const committeeFirstContainer = document.getElementById('committee-first-render-list');
    const allMembersLinkContainer = document.getElementById('committee-all-members-link');
    
    if (committeeContainer && data.committee && data.committee.current) {
        committeeContainer.innerHTML = data.committee.current.map(member => `
            <div class="committee-item">
                <span class="committee-name">${member.name}</span>
                <span class="committee-post">${member.post}</span>
            </div>
        `).join('');
    }
    
    if (committeeSecondContainer && data.committee && data.committee.second) {
        committeeSecondContainer.innerHTML = data.committee.second.map(member => `
            <div class="committee-item">
                <span class="committee-name">${member.name}</span>
                <span class="committee-post">${member.post}</span>
            </div>
        `).join('');
    }

    if (committeeFirstContainer && data.committee && data.committee.first) {
        committeeFirstContainer.innerHTML = data.committee.first.map(member => `
            <div class="committee-item">
                <span class="committee-name">${member.name}</span>
                <span class="committee-post">${member.post}</span>
            </div>
        `).join('');
    }

    if (allMembersLinkContainer && data.committee && data.committee.allMembersLink) {
        allMembersLinkContainer.innerHTML = `
            <div style="text-align: center; margin-top: 3rem;">
                <a href="${data.committee.allMembersLink}" target="_blank" class="btn btn-outline">संस्थाका सदस्यहरूको नामावली यहाँ हेर्नुहोस्</a>
            </div>
        `;
    }

    // Render Activities List
    const activitiesContainer = document.getElementById('activities-render-grid');
    if (activitiesContainer && data.activities) {
        const isInsidePages = window.location.pathname.includes('/Pages/');
        activitiesContainer.innerHTML = data.activities.map(act => {
            const images = act.images || [act.image];
            const imagesHtml = images.map(img => {
                const imgPath = isInsidePages ? `../${img}` : img;
                return `<div class="card-img" style="background-image: url('${imgPath}'); margin-bottom: 5px;"></div>`;
            }).join('');

            const albumBtn = act.albumLink ? `
                <div style="margin-top: 1rem;">
                    <a href="${act.albumLink}" target="_blank" class="btn btn-outline" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                        <i class="fas fa-images"></i> थप फोटोहरू हेर्नुहोस्
                    </a>
                </div>
            ` : '';

            return `
                <div class="card">
                    <div class="activity-gallery">
                        ${imagesHtml}
                    </div>
                    <div class="card-body">
                        <p style="color: var(--text-muted); font-size: 0.9rem;">${act.date}</p>
                        <h3>${act.title}</h3>
                        <p>${act.description}</p>
                        ${albumBtn}
                    </div>
                </div>
            `;
        }).join('');
    }

    // Render Program Images
    const programsImagesContainer = document.getElementById('programs-images-grid');
    if (programsImagesContainer && data.programs && data.programs.images) {
        const isInsidePages = window.location.pathname.includes('/Pages/');
        programsImagesContainer.innerHTML = data.programs.images.map(img => {
            const imgPath = isInsidePages ? `../${img}` : img;
            return `
                <div class="card">
                    <div class="card-img" style="background-image: url('${imgPath}'); height: 250px;"></div>
                </div>
            `;
        }).join('');
    }

    // Render Scholarship Images
    const scholarshipImagesContainer = document.getElementById('scholarship-images-grid');
    if (scholarshipImagesContainer && data.scholarship && data.scholarship.images) {
        const isInsidePages = window.location.pathname.includes('/Pages/');
        scholarshipImagesContainer.innerHTML = data.scholarship.images.map(img => {
            const imgPath = isInsidePages ? `../${img}` : img;
            return `
                <div class="card">
                    <div class="card-img" style="background-image: url('${imgPath}'); height: 250px;"></div>
                </div>
            `;
        }).join('');
    }

    // Render Reports List
    const reportsContainer = document.getElementById('reports-render-list');
    if (reportsContainer && data.reports && data.reports.list) {
        reportsContainer.innerHTML = data.reports.list.map(report => `
            <div class="card" style="margin-bottom: 1rem;">
                <div class="card-body" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <i class="fas fa-file-pdf" style="font-size: 2rem; color: #e74c3c;"></i>
                        <h3 style="margin: 0; font-size: 1.1rem;">${report.name}</h3>
                    </div>
                    <a href="${report.url}" target="_blank" class="btn btn-outline" style="padding: 0.5rem 1rem;">हेर्नुहोस्</a>
                </div>
            </div>
        `).join('');
    }

    // Render Gallery
    const galleryContainer = document.getElementById('gallery-render-grid');
    if (galleryContainer && data.gallery && data.gallery.images) {
        const isInsidePages = window.location.pathname.includes('/Pages/');
        galleryContainer.innerHTML = data.gallery.images.map(img => {
            const imgUrl = (img.url && (img.url.startsWith('http') || !isInsidePages)) ? img.url : (img.url ? `../${img.url}` : '');
            const albumBtn = img.albumUrl ? `
                <div style="margin-top: 1rem; text-align: center;">
                    <a href="${img.albumUrl}" target="_blank" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                        <i class="fas fa-external-link-alt"></i> पूर्ण एल्बम हेर्नुहोस्
                    </a>
                </div>
            ` : '';

            return `
                <div class="card">
                    ${imgUrl ? `<div class="card-img" style="background-image: url('${imgUrl}'); height: 250px;"></div>` : ''}
                    <div class="card-body">
                        <p style="text-align: center; font-weight: 600; margin-bottom: 0;">${img.caption}</p>
                        ${albumBtn}
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
