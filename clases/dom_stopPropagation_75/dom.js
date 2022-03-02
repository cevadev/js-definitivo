/**
 * Normalmente en JS los eventos se propagan ya sea a los padres o hijos sin embargo hay casos
 * en donde no queremos dicha propagación.
 */

// capturamos todas las div dentro de la clase .eventos-flujo
const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.info($divEventos);

// obtenemos el primer enlace dentro de la clase eventos-flujo
const $linkEventos = document.querySelector(".eventos-flujo a");
console.info($linkEventos);

function flujoEventos(e) {
  console.info(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
  // stopPropagation: elimina la propagacion
  e.stopPropagation();
}

// a cada div le agregamos un listener
$divEventos.forEach((div) => {
  // pasando un objeto options a addEventListener
  div.addEventListener("click", flujoEventos, {
    capture: false, // especificamos el metodo de captura (burbuja)
    once: false, // especificamos que el evento se ejecuta una sola vez
  });
});

// aplicamos un evento al link
$linkEventos.addEventListener("click", (e) => {
  console.info("Hola a todo el mundo JS");
  // preventDefault: cancela el evento por defecto que tiene el elemento, en el caso de una etiqueta a
  // sera llamar a su propiedad href
  e.preventDefault();
  e.stopPropagation();
});
