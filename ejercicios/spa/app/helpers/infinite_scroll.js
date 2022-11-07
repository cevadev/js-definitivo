import { ajax } from "./ajax.js";
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import api from "./wp_api.js";

export async function InfiniteScroll() {
  const doc = document;
  const win = window;

  // logica del infinite scroll
  // query -> si estamos en la ruta de busqueda, necesitamos obtener la palabra de busquedad guardada en localstorage
  let query = localStorage.getItem("wpSearch");

  // apiUrl -> contiene la url dependiendo si estamos en el home o el search. Dependiendo si estamos en el home o search
  let apiURl;

  // cargamos postcard o search card
  // component -> dependiendo de la ruta donde estemos, cargamos el componente search card o post card
  let Component; // componente de orden superior HOC

  win.addEventListener("scroll", async (e) => {
    // destructuramos algunas propiedades de la etiqueta html del dom. obtenemos la posicion con respecto al scroll top
    // heigh del contenido de la pagina para detectar cuando llegamos al final de la pagina
    // scrollheigh altura del scroll vertical
    let { scrollTop, clientHeight, scrollHeight } = doc.documentElement;

    // destructuramos del objeto location el hash ya que si estamos en el home cargamos componente postcard
    // si estamos en search cargamos el componente search card
    let { hash } = win.location;

    // scrollTop -> es la distancia que hay entre la barra del scroll vertical al margen superior
    // clientHeight -> altura del contenido
    // scrollHeight -> representa la altura completa que tiene la ventana del navegador
    // si es true -> significa que llegamos al final del scroll
    if (scrollTop + clientHeight >= scrollHeight) {
      api.page++;

      // si estamos en el home
      if (!hash || hash === "#/") {
        // al estar en el home, cargamos los posts pero la pagina siguiente
        apiURl = `${api.posts}&page=${api.page}`;
        // componente de orden superior. dependiendo de la ruta, Component reutiliza la logica de  Postcard
        Component = PostCard;
      }
      // si no es asi, si el hash incluye #/search quiere decir que estamos en alguna pagina de busqueda
      else if (hash.includes("#/search")) {
        apiURl = `${api.search}${query}&page=${api.page}`;
        Component = SearchCard;
      }
      // en cualquier otra pagina (no implementamos infinite scroll)
      else {
        return false;
      }

      // mostramos el loader
      doc.querySelector(".loader").style.display = "block";

      // funcion ajax que ejecuta la peticion
      await ajax({
        url: apiURl,
        cbSuccess: (posts) => {
          let html = "";
          posts.forEach((post) => (html += Component(post)));
          // insertamos al final del main los nuevos elementos
          doc.getElementById("main").insertAdjacentHTML("beforeend", html);
          // ocultamos el loader
          doc.querySelector(".loader").style.display = "none";
        },
      });
    }
  });
}
