//Ajax
function carregar(pagina, escolha) {
	var xmlHttp;
	_escolha = escolha;
	console.log(_escolha);




	if (window.XMLHttpRequest) {
		//Caso o objeto window.XMLHttpRequest exista, será instanciado.
		xmlHttp = new XMLHttpRequest();
	} else {
		//Caso não exista, será instanciado o objeto que estiver disponível no navegador.
		xmlHttp = ActiveXObject("Microsoft.XMLHTTP");
	}

	//1º método, 2º url, 3º true - assíncrono false - síncrono
	//open - permite abrir um documento
	xmlHttp.open('GET', pagina, 'true');

	xmlHttp.onreadystatechange = function () {
		//onreadystatechange - acionado sempre que o status da requisição altera.
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			//readyState
			//0 (não inicializado)
			//1 (carregando)
			//2 (carregado)
			//3 (abrindo)
			//4 (completo)

			//status == 200 - resposta está pronta.



			//responseText - resposta do servidor
			/* console.log(xmlHttp.responseText); */
			document.getElementById("conteudo").innerHTML = xmlHttp.responseText;
		}
	}





	//1º método, 2º url, 3º true - assíncrono false - síncrono
	//open - permite abrir um documento
	xmlHttp.open('GET', pagina, 'true');

	//inicia requisição com o servidor
	//Caso utilize o metódo GET não precisa atribuir parâmetros.
	//Caso utilize o método POST pode informar os dados que deverão ser enviados.
	//POST - dados como um formulário add - setRequestHeader 
	xmlHttp.send(null);

}



//Variavel global de escolha para saber se o jogador quer jogar com X ou O
var _escolha;
//Para controle para que quando der 8 jogadas a máquina não jogue a decima vezes
//Sabendo que tem só 9 jogdas.
var cont = 0;

//Pega a escolha do usuário 
function globalEscolha(x) {
	this._escolha = x;
}

//Faz todo controle das jogadas tantas do usuário como a máquina
function jogar(posicao) {

	//Pega os 9 campos ontem o usuário ou máquina pode jogar
	var campo = document.getElementsByClassName("campo");

	//Se o cont for menor que 8 o usuário pode jogar e a máquina também pode fazer sua jogada
	if (cont < 8) {
		//Se a posição for a x1 insere a joga do usuário
		if (posicao === 'x1' && campo[0].innerHTML === '') {
			campo[0].innerHTML = _escolha;
		}
		//Se a posição for a x2 insere a joga do usuário 
		else if (posicao === 'x2' && campo[1].innerHTML === '') {
			campo[1].innerHTML = _escolha;
		}
		//Se a posição for a x3 insere a joga do usuário
		else if (posicao === 'x3' && campo[2].innerHTML === '') {
			campo[2].innerHTML = _escolha;
		}
		//Se a posição for a x4 insere a joga do usuário
		else if (posicao === 'x4' && campo[3].innerHTML === '') {
			campo[3].innerHTML = _escolha;
		}
		//Se a posição for a x5 insere a joga do usuário
		else if (posicao === 'x5' && campo[4].innerHTML === '') {
			campo[4].innerHTML = _escolha;
		}
		//Se a posição for a x6 insere a joga do usuário
		else if (posicao === 'x6' && campo[5].innerHTML === '') {
			campo[5].innerHTML = _escolha;
		}
		//Se a posição for a x7 insere a joga do usuário
		else if (posicao === 'x7' && campo[6].innerHTML === '') {
			campo[6].innerHTML = _escolha;
		}
		//Se a posição for a x8 insere a joga do usuário
		else if (posicao === 'x8' && campo[7].innerHTML === '') {
			campo[7].innerHTML = _escolha;
		}
		//Se a posição for a x9 insere a joga do usuário
		else if (posicao === 'x9' && campo[8].innerHTML === '') {
			campo[8].innerHTML = _escolha;
		}
		sorteiaPosicao();
		validatorWin();
	} else {
		//Se a posição for a x1 insere a jogada da máquima
		if (posicao === 'x1' && campo[0].innerHTML === '') {
			campo[0].innerHTML = _escolha;
		}
		//Se a posição for a x2 insere a jogada da máquima
		else if (posicao === 'x2' && campo[1].innerHTML === '') {
			campo[1].innerHTML = _escolha;
		}
		//Se a posição for a x3 insere a jogada da máquima
		else if (posicao === 'x3' && campo[2].innerHTML === '') {
			campo[2].innerHTML = _escolha;
		}
		//Se a posição for a x4 insere a jogada da máquima
		else if (posicao === 'x4' && campo[3].innerHTML === '') {
			campo[3].innerHTML = _escolha;
		}
		//Se a posição for a x5 insere a jogada da máquima		
		else if (posicao === 'x5' && campo[4].innerHTML === '') {
			campo[4].innerHTML = _escolha;
		}
		//Se a posição for a x6 insere a jogada da máquima
		else if (posicao === 'x6' && campo[5].innerHTML === '') {
			campo[5].innerHTML = _escolha;
		}
		//Se a posição for a x7 insere a jogada da máquima
		else if (posicao === 'x7' && campo[6].innerHTML === '') {
			campo[6].innerHTML = _escolha;
		}
		//Se a posição for a x8 insere a jogada da máquima
		else if (posicao === 'x8' && campo[7].innerHTML === '') {
			campo[7].innerHTML = _escolha;
		}
		//Se a posição for a x9 insere a jogada da máquima
		else if (posicao === 'x9' && campo[8].innerHTML === '') {
			campo[8].innerHTML = _escolha;
		}
		validatorWin();
	}

	//Adiciona que foi feito mais uma jogada
	cont++;

}

