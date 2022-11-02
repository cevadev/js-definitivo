export function Main() {
  const $main = document.createElement("main");
  $main.id = "main";
  /**
   * Aplicamos el grid-fluid para pintar los post que se muestran al cargar el home
   * cuando no nos encontremos en la seccion de busqueda entonces que agregue la clase grid-fluid
   */
  if (!location.hash.includes("#/search")) {
    $main.classList.add("grid-fluid");
  }
  return $main;
}
