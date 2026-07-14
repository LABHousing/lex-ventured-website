// js/header.js — small accessible mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.getElementById('site-menu-panel');
  if (!toggle || !panel) return;
  toggle.addEventListener('click', function () {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) panel.removeAttribute('hidden'); else panel.setAttribute('hidden','');
  });
  document.addEventListener('click', (e) => {
    if (!panel.classList.contains('open')) return;
    if (!panel.contains(e.target) && !toggle.contains(e.target)) {
      panel.classList.remove('open');
      panel.setAttribute('hidden','');
      toggle.setAttribute('aria-expanded','false');
    }
  });
});
