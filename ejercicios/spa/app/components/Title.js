import api from "../helpers/wp_api.js";

export function Title() {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = `
        <a href="${
          api.domain
        }" target="_blank" rel="noopener">${api.name.toUpperCase()}</a>
    `;

  // retornamos el nodo almacenado en la variable $h1
  return $h1;
}
