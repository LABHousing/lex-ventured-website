document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.site-nav');
  const backdrop = document.querySelector('.site-nav-backdrop');
  const closeButton = document.querySelector('.mobile-menu-close');
  const menuLinks = document.querySelectorAll('.site-nav a');

  if (!toggle || !menu) return;

  const setMenuState = (isOpen) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('active', isOpen);
    backdrop?.classList.toggle('active', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!expanded);
  });

  closeButton?.addEventListener('click', () => setMenuState(false));
  backdrop?.addEventListener('click', () => setMenuState(false));

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('active')) {
      setMenuState(false);
      toggle.focus();
    }
  });
});
