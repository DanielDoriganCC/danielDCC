document.addEventListener("DOMContentLoaded", function() {
    let cardsProj = document.querySelectorAll(".cardProjeto")

    cardsProj.forEach(element => {
        element.addEventListener('click', function() {

            if (element.classList.contains("cardProjetoSelecionado")){
                element.classList.remove("cardProjetoSelecionado")
                element.style.zIndex = 3;
                setTimeout(() => { element.style.zIndex = 1 }, 150)
            }
            else
                element.classList.add("cardProjetoSelecionado")
        })

        // mouseout
        element.addEventListener('mouseleave', () => {
            element.classList.remove("cardProjetoSelecionado")
            element.style.zIndex = 3;
            setTimeout(() => { element.style.zIndex = 1 }, 150)
        })
    });
})