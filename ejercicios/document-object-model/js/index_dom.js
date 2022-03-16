import hamburgerMenu from "./dom/menu_hamburguesa.js";
// como no se hace un export default en reloj.js usamos la destructuracion
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";
import scrollTopBtn from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responisve.js";
import userDeviceInfo from "./dom/detección_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webcam from "./dom/deteccion_webcam.js";
import geoLocation from "./dom/geolocalizacion.js";

const doc = document;

// evento DOMContentLoaded que se detecta a la carga del documento
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
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/embed/gI-OKJJ9pnQ" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/gI-OKJJ9pnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/emy7e9F97FjzSCRp6" target="_blank" rel="noopener">Ver Link</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307701474162!2d-99.16875904127807!3d19.42702449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2sar!4v1646344011460!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  geoLocation("geolocation");
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

// invocamos fuera el darkTheme() para que puede escucha el evento DOMContentLoaded
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
