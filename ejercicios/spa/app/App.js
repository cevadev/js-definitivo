/** Componente padre de toda la SPA
 *  Llamado de componentes para dibujar en pantalla la interface de usuario
 */

import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");

  // antes de cargar el contenido limpiamos el elemento contenedor
  $root.innerHTML = null;
  // cabecera
  $root.appendChild(Header());
  // contenedor de los Posts
  $root.appendChild(Main());
  $root.appendChild(Loader());

  Router();
}
