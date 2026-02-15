// Mostrar mensaje en la consola con mi nombre
console.log("Hola, mi nombre es Nazaret Claure Martinez");


// Obtener el botón
let boton = document.getElementById("btnEnviar");


// Capturar el evento click del botón
boton.addEventListener("click", function() {

    // Obtener el valor del input nombre
    let nombre = document.getElementById("nombre").value;

    // Mostrar alerta
    if(nombre === "") {
        alert("Por favor, escribe tu nombre ✨");
    } else {
        alert("Hola " + nombre + ", gracias por visitar mi página 🌸");
    }

});