
const items = document.querySelectorAll('.list .item');
const indicators = document.querySelectorAll('.indicators ul li');
const number = document.querySelector('.indicators .number');
const prevBtn = document.querySelector('.arrow button:first-child');
const nextBtn = document.querySelector('.arrow button:last-child');

let activeIndex = 0;

function updateSlider(index) {
    // remove ativo anterior
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // adiciona ativo novo
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

// clique nos indicadores
indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
        activeIndex = i;
        updateSlider(activeIndex);
    });
});

