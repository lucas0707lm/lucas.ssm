var jogador = "x";

function jogar(){
    

    if(celula.innerHTML==""){
        celula.innerHTML = jogador;

        if(jogador == "x"){
            jogador="o";
            }else{
                jogador="x";
            }

    }

}