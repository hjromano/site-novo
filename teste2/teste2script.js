// Seleciona todos os elementos necessários do HTML
const items = document.querySelectorAll('.list .item'); // todos os slides (imagens/textos)
const indicators = document.querySelectorAll('.indicators ul li'); // bolinhas/indicadores
const number = document.querySelector('.indicators .number'); // número do slide atual
const prevBtn = document.querySelector('.arrow button:first-child'); // botão de seta esquerda
const nextBtn = document.querySelector('.arrow button:last-child');  // botão de seta direita

// Índice do slide ativo (começa no primeiro = 0)
let activeIndex = 0;

// Função que atualiza o carrossel
function updateSlider(index) {
    // Remove a classe "active" de todos os slides e indicadores
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    // Adiciona a classe "active" no slide e indicador escolhidos
    items[index].classList.add('active');
    indicators[index].classList.add('active');

    // Atualiza o número mostrado (ex: 01, 02...)
    number.textContent = String(index + 1).padStart(2, '0');
}

// --- CONTROLES --- //

// Botão esquerda: volta um slide
prevBtn.addEventListener('click', () => {
    // diminui o índice, e se passar do início volta para o último
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    updateSlider(activeIndex);
});

// Botão direita: avança um slide
nextBtn.addEventListener('click', () => {
    // aumenta o índice, e se passar do último volta para o primeiro
    activeIndex = (activeIndex + 1) % items.length;
    updateSlider(activeIndex);
});

// Clique nos indicadores: vai direto para o slide escolhido
indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
        activeIndex = i; // define o índice como o da bolinha clicada
        updateSlider(activeIndex);
    });
});
