export function initModal() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const openButton = target.closest('[data-modal-open]');
    const closeButton = target.closest('[data-modal-close]');

    if (openButton instanceof HTMLElement) {
      const modalId = openButton.getAttribute('data-modal-open');
      const modal = modalId ? document.querySelector(modalId) : null;
      modal?.classList.add('is-open');
      document.documentElement.classList.add('is-scroll-locked');
      return;
    }

    if (closeButton instanceof HTMLElement) {
      const modal = closeButton.closest('.modal');
      modal?.classList.remove('is-open');
      document.documentElement.classList.remove('is-scroll-locked');
      return;
    }

    if (target.classList.contains('modal__overlay')) {
      const modal = target.closest('.modal');
      modal?.classList.remove('is-open');
      document.documentElement.classList.remove('is-scroll-locked');
    }
  });
}

