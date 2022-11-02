/**
 * Manejamos la invocacion de las peticiones que debemos hacer dependiendo la seccion de contenido necesitada
 * Dependiendo de la seccion donde estamos generamos el contenido correspondiente
 */

import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
  const doc = document;
  const win = window;
  const $main = doc.getElementById("main");
  // destructuramos el objeto location y obtenemos la propiedad hash
  let { hash } = location;

  // limipiamos el contenedor
  $main.innerHTML = null;

  // si hash esta vacio o contiene #/, puede significar que estamos en el home
  if (!hash || hash === "#/") {
    await ajax({
      url: api.posts,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((post) => {
          return (html += PostCard(post));
        });

        $main.innerHTML = html;
      },
    });
    // si el hash o url incluye #/search
  } else if (hash.includes("#/search")) {
    // usamos includes() para que el hash si contiene #/search?search=valor... se aplique la funcionalidad de buscar
    // recuperamos del local storage la palabra a buscar
    let query = localStorage.getItem("wpSearch");
    // si no hay nada en la variable query, no salimos de las secciones de router
    if (!query) {
      // ocultamos el loader
      doc.querySelector(".loader").style.display = "none";
      return false;
    }

    // si query contiene datos
    await ajax({
      url: `${api.search}${query}`,
      cbSuccess: (search) => {
        let html = "";

        // validamos si la busqueda trae registros
        if (search.length === 0) {
          html = `
            <p class="error">No existen resultados de busqueda para la palabra <mark>${query}</mark></p>
          `;
        } else {
          // search trae datos
          search.forEach((post) => {
            return (html += SearchCard(post));
          });
        }

        $main.innerHTML = html;
      },
    });
  } // si el hash o url es igual a #/contacto
  else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion del Contacto</h2>";
  } else {
    $main.innerHTML =
      "<h2>Aqui cargara el contenido de el main previamente seleccionado</h2>";
    await ajax({
      url: `${api.post}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        $main.innerHTML = Post(post);
      },
    });
  }
  // ocultamos el loader
  doc.querySelector(".loader").style.display = "none";
}
