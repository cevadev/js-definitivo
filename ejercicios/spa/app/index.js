/** Archivo principal que desencadena toda la programacion de la SPA (no es un componente)
 *  Desencadena la invocacion hacia los demas componentes de la App
 *  Manejo de la delegacion de eventos
 *
 */
import api from "./helpers/wp_api.js";
import { App } from "./App.js";

// que se cargue el componente principal App cuando se cargue el documento en el DOM
document.addEventListener("DOMContentLoaded", App);

// escuchamos el evento que detecta un cambio en el hash (url) y volvemos a renderizar la app
window.addEventListener("hashchange", () => {
  // Cuando cambianos de vista o hash, inicializamos la variable page
  api.page = 1;
  App();
});
