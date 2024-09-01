// Texto digitado
const typedText = "Para tu 💖";
let index = 0;

function typeText() {
    if (index < typedText.length) {
        document.getElementById("typed-text").innerHTML += typedText.charAt(index);
        index++;
        setTimeout(typeText, 100); // velocidade da digitação
    }
}

typeText();

// Corações flutuantes
const heartsContainer = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // entre 3 e 5 segundos
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // remove o coração após 5 segundos
}

setInterval(createHeart, 300); // cria um coração a cada 300ms

// Música de fundo (opcional)
const music = document.getElementById('background-music');
music.volume = 0.5; // ajusta o volume
