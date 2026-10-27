function jokenpo(escolha1){
    let perdeu = "Você perdeu!"
    let ganhou = "Você ganhou!"

    let escolha2 = Math.random().toFixed(2)

    if (escolha2 <= 0.33){
        escolha2 = "pedra"
    }
    else if (escolha2 > 0.33 && escolha2 <= 0.66){
        escolha2 = "papel"
    }
    else {
        escolha2 = "tesoura"
    }

    let mensagem = ""

    if (escolha1 == escolha2) {
        mensagem = "Empatou!"
    } 
    else if (escolha1 == "pedra" && escolha2 == "papel"){
        mensagem = perdeu
    } 
    else if (escolha1 == "pedra" && escolha2 == "tesoura"){
        mensagem = ganhou
    }
    else if (escolha1 == "papel" && escolha2 == "pedra"){
        mensagem = ganhou
    }
    else if (escolha1 == "papel" && escolha2 == "tesoura"){
        mensagem = perdeu
    }
    else if (escolha1 == "tesoura" && escolha2 == "pedra"){
        mensagem = perdeu
    } 
    else if (escolha1 == "tesoura" && escolha2 == "papel"){
        mensagem = ganhou
    }

    document.getElementById("txt-jogador").innerText = escolha1
    document.getElementById("txt-computador").innerText = escolha2
    document.getElementById("resultado-final").innerText = mensagem
}
