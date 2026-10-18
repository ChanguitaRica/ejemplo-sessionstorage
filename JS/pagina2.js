function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");
    const ciudad = sessionStorage.getItem("ciudad");
    const saludo = document.getElementById("saludo");

    if (nombre === null) {
        saludo.textContent = "No hay ningún nombre guardado.";
    } else if (ciudad === null || ciudad === "") {
        saludo.textContent = "Hola, " + nombre;
    } else {
        saludo.textContent = "Hola, " + nombre + ", de " + ciudad;
    }
}

function borrar() {
    sessionStorage.removeItem("nombre");
    mostrarNombre();
}

function borrarTodo() {
    sessionStorage.clear();
    mostrarNombre();
}

document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);
document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo); ë