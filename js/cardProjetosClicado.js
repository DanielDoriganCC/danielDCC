document.addEventListener("DOMContentLoaded", function() {
    let cardsProj = document.querySelectorAll(".cardProjeto")

    cardsProj.forEach(element => {
        element.addEventListener('click', function() {

            if (element.classList.contains("cardProjetoSelecionado")){
                element.classList.remove("cardProjetoSelecionado")


                // conferir esse código 
                element.style.zIndex = 3;
                setTimeout(() => { element.style.zIndex = 1 }, 0) // 150 no lugar do 0?

            }
            else
                element.classList.add("cardProjetoSelecionado")
        })

        // mouseout
        element.addEventListener('mouseleave', () => { 
            element.classList.remove("cardProjetoSelecionado")

            // acho que o erro é isso pois define o z-index como 3 e logo depois 1 mesmo que não estivesse selecionado
            element.style.zIndex = 3; // talvez o erro seja isso! 
            setTimeout(() => { element.style.zIndex = 1 }, 0) // 150 no lugar do 0?
        })
    });
})




// sem click e sem hover: z-index

// hover: 

// selecionado: 3