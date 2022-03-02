/**
 * BOM: Browse objet Model, son una serie de objetos que estan en el objeto window
 */

window.addEventListener("resize", (e) => {
  console.clear();
  console.info("***** Evento Resize Window *****");
  // innerWidth: ancho del view port de la ventana (parte visible)
  console.info(
    `wiewport width ${window.innerWidth} | height ${window.innerHeight}`
  );

  // tamaño de la ventana del navegador
  console.info(
    `window size width ${window.outerWidth} | height ${window.outerHeight}`
  );
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.info("***** Evento Scroll *****");
  // scrollX: scroll horizontal en pixels que significa cuanto se aleja la barra de desplazamiento horizontal del margin left
  console.info(`scrollX ${window.scrollX}`);
  // scrollX: scroll horizontal en pixels que significa cuanto se aleja la barra de desplazamiento horizontal del margin top
  console.info(`scrollY ${window.scrollY}`);
  console.info(e);
});

// Identificar la coordenada del screen se dibuja la ventana del navegador
// evento load se dispara cuando la ventana del navegador haya terminado de cargar
window.addEventListener("load", (e) => {
  console.info("***** Evento Load *****");
  console.info(`screenX ${window.screenX}`);
  console.info(`screenY ${window.screenY}`);
  console.info(e);
});

// Es una buena practica para cuando necesitamos que algo se cargue cuando el dom esta listo es mas eficiente
// trabajar con el evento DOMContentLoaded
document.addEventListener("DOMContentLoaded", (e) => {
  console.info("***** Evento DOMContentLoaded *****");
  console.info(`screenX ${window.screenX}`);
  console.info(`screenY ${window.screenY}`);
  console.info(e);
});
