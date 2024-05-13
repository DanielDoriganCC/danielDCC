function rotacao(numeroTotalDeItens, tempoEntrada, tempoExibicao, tempoSaida, vetor){

    let tempoTotalIndividual = tempoEntrada + tempoExibicao + tempoSaida
    let tempoTotalTotal = tempoTotalIndividual * numeroTotalDeItens


    vetor.forEach((element, index) => {
        // entrar
        setTimeout(() => {
            element.classList.remove("ateSair")
            element.classList.add("ateMetade");

        }, index * tempoTotalIndividual);  // primeiro é ativado imediatamente mas o segundo e os adiante tem que esperar a duração do loop - 100ms

        // sair
        setTimeout(() => {
            element.classList.remove("ateMetade")
            element.classList.add("ateSair");
        }, tempoExibicao + tempoEntrada + index * tempoTotalIndividual + 0  );  // adicione + para que dois textos apareçam ao mesmo tempo

        // tirar sair após ter saído
        setTimeout(() => {
            element.classList.remove("ateSair")
        }, tempoSaida + tempoExibicao + tempoEntrada + index * tempoTotalIndividual + 0); // logo apos o fim de ate sair
        
    });

    setTimeout(() => {
        rotacao(numeroTotalDeItens, tempoEntrada, tempoExibicao, tempoSaida, vetor) // repetição, arrumar depois pra so desparar quando estiver sendo observado
    }, tempoTotalTotal); // delay do tempo do loop inteiro
}

let palavrasAlternantesGosto = document.querySelectorAll(".gostoMudavel")

let numeroTotalDeItensGostos = palavrasAlternantesGosto.length
let tempoEntradaGostos = 600 // mude para 500 talvez
let tempoExibicaoGostos = 1000
let tempoSaidaGostos = 500

rotacao(numeroTotalDeItensGostos, tempoEntradaGostos, tempoExibicaoGostos, tempoSaidaGostos, palavrasAlternantesGosto)


let palavrasAlternantesPrograma = document.querySelectorAll(".programaMudavel")

let numeroTotalDeItensPrograma = palavrasAlternantesPrograma.length
let tempoEntradaPrograma = 600 // mude para 500 talvez
let tempoExibicaoPrograma = 1000
let tempoSaidaPrograma = 500 // mude para 500 talvez

rotacao(numeroTotalDeItensPrograma, tempoEntradaPrograma, tempoExibicaoPrograma, tempoSaidaPrograma, palavrasAlternantesPrograma)