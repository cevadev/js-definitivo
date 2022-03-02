import hamburgerMenu from "./dom/menu_hamburguesa.js";
// como no se hace un export default en reloj.js usamos la destructuracion
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopBtn from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";

const doc = document;

// evento DOMContentLoaded que hace la carga del documento
doc.addEventListener("DOMContentLoaded", (e) => {
  // el selector es un botton con la clase panel-btn y el elemento a mover es el aside con la clase panel
  // .menu a -> hace referencia a cualquier elemento del selector .menu de tipo a (link)
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  // activamos reloj digital
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  // activamos la alarma
  alarm(
    "assets/alarma-morning-mix.mp3",
    "#iniciar-alarma",
    "#desactivar-alarma"
  );
  countDown("countdown", "Febrero 28, 2023", "Feliz Cumpleaños a mi");
  scrollTopBtn(".scroll-top-btn");
  darkTheme(".dark-theme-btn", "dark-mode");
});

/**
 * La deteccion de los eventos del teclado debe asgnarse al nodo raiz, es decir, al document
 * Eventos del teclado: entre los mas frecuentes son:
 * keyup : se lanza este evento cuando soltamos o dejamos de presionar una tecla
 * keydown : se lanzas este evento cuando presionamos una tecla
 * keypress : se lanza este evento mientras mantenemos presionado una tecla
 */
doc.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
