let ordemInicial = []
let sequenciaJodador = []
let score = 0;

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');


let ordemAleatoria = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    ordemInicial[ordemInicial.length] = colorOrder;
    sequenciaJodador = [];

    for(let i in ordemInicial) {
        let elementColor = createColorElement(ordemInicial[i]);
        acendeCor(elementColor, Number(i) + 1);
    }
}

let acendeCor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkOrdem = () => {
    for(let i in sequenciaJodador) {
        if(sequenciaJodador[i] != ordemInicial[i]) {
            gameOver();
            break;
        }
    }
    if(sequenciaJodador.length == ordemInicial.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

let clicou = (color) => {
    sequenciaJodador[sequenciaJodador.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrdem();
    },250);
}


let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    ordemAleatoria();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    ordemInicial = [];
    sequenciaJodador = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => clicou(0);
red.onclick = () => clicou(1);
yellow.onclick = () => clicou(2);
blue.onclick = () => clicou(3);

playGame();