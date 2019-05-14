//Variavel global de escolha
var _escolha;


function globalEscolha(x){
    this._escolha = x;
}


function jogar(posicao){

    var campo = document.getElementsByClassName("campo");

    if(posicao === 'x1'){
        campo[0].innerHTML = "X";
        campo[0].setAttribute('font-size', "36px");
    }
    else if(posicao === 'x2'){
        campo[1].innerHTML = "X";
        campo[1].setAttribute('font-size', "36px");
    }

}

function teste(){
    console.log('entrou');
    
}