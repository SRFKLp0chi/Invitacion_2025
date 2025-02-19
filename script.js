document.getElementById("confirmarAsistencia").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    emailjs.send("service_matrimonio25", "template_CamyRod", {
        nombre: nombre,
        email: email
    }, "KHCoH9ezm2dDb_dW0")  // Asegúrate de colocar aquí tu API Key real
    .then(function(response) {
        alert("¡Confirmación enviada correctamente!");
    }, function(error) {
        alert("Error al enviar la confirmación. Revisa la consola.");
        console.error("Error:", error);
    });
});

