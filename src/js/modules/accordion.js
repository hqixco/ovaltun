export function initAccordion() {
  document.querySelectorAll('[data-accordion]').forEach((root) => {
    root.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const trigger = target.closest('[data-accordion-trigger]');
      if (!trigger) return;

      const item = trigger.closest('[data-accordion-item]');
      if (!item) return;

      item.classList.toggle('is-open');
    });
  });
}

