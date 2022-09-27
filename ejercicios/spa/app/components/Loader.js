export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "app/assets/loader.gif";
  $loader.alt = "Cargando...";

  // agregamos clase de estilos al componente
  $loader.classList.add("loader");

  return $loader;
}
