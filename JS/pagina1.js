function guardar() {
    const nombre = document.getElementById("nombre").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const error = document.getElementById("error");

    if (nombre === "") {
        error.textContent = "Por favor escribe tu nombre.";
        return;
    }

    error.textContent = "";
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("ciudad", ciudad);
    window.location.href = "pagina2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);