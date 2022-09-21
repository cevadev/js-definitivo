/** Componente padre de toda la SPA
 *  Llamado de componentes para dibujar en pantalla la interface de usuario
 */

import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";

export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1>Bienvenidos a mi primer SPA con VanilaJS</h1>`;

  ajax({
    // al ejecutar el endpoint de los posts de wordpress, recibimos los posts y se lo pasamos al callback cbSuccess
    url: api.posts,
    cbSuccess: (posts) => {
      console.info(posts);
    },
  });

  ajax({
    url: api.categories,
    cbSuccess: (categories) => {
      console.info(categories);
    },
  });
}
