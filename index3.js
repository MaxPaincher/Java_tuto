let frasesFrikisInformatica = [
    "Los programadores no tienen errores, solo experiencias inesperadas.",
    "La programación es como montar en bicicleta: una vez que lo aprendes, nunca lo olvidas.",
    "En la informática, el único límite es la imaginación (y la memoria RAM).",
    "Los programadores no duermen, solo hacen pausas de ejecución.",
    "La mejor forma de resolver un problema es dividirlo en problemas más pequeños.",
    "Programar es como cocinar: a veces, una pizca de creatividad hace la diferencia.",
    "En la programación, cada punto y coma cuenta.",
    "El código es como el vino: mejora con el tiempo (y las revisiones).",
    "La resolución de problemas es la habilidad más importante en la programación."]

    function cambiarTexto() {
    let indice= Math.floor(Math.random() * frasesFrikisInformatica.length);
    
let texto = document.getElementById('txt_informatica');

texto.textContent = frasesFrikisInformatica[indice];
}
// Asignar evento al botón
document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById("ver_mas");
    boton.addEventListener("click", cambiarTexto);
  });