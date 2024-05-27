// fazer com que só funcione dentro de uma certa área para otimizar

document.addEventListener("DOMContentLoaded", function() {
    const oCursor = document.querySelector("#smallerCursor")

    var backs = document.querySelectorAll(' .efeitoFundo ');

    // como o tamanho é calculado dinamicamente, esse código é necessário
    // const cursorStyle = getComputedStyle(oCursor)
    // var cursorWidth = parseInt(cursorStyle.getPropertyValue("width"))
    // var offset = cursorWidth / 2
    var offset = 0;

    backs.forEach(back => {
        document.addEventListener("mousemove", function(event) {
            var xPos = event.clientX
            var yPos = event.clientY
        
            back.style.left = xPos - offset + "px"
            back.style.top = yPos - offset + "px"
            console.log(xPos)
        })
    });

    window.addEventListener("resize", function(){
        cursorWidth = parseInt(cursorStyle.getPropertyValue("width"))
        offset = cursorWidth / 2
    })
})