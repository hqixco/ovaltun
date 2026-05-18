export function initMenu() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const burger = header.querySelector('[data-menu-open]');
  const closeButton = header.querySelector('[data-menu-close]');

  const setOpen = (isOpen) => {
    header.classList.toggle('site-header--menu-open', isOpen);
    document.documentElement.classList.toggle('is-scroll-locked', isOpen);
  };

  burger?.addEventListener('click', () => setOpen(!header.classList.contains('site-header--menu-open')));
  closeButton?.addEventListener('click', () => setOpen(false));

  header.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.matches('[data-menu-link]')) {
      setOpen(false);
    }
  });
}
