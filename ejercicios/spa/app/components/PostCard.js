export function PostCard(props) {
  /**
   * id: representa cada post individual dentro de wordpress
   * Necesitamos el id para que cuando se de click en ver publicacion se cargue el post seleccionado
   * Al momento que se de click en ver publicacion se almacenara en el local storage el id del post
   * en el contenido html del link ver publicacion agregamos un data-attribute (data-id) que almacena el id, cuando se da click
   * obtenemos el valor del data-attribute
   */
  let { date, id, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString();
  // si existe la propiedad wp:featuredmedia entonces cargamos su imagen si no existe cargamos favicon
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/globe-africa-32.png";

  /**
   * en una SPA todo el contenido se carga dinamicamente por lo que no podemos asignar un evento a un elemento que aun
   * no existe en DOM por lo que cuando carga el dom aun no existe el elemento a
   * Este problema lo podemos resolver por medio de la delegacion de eventos por lo que al objeto document del dom
   * le asignamos el evento click
   */
  document.addEventListener("click", (e) => {
    // cuando el elemento a href que origino un click no tenga la clase post-card, retorna false
    if (!e.target.matches(".post-card a")) {
      return false;
    }
    // si el enlace a href tiene como clase .post-card
    // obtenemos el data-id del enlace y lo almacenamos en el local storage
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id=${id}>Ver publicacion</a>
            </p>
        </article>
    `;
}
