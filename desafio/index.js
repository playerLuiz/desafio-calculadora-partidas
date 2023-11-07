let calculoPartidas = partidas(80,0)

function partidas(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}

if(calculoPartidas <= 10){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Ferro")
}else if(calculoPartidas >=11 && calculoPartidas <= 20){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Bronze")
}else if(calculoPartidas >=21 && calculoPartidas <= 50){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Prata")
}else if(calculoPartidas >=51 && calculoPartidas <= 80){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Ouro")
}else if(calculoPartidas >=81 && calculoPartidas <= 90){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Diamante")
}else if(calculoPartidas >=91 && calculoPartidas <= 100){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Lendário")
}else if(calculoPartidas >= 100){
    console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Imortal")
}

//Observação: da para fazer usando for ou while

//let cal = calculoPartidas
//while(cal <= 10){
    //console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Ferro")
    //cal++ Preciso disso para ele sair do loop
    //break; // Esse funcionou melhor para fechar o loop
//}while(cal >= 11 && cal <=20){
    //console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Prata")
    //break;
//}while(cal >= 21 && cal <=50){
    //console.log("O jogador tem o winrate de " + calculoPartidas + " e está no elo Ouro")
    //break;
//}

