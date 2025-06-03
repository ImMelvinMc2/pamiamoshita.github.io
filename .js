document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-theme');
  const body = document.body;

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark');
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
});



function iniciarMusica() {
  const volumen = slider.value;
  music.volume = volumen;
  music.play().catch(e => {
    console.log("Autoplay bloqueado:", e);
  });
}

btnRegalo.addEventListener('click', () => {
  iniciarMusica();
  mostrarRegalo();
});

const music = document.getElementById("bg-music");
const slider = document.getElementById("volumen");

document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById("bg-music");
  const slider = document.getElementById("volumen");
  const btnRegalo = document.getElementById("btn-regalo");

  btnRegalo.addEventListener("click", () => {
    music.volume = slider.value;
    music.play().catch(e => console.log("Autoplay bloqueado:", e));
  });
});
// Estrellas animadas
function generarEstrellas(cantidad) {
  const fondo = document.getElementById('starry');
  for (let i = 0; i < cantidad; i++) {
    const estrella = document.createElement('div');
    estrella.classList.add('star');
    estrella.style.top = Math.random() * 100 + '%';
    estrella.style.left = Math.random() * 100 + '%';
    estrella.style.animationDuration = (1 + Math.random() * 2) + 's';
    fondo.appendChild(estrella);
  }
}
generarEstrellas(150);


const mensajesChat = [
  "Hola mi amor 💖",
  "¿Sabías que eres la mejor parte de mi día?",
  "Gracias por estar conmigo 🥺",
  "Te amito con todo mi corazón 💘",
  "Siempre tuyo, siempre mía, siempre nuestro 💍"
];

function mostrarChat() {
  const chat = document.getElementById('chat-romantico');
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < mensajesChat.length) {
      const burbuja = document.createElement('div');
      burbuja.className = 'chat-bubble';
      burbuja.textContent = mensajesChat[i];
      chat.appendChild(burbuja);
      i++;
    } else {
      clearInterval(intervalo);
    }
  }, 2000); // cada 2 segundos aparece uno
}
mostrarChat();


cambiarTema('tema-estrellas'); // Azul
cambiarTema('tema-oscuro'); // Oscuro
cambiarTema('tema-romantico'); // Rosa claro

const mensaje = "Felices 20 mi amoshitaaaa nangonaaaa";
const contenedor = document.getElementById('mensaje-feliz');
const texto = document.getElementById('texto-feliz');
contenedor.style.display = 'block';
texto.innerHTML = "";
let i = 0;
function escribir() {
  if (i <= mensaje.length) {
    texto.innerHTML = "<b>" + mensaje.slice(0, i) + "</b>";
    i++;
    setTimeout(escribir, 80);
  } else {
    texto.style.borderRight = "none";
  }
}
escribir();
