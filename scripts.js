// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Verifica si el tamaño de la pantalla cambia
    window.addEventListener("resize", function() {
        // Llama a la función para ajustar los elementos
        adjustElements();
    });

    // Llama a la función al cargar la página
    adjustElements();
});

// Función para ajustar los elementos según el tamaño de la pantalla
function adjustElements() {
    const screenWidth = window.innerWidth;

    // Verifica si la pantalla es de tamaño pequeño (por ejemplo, tamaño de celular)
    if (screenWidth < 768) {
        // Aplica estilos específicos para dispositivos móviles

        // Por ejemplo, podrías cambiar el tamaño del encabezado
        const header = document.querySelector("header");
        header.style.padding = "10px 0";

        // También podrías ajustar el tamaño del texto para que sea más legible en dispositivos móviles
        const h1 = document.querySelector("h1");
        h1.style.fontSize = "24px";

        // Además, podrías ajustar el tamaño de los elementos de la sección de ejercicios
        const exercises = document.querySelectorAll(".exercise");
        exercises.forEach(exercise => {
            exercise.style.padding = "15px";
        });

        // Ajustar tamaño de las imágenes
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            img.style.width = "100%";
            img.style.height = "auto";
        });
    } else {
        // Restaura los estilos originales si la pantalla es más grande
        const header = document.querySelector("header");
        header.style.padding = "20px 0";

        const h1 = document.querySelector("h1");
        h1.style.fontSize = "36px";

        const exercises = document.querySelectorAll(".exercise");
        exercises.forEach(exercise => {
            exercise.style.padding = "20px";
        });

        // Restaurar tamaño original de las imágenes
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            img.style.width = "";
            img.style.height = "";
        });
    }
}
