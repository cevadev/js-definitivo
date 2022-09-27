/** Componente padre de toda la SPA
 *  Llamado de componentes para dibujar en pantalla la interface de usuario
 */

import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";

export function App() {
  const doc = document;
  const $root = doc.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Loader());
}
