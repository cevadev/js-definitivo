/**
 * Buscador que trabaja con el motor de busqueda de Wordpress
 */
export function SearchForm() {
  const doc = document;
  const $form = doc.createElement("form");
  const $input = doc.createElement("input");
  $form.classList.add("search-form");

  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";

  $form.appendChild($input);

  // si en el hash de la url se incluye la palabra search, el input conserva el valor del local storage
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  // cuando al input  de tipo search se le hace click en la x automaticamente se limpia, ese evento se llama search
  doc.addEventListener("search", (e) => {
    // detectamos que sea el input quien desencadena el evento
    if (!e.target.matches("input[type='search']")) {
      return false;
    }

    // cuando ya no tenga nada el valor del input eliminamos la variable en el local storage
    if (!e.target.value) {
      localStorage.removeItem("wpSearch");
    }
  });

  /**
   * Recordemos que cada vez que cambia el hash (url) la app se renderiza por lo que vamos hacer un cambio en el hash
   * hacia la ruta de busqueda y cuando eso ocurra enviamos el endpoint buscado
   * Delegamos el evento submit al document
   */
  doc.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) {
      return false;
    }
    e.preventDefault();
    // guardamos en el local storage lo que el input search contenga
    localStorage.setItem("wpSearch", e.target.search.value);
    // cambiamos el hash para que la app detecte un cambio y vuelva a renderizar la app con la info de la busqueda
    // Hay 2 forma de modificar las rutas en una SPA, una forma es lo visto en el ejemplo de ver un post en particular
    // la segunda forma es por el paso de parametros en la url. ahora aplicaremos la segunda forma
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
