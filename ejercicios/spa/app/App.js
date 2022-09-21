/** Componente padre de toda la SPA
 *  Llamado de componentes para dibujar en pantalla la interface de usuario
 */

import api from "./helpers/wp_api.js";

export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1>Bienvenidos a mi primer SPA con VanilaJS</h1>`;

  console.info(api);
}
