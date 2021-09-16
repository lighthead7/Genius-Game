let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = red
// 2 = yellow
// 3 = blue

const blue = document.querySelector['.blue'];
const red = document.querySelector['.red'];
const green = document.querySelector['.green'];
const yellow = document.querySelector['.yellow'];

//cria ordem aleatória
let shuffleOrder = () => {
	let colorOrder = Math.floor(Math.random() * 4);
	order[order.length] = colorOrder;
	clikedOrder = [];
	
	for (let i in order)
	{
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}
}

//acende a proxima cor
let lightColor = (element, number) => {
	number = number * 500;
	setTimeout(() => {
		element.classList.add('selected');
	}, tempo - 250);
	setTimeout(() => {
		element.classList.remove('selected');
	})
}

//checa se os botões foram clicados corretamente 
let checkOrder = () => {
	for (let i in clickedOrder){
		if(clickedOrder[i] != order[i]){
			gameOver();
			break;
		}
	}
	if(clickedOrder.length == order.length){
		alert('Pontuação: $(score)\nVocê acertou! Iniciando próximo nível!');
		nextLevel();
	}
}

// função para click do usuário
let click = (color) => {
	clickedOrder[clickedOrder.length] = color;
	createColorElement(color).classList.add('selected');
	
	setTimeout(() => {
		createColorElement(color).classList.remove('selected');
		checkOrder();
	}, 250);
}

// função que retorna a cor
let createColorElement = (color) => {
	if(colot == 0){
		return green;
	}else if(color == 1) {
		return red;
	}else if(color == 2){
		return yellow;
	}else if(color == 3){
		return blue;
	}
}

//função para próximo nível de jogo
let nextLevel = () => {
	score++;
	shuffleOrder();
}

// função game over
let gameOver = () => {
	alert('Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo');
	order = [];
	clickedOrder = [];

	playGame();
}

// função para iniciar
let playGame = () => {
	alert('Bem Vindo ao Genius! Iniciando novo jogo')
	score = 0;
	
	nextLevel();
}

//eventos de click
green.Onclick = () => click(0);
red.Onclick = () => click(1);
yellow.Onclick = () => click(2);
blue.Onclick = () => click(3);


playGame();
