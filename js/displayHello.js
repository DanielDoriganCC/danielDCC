const paragrafo = document.getElementById('hello');
const text = 'hello, world!';
let index = 0;

function displayText() {
    paragrafo.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(displayText, 100 + getRandomInt(-50, 50) ); 
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

setTimeout(displayText, 600); // espera 900ms para começar

//displayText();
