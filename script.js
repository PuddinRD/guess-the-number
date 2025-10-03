// Número aleatorio que el usuario debe adivinar
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Número de intentos del usuario
let intentos = 0

// Referencias a elementos del DOM
let inputNumero = document.getElementById('guessInput');
let botonEnviar = document.getElementById('submitBtn');
let mensaje = document.getElementById('message');
let contadorIntentos = document.getElementById('attempts');
let botonReiniciar = document.getElementById('restartBtn');

// Conectar con elementos del DOM
inputNumero = document.getElementById('guessInput');
botonEnviar = document.getElementById('submitBtn');
mensaje = document.getElementById('message');
contadorIntentos = document.getElementById('attempts');
botonReiniciar = document.getElementById('resetBtn');

// Agregar event listener al botón Enviar
botonEnviar.addEventListener('click', verificarSuposicion);

// Agregar event listener al botón Reiniciar
botonReiniciar.addEventListener('click', reiniciarJuego);

homebtn = document.getElementById('homeBtn');
homebtn.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/'; // Ajusta la ruta según la ubicación de tu archivo index.html
});

// Función que verifica la suposición del usuario
function verificarSuposicion() {
    // Obtener el valor del input
    let suposicion = parseInt(inputNumero.value);
    
    // Validar que el input no esté vacío
    if (isNaN(suposicion)) {
        mensaje.textContent = "Por favor ingresa un número válido";
        return;
    }
    
    // Validar que el número esté entre 1 y 100
    if (suposicion < 1 || suposicion > 100) {
        mensaje.textContent = "El número debe estar entre 1 y 100";
        return;
    }
    
    // Incrementar intentos
    intentos++;
    
    // Comparar con el número secreto
    if (suposicion === numeroSecreto) {
        mensaje.textContent = `¡Correcto! El número era ${numeroSecreto}. Lo adivinaste en ${intentos} intentos.`;
        mensaje.style.color = "green";
        botonEnviar.disabled = true; // Deshabilitar botón después de ganar
    } else if (suposicion > numeroSecreto) {
        mensaje.textContent = "Muy alto! Intenta con un número más bajo.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Muy bajo! Intenta con un número más alto.";
        mensaje.style.color = "red";
    }
    
    // Actualizar contador de intentos
    contadorIntentos.textContent = `Intentos: ${intentos}`;
    
    // Limpiar el input para el próximo intento
    inputNumero.value = "";
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    mensaje.textContent = "";
    mensaje.style.color = "black";
    contadorIntentos.textContent = "Intentos: 0";
    inputNumero.value = "";
    botonEnviar.disabled = false; // Habilitar botón de nuevo
}

// Para ver el número secreto en la consola (solo para desarrollo)
console.log("Número secreto:", numeroSecreto);