document.addEventListener("DOMContentLoaded", function() {
    const oCursor = document.querySelector("#smallerCursor")

    // como o tamanho é calculado dinamicamente, esse código é necessário
    const cursorStyle = getComputedStyle(oCursor)
    var cursorWidth = parseInt(cursorStyle.getPropertyValue("width"))
    var offset = cursorWidth / 2

    document.addEventListener("mousemove", function(event) {
        var xPos = event.clientX
        var yPos = event.clientY
    
        oCursor.style.left = xPos - offset + "px"
        oCursor.style.top = yPos - offset + "px"
    })

    window.addEventListener("resize", function(){
        cursorWidth = parseInt(cursorStyle.getPropertyValue("width"))
        offset = cursorWidth / 2
    })
})


document.addEventListener("DOMContentLoaded", function() {
    const oCursor = document.querySelector("#cursor")

    // como o tamanho é calculado dinamicamente, esse código é necessário
    const cursorStyle = getComputedStyle(oCursor)
    var cursorWidth = parseInt(cursorStyle.getPropertyValue("width"))
    var offset = cursorWidth / 2

    document.addEventListener("mousemove", function(event) {
        var xPos = event.clientX
        var yPos = event.clientY
    
        setTimeout(function() {
            oCursor.style.left = xPos - offset + "px"
            oCursor.style.top = yPos - offset + "px"
        }, 100); // tempo de atraso para seguir o mouse
    })

    window.addEventListener("resize", function(){
        cursorWidth = parseInt(cursorStyle.getPropertyValue("width"))
        offset = cursorWidth / 2
    })
})