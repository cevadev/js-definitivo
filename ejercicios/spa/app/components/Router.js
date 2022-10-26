/**
 * Manejamos la invocacion de las peticiones que debemos hacer dependiendo la seccion de contenido necesitada
 * Dependiendo de la seccion donde estamos generamos el contenido correspondiente
 */

import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

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
  } else if (hash.includes("#/search")) {
    // usamos includes() para que el hash si contiene #/search?search=valor... se aplique la funcionalidad de buscar
    $main.innerHTML = "<h2>Seccion del Buscador</h2>";
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Seccion del Contacto</h2>";
  } else {
    $main.innerHTML =
      "<h2>Aqui cargara el contenido de el main previamente seleccionado</h2>";
  }
  // ocultamos el loader
  doc.querySelector(".loader").style.display = "none";
}
