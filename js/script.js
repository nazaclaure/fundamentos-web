console.log("Hola, mi nombre es Nazaret Claure Martinez");


let boton = document.getElementById("btnEnviar");


boton.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;

    if(nombre === "") {
        alert("Por favor, escribe tu nombre ✨");
    } else {
        alert("Hola " + nombre + ", gracias por visitar mi página 🌸");
    }

});