//SPRTEOA AS Posições da máquina
function sorteiaPosicao() {
	//Pega todos os campos que são utilizados para jogar
	var aux = document.getElementsByClassName('campo');
	//Gera um numero randômico de 0..8
	var numero = Math.floor(Math.random() * 9);


	while (true) {

		//Se escolhar for igual a x e o aux[numero] === 0, então pode inserir a escolha
		//caso contrário gera outro numero
		if (_escolha === 'x') {
			if (aux[numero].innerHTML.length === 0 || aux[numero].innerHTML === '') {
				aux[numero].innerHTML = 'o';
				//Incrementa que foi feito mais uma jogada
				cont++;
				//Corta o fluxo assim que joga é validada
				break;
				//Caso o numero não for valido, é gerado novamente outro numero randômico	
			} else {
				numero = Math.floor(Math.random() * 9);
			}
		} else {
			if (aux[numero].innerHTML.length === 0 || aux[numero].innerHTML === '') {
				aux[numero].innerHTML = 'x';
				cont++;
				break;
			} else {
				numero = Math.floor(Math.random() * 9);
			}
		}

	}

}

//Valida o vencedor
function validatorWin() {

	var campos = document.getElementsByClassName('campo');
	var retorno = document.getElementById('retorno');

	// 0 - 1 - 2
	if (campos[0].innerHTML === 'x' && campos[1].innerHTML === 'x' && campos[2].innerHTML === 'x') {
		createReturn('play1');
	}
	// 0 - 1 - 2
	else if (campos[0].innerHTML === 'o' && campos[1].innerHTML === 'o' && campos[2].innerHTML === 'o') {
		createReturn('play2');
	}
	//3 - 4 - 5
	else if (campos[3].innerHTML === 'x' && campos[4].innerHTML === 'x' && campos[5].innerHTML === 'x') {
		createReturn('play1');
	}
	//3 - 4 - 5
	else if (campos[3].innerHTML === 'o' && campos[4].innerHTML === 'o' && campos[5].innerHTML === 'o') {
		createReturn('play2');
	}
	//6 - 7 - 8
	else if (campos[6].innerHTML === 'x' && campos[7].innerHTML === 'x' && campos[8].innerHTML === 'x') {
		createReturn('play1');
	}
	//6 - 7 - 8
	else if (campos[6].innerHTML === 'o' && campos[7].innerHTML === 'o' && campos[8].innerHTML === 'o') {
		createReturn('play2');
	}
	//0 - 3 - 6
	else if (campos[0].innerHTML === 'x' && campos[3].innerHTML === 'x' && campos[6].innerHTML === 'x') {
		createReturn('play1');
	}
	//0 - 3 - 6
	else if (campos[0].innerHTML === 'o' && campos[3].innerHTML === 'o' && campos[6].innerHTML === 'o') {
		createReturn('play2');
	}
	//1 - 4 - 7
	else if (campos[1].innerHTML === 'x' && campos[4].innerHTML === 'x' && campos[7].innerHTML === 'x') {
		createReturn('play1');
	}
	//1 - 4 - 7
	else if (campos[1].innerHTML === 'o' && campos[4].innerHTML === 'o' && campos[7].innerHTML === 'o') {
		createReturn('play2');
	}
	//2 - 5 - 8
	else if (campos[2].innerHTML === 'x' && campos[5].innerHTML === 'x' && campos[8].innerHTML === 'x') {
		createReturn('play1');
	}
	//2 - 5 - 8
	else if (campos[2].innerHTML === 'o' && campos[5].innerHTML === 'o' && campos[8].innerHTML === 'o') {
		createReturn('play2');
	}
	//0 - 4 - 8
	else if (campos[0].innerHTML === 'x' && campos[4].innerHTML === 'x' && campos[8].innerHTML === 'x') {
		createReturn('play1');
	}
	//0 - 4 - 8
	else if (campos[0].innerHTML === 'o' && campos[4].innerHTML === 'o' && campos[8].innerHTML === 'o') {
		createReturn('play2');
	}
	//6 - 4 - 2
	else if (campos[6].innerHTML === 'x' && campos[4].innerHTML === 'x' && campos[2].innerHTML === 'x') {
		createReturn('play1');
	}
	//6 - 4 - 2
	else if (campos[6].innerHTML === 'o' && campos[4].innerHTML === 'o' && campos[2].innerHTML === 'o') {
		createReturn('play2');
	}









}

