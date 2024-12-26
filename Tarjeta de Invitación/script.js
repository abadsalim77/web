// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje, ' + document.getElementById('name').value + '!');
    this.reset();
});

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const graduationDate = new Date('2024-12-27T09:00:00'); // Fecha de la ceremonia
    const now = new Date();
    const timeDifference = graduationDate - now;

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Mostrar el conteo en el HTML
    countdownElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

    // Actualizar cada segundo
    setTimeout(updateCountdown, 1000);
}

// Iniciar el conteo
updateCountdown();