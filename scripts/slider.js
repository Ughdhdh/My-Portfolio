document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Проверка: нашлись ли элементы на странице?
  if (!slider || !prevBtn || !nextBtn) {
    console.error('Ошибка: Один или несколько элементов слайдера не найдены в HTML!');
    return;
  }

  // При клике на кнопку "Вперед"
  nextBtn.addEventListener('click', () => {
    const firstCard = slider.querySelector('.card');
    if (firstCard) {
      const cardWidth = firstCard.clientWidth + 20; 
      slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  });

  // При клике на кнопку "Назад"
  prevBtn.addEventListener('click', () => {
    const firstCard = slider.querySelector('.card');
    if (firstCard) {
      const cardWidth = firstCard.clientWidth + 20;
      slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  });
});
