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



//Variavel global de escolha
var _escolha;
var cont = 0;


function globalEscolha(x) {
	this._escolha = x;
}


function jogar(posicao) {

	var campo = document.getElementsByClassName("campo");

	if (cont < 9) {

		if (posicao === 'x1' && campo[0].innerHTML === '') {
			campo[0].innerHTML = _escolha;
		} else if (posicao === 'x2' && campo[1].innerHTML === '') {
			campo[1].innerHTML = _escolha;
		} else if (posicao === 'x3' && campo[2].innerHTML === '') {
			campo[2].innerHTML = _escolha;
		} else if (posicao === 'x4' && campo[3].innerHTML === '') {
			campo[3].innerHTML = _escolha;
		} else if (posicao === 'x5' && campo[4].innerHTML === '') {
			campo[4].innerHTML = _escolha;
		} else if (posicao === 'x6' && campo[5].innerHTML === '') {
			campo[5].innerHTML = _escolha;
		} else if (posicao === 'x7' && campo[6].innerHTML === '') {
			campo[6].innerHTML = _escolha;
		} else if (posicao === 'x8' && campo[7].innerHTML === '') {
			campo[7].innerHTML = _escolha;
		} else if (posicao === 'x9' && campo[8].innerHTML === '') {
			campo[8].innerHTML = _escolha;
		}
		sorteiaPosicao();
	}
	else{
		if (posicao === 'x1' && campo[0].innerHTML === '') {
			campo[0].innerHTML = _escolha;
		} else if (posicao === 'x2' && campo[1].innerHTML === '') {
			campo[1].innerHTML = _escolha;
		} else if (posicao === 'x3' && campo[2].innerHTML === '') {
			campo[2].innerHTML = _escolha;
		} else if (posicao === 'x4' && campo[3].innerHTML === '') {
			campo[3].innerHTML = _escolha;
		} else if (posicao === 'x5' && campo[4].innerHTML === '') {
			campo[4].innerHTML = _escolha;
		} else if (posicao === 'x6' && campo[5].innerHTML === '') {
			campo[5].innerHTML = _escolha;
		} else if (posicao === 'x7' && campo[6].innerHTML === '') {
			campo[6].innerHTML = _escolha;
		} else if (posicao === 'x8' && campo[7].innerHTML === '') {
			campo[7].innerHTML = _escolha;
		} else if (posicao === 'x9' && campo[8].innerHTML === '') {
			campo[8].innerHTML = _escolha;
		}
	}

	cont++;

}


function sorteiaPosicao() {

	var aux = document.getElementsByClassName('campo');
	var numero = Math.floor(Math.random() * 9);


	while (true) {


		if (aux[numero].innerHTML.length === 0 || aux[numero].innerHTML === '') {
			aux[numero].innerHTML = 'o';
			cont++;
			break;
		} else {

			numero = Math.floor(Math.random() * 9);
			console.log(numero);

		}

	}

}