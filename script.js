document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("biography-title");
  const text = textElement.textContent; // Usar textContent para preservar espaços
  textElement.textContent = ""; // Limpa o texto existente

  let index = 0;
  const speed = 125;

  function typeWriter() {
      if (index < text.length) {
          textElement.textContent += text[index]; // Usar text[index]
          index++;
          setTimeout(typeWriter, speed);
      }
  }

  typeWriter();
});
