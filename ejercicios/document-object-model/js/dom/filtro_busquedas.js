const doc = document;

/**
 *
 * @param {*} input : elemento donde se ingresa el texto a buscar
 * @param {*} selector : el conjunto de elementos sobre el que se hara la busqueda (source)
 */
export default function searchFilters(input, selector) {
  doc.addEventListener("keyup", (e) => {
    // validamos si lo capturado con el evento coincide con lo contenido en el selector
    if (e.target.matches(input)) {
      // console.info(e.target.value);

      // si se presiona scape limpiamos el input
      if (e.key === "Escape") {
        e.target.value = "";
      }

      // buscamos por cada selector .card
      doc.querySelectorAll(selector).forEach((element) => {
        // para cada elemento con la clase .card su contenido textual estara en minusculas
        // buscamos si el texto del input se incluye en cada elemento con la clase .card
        element.textContent.toLowerCase().includes(e.target.value)
          ? element.classList.remove("filter")
          : element.classList.add("filter");
      });
    }
  });
}
