/**
 * Flujo de los eventos: es la manera como JS interpreta y trabaja con los eventos
 * Existe dos maneras como se van a propagar los eventos en JS
 * Los navegadores soportan por defectos la propagacion burbuja de eventos
 */

// capturamos todas las div dentro de la clase .eventos-flujo
const $divEventos = document.querySelectorAll(".eventos-flujo div");
console.info($divEventos);

function flujoEventos(e) {
  console.info(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

// a cada div le agregamos un listener
$divEventos.forEach((div) => {
  /**
   * click: evento
   * flujoEventos: function
   * boolean (especifica el modo de captura del evento): false, significa que utiliza la propagacion burbuja
   *        (del interno al externo)
   *         true: significa que utiliza la propagacion de captura (elemento externo al interno)
   * Para el caso de burbuja se puede agregar false u omitir, por defecto emplea burbuja
   */
  // div.addEventListener("click", flujoEventos, false); // fase burbuja
  // div.addEventListener("click", flujoEventos, true); // fase de captura

  // pasando un objeto options a addEventListener
  div.addEventListener("click", flujoEventos, {
    capture: false, // especificamos el metodo de captura (burbuja)
    once: true, // especificamos que el evento se ejecuta una sola vez
  });
});
