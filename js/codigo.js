const input_file = document.querySelector(".input-file");

input_file.accept = "image/png" // Sólo permite agregar archivos png

const input_text = document.querySelector(".input-text");

//input_text.minLength = 5;  Da un minimo de 5 caracteres para el input text

input_text.setAttribute (`minLength`, `5`)