function createReturn(playReturn) {


	if (playReturn === 'play1') {
		var texto = document.createElement('h1');
		texto.textContent = "Jogador 1 Venceu!!!";
		texto.style.color = "black";
		texto.style.textAlign = "center";
		texto.style.marginTop = "10px";
		texto.style.marginBottom = "30px";

		var retorno = document.getElementById('retorno');
		retorno.appendChild(texto);
		retorno.style.textAlign = "center";


		var buttonNovament = document.createElement('a');
		buttonNovament.setAttribute("href", "../view/jogos.html");
		buttonNovament.style.backgroundColor = "black";
		buttonNovament.style.padding = "10px";
		buttonNovament.style.marginTop = "100px";
		buttonNovament.style.color = "#fff";
		buttonNovament.style.textDecoration = "none";
		buttonNovament.style.width = "200px";
		buttonNovament.style.height = "100px";
		buttonNovament.appendChild(document.createTextNode("Jogar Novamente"));

		retorno.appendChild(buttonNovament);
	} else {
		var texto = document.createElement('h1');
		texto.textContent = "Jogador 2 Venceu!!!";
		texto.style.color = "black";
		texto.style.textAlign = "center";
		texto.style.marginTop = "10px";
		texto.style.marginBottom = "30px";

		var retorno = document.getElementById('retorno');
		retorno.appendChild(texto);
		retorno.style.textAlign = "center";


		var buttonNovament = document.createElement('a');
		buttonNovament.setAttribute("href", "../view/jogos.html");
		buttonNovament.style.backgroundColor = "black";
		buttonNovament.style.padding = "10px";
		buttonNovament.style.marginTop = "100px";
		buttonNovament.style.color = "#fff";
		buttonNovament.style.textDecoration = "none";
		buttonNovament.style.width = "200px";
		buttonNovament.style.height = "100px";
		buttonNovament.appendChild(document.createTextNode("Jogar Novamente"));

		retorno.appendChild(buttonNovament);

	}
}