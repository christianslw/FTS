const root = document.documentElement;
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

let ticking = false;

const updateScrollState = () => {
  // Parallax calculations
  const desktop = window.matchMedia('(min-width: 900px)').matches;
  const offset = desktop ? Math.min(window.scrollY, 1000) : 0;
  root.style.setProperty('--scroll', String(offset));

  // Sticky header class trigger
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollState);
    ticking = true;
  }
});

window.addEventListener('resize', updateScrollState);
updateScrollState();

// Mobile Hamburger Drawer control
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

