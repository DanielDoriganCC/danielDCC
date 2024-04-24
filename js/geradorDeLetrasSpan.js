const criarLetra = (aLetra, indiceLetra) => {
    const letraSpan = document.createElement("span");
    letraSpan.innerHTML = `${aLetra}`;
    letraSpan.classList.add("letras-da-palavra");
    return letraSpan;
}

function criarPalavras(palavrasASeremCriadas, div) {
    const adicionarLetra = (aLetra, indiceLetra) => div.appendChild(criarLetra(aLetra, indiceLetra)); 

    palavrasASeremCriadas.split("").map(adicionarLetra);
}

// const boxLetras = document.getElementById("boxLetras");
// criarPalavras("Batatas batatam", boxLetras);


div = document.querySelector("#bioTitulo")
criarPalavras("Quem eu sou?", div)