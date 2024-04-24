// inspired by hiperplexed
// lembre-se de adicionar espaço entre as palavras

const criarPalavra = (texto, indiceLetra) => {
    const textoSpan = document.createElement("span");
    textoSpan.innerHTML = `${texto}`;
    textoSpan.classList.add("palavra-span");
    return textoSpan;
}

function criarFrase(palavras, div) {
    const adicionarPalavra = (texto, indicePalavra) => div.appendChild(criarPalavra(texto, indicePalavra)); 

    palavras.split(" ").map(adicionarPalavra);
}


