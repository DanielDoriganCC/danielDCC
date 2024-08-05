document.addEventListener("DOMContentLoaded", function() {
    let cardsProj = document.querySelectorAll(".cardProjeto")

    cardsProj.forEach(element => {
        element.addEventListener('click', function() {

            if (element.classList.contains("cardProjetoSelecionado")){
                element.classList.remove("cardProjetoSelecionado")


                // conferir esse código 
                // element.style.zIndex = 3;
                // setTimeout(() => { element.style.zIndex = 1 }, 0) // 150 no lugar do 0?

            }
            else
                element.classList.add("cardProjetoSelecionado")
        })

        // mouseout
        element.addEventListener('mouseleave', () => { 
            
            if (element.classList.contains("cardProjetoSelecionado"))
                element.classList.remove("cardProjetoSelecionado")

            // acho que o erro é isso pois define o z-index como 3 e logo depois 1 mesmo que não estivesse selecionado
            // element.style.zIndex = 3; // talvez o erro seja isso! 
            // setTimeout(() => { element.style.zIndex = 1 }, 0) // 150 no lugar do 0?
        })
    });
})




// CSS:

// z-index cubic-bezier(0, 0.67, 0.25, 1) 0.7s

// normal: 
// z-index: 1;

// hover:
// z-index: 10 !important;

// selecionado:
// z-index: 3 !important;

// JS:

// clicar no normal:


// sair do normal:

// problema: enquanto retorna, card deve estar em cima de todos
// hover deve ser maior do que todos tirando os que retornam
// projeto selecionado deve ser maior do que todos incluindo retornando


// quando volta por saída é comido
// as vezes quando alterna o hover é comido 