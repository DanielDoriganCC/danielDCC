var anguloOrbita = 0

document.addEventListener("DOMContentLoaded", function() {

    function atualizar(){
        const cursorOrbitante = document.querySelector(".orbitante")

        if (cursorOrbitante != null){
            // determina distancia do centro
            const raio =  150

            cursorOrbitante.style.translate = ` ${Math.sin(anguloOrbita) * raio }% ${Math.cos(anguloOrbita) * raio }%`

            // aqui determina precisão da circunferência (quanto maior o denominador mais se parece um círculo)
            anguloOrbita = (anguloOrbita + Math.PI / 20 ) % (2 * Math.PI)
        }

        setTimeout(() => { atualizar() }, 150)
    }
    atualizar()


    // conferir se deve orbitar, se não se move há muito tempo

    const cursorOrbitante = document.querySelector("#cursor")

    var ultimaVez = 0

    document.addEventListener("mousemove", function()
    {
        ultimaVez = performance.now()
        cursorOrbitante.classList.remove("orbitante")
        cursorOrbitante.style.translate = "0% 0%"
    })

    function conferirOrbita(){
        if (performance.now() - ( 3000 + ultimaVez) > 0 ) // se não se move há 3s
            cursorOrbitante.classList.add("orbitante")

        setTimeout(() => { conferirOrbita() }, 3000) // conferir tempo de timeout
    }
    conferirOrbita()


})