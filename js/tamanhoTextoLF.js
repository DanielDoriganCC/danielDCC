function adjustFontSize() {
    const box = document.getElementById('cardsLingFerrBox');

    const cards = box.querySelectorAll(".cardLingFerr")

    cards.forEach(element => {
        const container = element.querySelector(".lingFerrTitulo");
        let fontSize = 32; // começa tentando 2rem
        

        container.style.fontSize = fontSize + 'px';
        
        while (container.scrollHeight > container.clientHeight || container.scrollWidth > container.clientWidth) {
            fontSize--;
            container.style.fontSize = fontSize + 'px';
        }
    });

}

window.addEventListener('resize', adjustFontSize)
adjustFontSize(); // Adjust on initial load