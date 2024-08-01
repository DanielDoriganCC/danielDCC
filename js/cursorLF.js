// possíveis melhorias:
// somente se mover se estiver segurando o cursor

let boxCursorLingFerr = document.getElementById("boxCursorLingFerr")
let cursorLingFerr = document.getElementById("cursorLingFerr")

var estado = "C"
boxCursorLingFerr.onmousemove = e => {

    if (isLeftMouseButtonPressed){
        cursorLingFerr.style.transition = ""

        const cursorLFStyle = getComputedStyle(cursorLingFerr)

        // pega o valor mínimo e máximo
        const rect = boxCursorLingFerr.getBoundingClientRect()
        const LFmin = rect.left 
        const LFmax = rect.right

        const posicao = e.clientX - LFmin 
        var esquerda = 0

        if (posicao < 0)
            esquerda = `0px - ${parseInt(cursorLFStyle.height) / 2}`
        else{
            if (posicao > LFmax - LFmin)
                esquerda = `${LFmax - LFmin- parseInt(cursorLFStyle.height) / 2}px`
            else{
                esquerda = `${posicao - parseInt(cursorLFStyle.height) / 2}px`
            }
        }

        cursorLingFerr.style.left = esquerda

        const posicaoPorCento = (e.clientX - LFmin)/(LFmax - LFmin) * 100
   

        if (posicaoPorCento < 33.33)
            estado = "E"
        else if (posicaoPorCento > 66.66)
            estado = "D"
        else
            estado = "C"

        const cardsLingFerrBox = document.getElementById("cardsLingFerrBox")
        if (estado == "E"){
            cursorLingFerr.style.backgroundColor = "#121e1a"
            cardsLingFerrBox.classList.remove("naoLinguagem")
            cardsLingFerrBox.classList.add("naoFerramenta")
        }
        else if (estado == "C"){
            cursorLingFerr.style.backgroundColor = "rgb(23, 23, 23)"
            cardsLingFerrBox.classList.remove("naoLinguagem")
            cardsLingFerrBox.classList.remove("naoFerramenta")
        }
        else{
            cursorLingFerr.style.backgroundColor = "#171d30"
            cardsLingFerrBox.classList.remove("naoFerramenta")
            cardsLingFerrBox.classList.add("naoLinguagem")
        }
    }
    else{
        // pega o valor mínimo e máximo
        const rect = boxCursorLingFerr.getBoundingClientRect()
        const LFmin = rect.left 
        const LFmax = rect.right
        const cursorLFStyle = getComputedStyle(cursorLingFerr)
    
        if (estado == "E"){
            cursorLingFerr.style.left = `${- parseInt(cursorLFStyle.height) / 2}px`
        } else if (estado == "C"){
            cursorLingFerr.style.left = `${(LFmax - LFmin)/2 - parseInt(cursorLFStyle.height) / 2}px`
        } else{
            cursorLingFerr.style.left = `${LFmax - LFmin - parseInt(cursorLFStyle.height) / 2}px`
        }
    
        cursorLingFerr.style.transition = "left 0.3s linear"
    }

}


boxCursorLingFerr.onmouseleave = e =>{
    // pega o valor mínimo e máximo
    const rect = boxCursorLingFerr.getBoundingClientRect()
    const LFmin = rect.left 
    const LFmax = rect.right
    const cursorLFStyle = getComputedStyle(cursorLingFerr)

    if (estado == "E"){
        cursorLingFerr.style.left = `${- parseInt(cursorLFStyle.height) / 2}px`
    } else if (estado == "C"){
        cursorLingFerr.style.left = `${(LFmax - LFmin)/2 - parseInt(cursorLFStyle.height) / 2}px`
    } else{
        cursorLingFerr.style.left = `${LFmax - LFmin - parseInt(cursorLFStyle.height) / 2}px`
    }

    cursorLingFerr.style.transition = "left 0.3s linear"
}

boxCursorLingFerr.onmouseenter = e => {
    cursorLingFerr.style.transition = ""
}

// conferir se botão esquerdo está sendo pressionado
// crédito: https://stackoverflow.com/questions/4065992/jquery-detecting-pressed-mouse-button-during-mousemove-event

let isLeftMouseButtonPressed = false;

document.addEventListener('mousedown', function(event) {
    if (event.button === 0) { 
        isLeftMouseButtonPressed = true;
    }
});

document.addEventListener('mouseup', function(event) {
    if (event.button === 0) { 
        isLeftMouseButtonPressed = false;
    }
});