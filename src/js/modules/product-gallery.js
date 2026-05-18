export function initProductGallery() {
  document.querySelectorAll('[data-product-gallery]').forEach((gallery) => {
    const thumbs = Array.from(gallery.querySelectorAll('.product-gallery__thumb'));

    if (!thumbs.length) return;

    const setActive = (activeThumb) => {
      thumbs.forEach((thumb) => {
        thumb.classList.toggle('product-gallery__thumb--active', thumb === activeThumb);
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => setActive(thumb));
    });
  });
}
