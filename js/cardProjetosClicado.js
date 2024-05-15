document.addEventListener("DOMContentLoaded", function() {
    let cardsProj = document.querySelectorAll(".cardProjeto")

    cardsProj.forEach(element => {
        element.addEventListener('click', function() {

            if (element.classList.contains("cardProjetoSelecionado"))
                element.classList.remove("cardProjetoSelecionado")
            else
                element.classList.add("cardProjetoSelecionado")
        })

        // mouseout
        element.addEventListener('mouseleave', () => {
            element.classList.remove("cardProjetoSelecionado")
        })
    });
})