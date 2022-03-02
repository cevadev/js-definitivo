/**
 * La delegacion de eventos consiste en asignar a document el evento y luego
 * detectar que nodo produjo el evento y asignarle el comportamiento
 */

function flujoEventos(e) {
  console.info(
    `Hola te saluda ${this}, el click lo origino ${e.target.className}`
  );
  // ya no es necesario el stopPropagation ya que el evento ha sido adjuntato al document
  // que es el nodo superior en el DOM
}

// El listener del click lo asignamos al document
document.addEventListener("click", (e) => {
  // Preguntamos si el evento lo desencadena algun elemento div dentro de la clase .eventos-flujo
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  // Preguntamos si el evento lo desencadena el link <a></a>
  if (e.target.matches(".eventos-flujo a")) {
    console.info(`Hiciste click en ${e.target}`);
    e.preventDefault();
  }
});
