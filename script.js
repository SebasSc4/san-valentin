const envelope = document.getElementById("envelope");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const music = document.getElementById("bgMusic");

let musicStarted = false;

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");

  if (!musicStarted) {
    music.play();
    musicStarted = true;
  }
});

function respuesta() {
  alert("Sabía que dirías que sí 😌💘");
}

function moverBoton() {
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth - 20;
  const maxY = cardRect.height - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moverBoton);
noBtn.addEventListener("touchstart", moverBoton);
