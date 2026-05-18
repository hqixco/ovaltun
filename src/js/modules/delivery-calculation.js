export function initDeliveryCalculation() {
  document.querySelectorAll('[data-delivery-calc]').forEach((calc) => {
    const buttons = Array.from(calc.querySelectorAll('.delivery-calc__vehicle'));
    const priceNode = calc.querySelector('[data-delivery-price]');

    if (!buttons.length || !priceNode) return;

    const setActive = (button) => {
      buttons.forEach((item) => {
        item.classList.toggle('delivery-calc__vehicle--active', item === button);
      });

      const price = button.getAttribute('data-price');
      if (price) {
        priceNode.textContent = `${price} ₽`;
      }
    };

    buttons.forEach((button) => {
      button.addEventListener('click', () => setActive(button));
    });
  });
}
