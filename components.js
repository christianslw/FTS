class FtsNav extends HTMLElement {
    connectedCallback() {
        const isKarriere = window.location.pathname.includes('karriere.html');
        
        // Logik: Was soll sich ändern?
        const btnText = isKarriere ? 'Jetzt Bewerben' : 'Kontakt';
        const btnLink = isKarriere ? '#bewerben' : 'index.html#kontakt';

        this.innerHTML = `
            <header class="fts-header" id="main-nav">
                <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <a href="index.html">
                        <img src="res/LOGO_FTS_Horizontal.svg" class="h-10" id="nav-logo">
                    </a>
                    
                    <nav class="hidden lg:flex space-x-10">
                        <a href="index.html#kompetenzen" class="nav-link-item">Leistungen</a>
                        <a href="karriere.html" class="nav-link-item">Karriere</a>
                    </nav>

                    <a href="${btnLink}" class="btn-primary py-2 px-6 text-sm">
                        ${btnText}
                    </a>
                </div>
            </header>
        `;

        // Optional: Hier packst du auch das Scroll-Skript rein, 
        // damit es automatisch auf allen Seiten funktioniert
        this.initScrollEffect();
    }

    initScrollEffect() {
        const nav = this.querySelector('#main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('fts-header-solid');
            } else {
                nav.classList.remove('fts-header-solid');
            }
        });
    }
}
customElements.define('fts-nav', FtsNav);