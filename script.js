document.addEventListener("DOMContentLoaded", function () {
    const enviar = document.getElementById("enviar");


    enviar.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fecha = document.getElementById("fecha").value;

    const formData = {
        nombre: nombre,
        apellido: apellido,
        fecha: fecha
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Se ha enviado el formulario correctamente!");

        // Captura de pantalla de la consola para mostrar la respuesta del servidor
        console.log(data);
    })
    .catch(error => {
        console.error("Error al enviar formulario:", error);
        alert("Error al enviar formulario");
    });
});
});