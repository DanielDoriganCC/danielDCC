document.addEventListener("DOMContentLoaded", function () {

    // função ativada quando o elemento é visto
    function handleIntersection(entries, observer) {
        entries.forEach(async entry => {

            if (entry.isIntersecting) { // escreva aqui o código para lidar com a observação 

                letras.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add("letraPulando");
                    }, index * 100); // delay de 100ms em ordem para cada elemento
                });

                observer.unobserve(entry.target); // Para de observar o elemento, ou seja, só o observa uma vez

            }

        });
    }

    // Cria o observador
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.6, // Quando for visível 60% do conteúdo
    });


    const letras = document.querySelectorAll(".letras-da-palavra")

    // Seleciona as mensagens
    const titulo = document.querySelector("#bioTitulo");
    observer.observe(titulo);
});