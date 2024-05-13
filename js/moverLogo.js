// var ultScroll = 1; // inibe primeira retração, impedindo erro
// const introducao = document.getElementById("introducao");


// introducao.style.backgroundPositionY = "15vh"

// window.addEventListener("scroll", () => {
//     const scroll = window.scrollY || document.documentElement.scrollTop;


//     introducao.style.backgroundPositionY = `${ parseFloat(introducao.style.backgroundPositionY) + (scroll - ultScroll) * 0.1  }vh`

//     console.log(`${ scroll - ultScroll}%`)

//     ultScroll = scroll;
// });

var ultScroll = 1; // inibe primeira retração, impedindo erro
const imgMovivel = document.getElementById("logoMovivel");

var PosicaoInicial = 50
var posicao = PosicaoInicial;
imgMovivel.style.top = `${PosicaoInicial}vh`

var deg = 0


window.addEventListener("scroll", () => {
    const scroll = window.scrollY || document.documentElement.scrollTop;

    posicao = posicao + (scroll - ultScroll) * 0.14   // calcula a posicao
    
    if (posicao < 90 + PosicaoInicial ){
        imgMovivel.style.top = `${ posicao }vh`
        imgMovivel.style.transform = `rotate( ${ (deg + posicao - PosicaoInicial ) * 4 }deg)` // subtrair posição inicial (50)
    }


    ultScroll = scroll;
});

