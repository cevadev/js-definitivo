/** Componente padre de toda la SPA
 *  Llamado de componentes para dibujar en pantalla la interface de usuario
 */

import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Posts } from "./components/Posts.js";
import { PostCard } from "./components/PostCard.js";

export function App() {
  const doc = document;
  const $root = doc.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  ajax({
    url: api.posts,
    cbSuccess: (posts) => {
      console.info(posts);
      let html = "";
      posts.forEach((post) => {
        return (html += PostCard(post));
      });
      // ocultamos el loader
      doc.querySelector(".loader").style.display = "none";
      doc.getElementById("posts").innerHTML = html;
    },
  });
}
