const envelope = document.getElementById("envelope");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

function respuesta() {
  alert("Sabía que dirías que sí 😌💘");
}

// Movimiento del botón "No"
function moverBoton() {

  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth - 20;
  const maxY = cardRect.height - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop
noBtn.addEventListener("mouseenter", moverBoton);

// Móvil
noBtn.addEventListener("touchstart", moverBoton);
