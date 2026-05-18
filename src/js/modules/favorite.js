export function initFavorites() {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const button = target.closest('[data-favorite]');
    if (!(button instanceof HTMLElement)) return;

    button.classList.toggle('is-active');
    button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));
  });
}

