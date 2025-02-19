<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script src="script.js"></script>
document.getElementById("confirmarAsistencia").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_matrimonio25", "template_CamyRod", {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value
    }).then(function(response) {
        alert("¡Confirmación enviada!");
    }, function(error) {
        alert("Error al enviar la confirmación.");
    });
});

