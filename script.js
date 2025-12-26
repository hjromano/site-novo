const items = document.querySelectorAll('.list .item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.indicators .number');
const prevBtn = document.querySelector('.arrow .prev');
const nextBtn = document.querySelector('.arrow .next');

let activeIndex = 0;

function updateSlider(index) {
  items.forEach(item => item.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));

  items[index].classList.add('active');
  indicators[index].classList.add('active');
  number.textContent = String(index + 1).padStart(2, '0');
}

prevBtn.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + items.length) % items.length;
  updateSlider(activeIndex);
});

nextBtn.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % items.length;
  updateSlider(activeIndex);
});

indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    activeIndex = i;
    updateSlider(activeIndex);
  });
});
