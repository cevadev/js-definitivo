const doc = document;

/**
 * themeBtn -> selector que representa al boton
 * classDark -> nombre de la clase que se a poner o quitar para que el elemento sea dark
 */
export default function darkTheme(themeBtn, classDark) {
  // almacenamos el selector del boton
  const $themeBtn = doc.querySelector(themeBtn);

  //obtengo todos los elementos que poseen el atributo data-dark que son los elementos que se veran afectados
  // por el tema dark
  const $selectors = doc.querySelectorAll("[data-dark]");

  // variable que controla la imagen de luna y sol
  let moon = "🌚";
  let sun = "🌞";

  doc.addEventListener("click", (event) => {
    if (event.target.matches(themeBtn)) {
      // evaluamos el contenido html del boton con a propiedad textContent
      if ($themeBtn.textContent === moon) {
        // agregamos la clase dark-mode a todos los elementos que poseen el data attribute data-dark

        // por cada selector que posee el data-dark le agregamos la clase dark-mode
        $selectors.forEach((element) => {
          element.classList.add(classDark);
        });
        $themeBtn.textContent = sun;
      } else {
        // ya estamos en el modo oscuro y qeremos retonar al modo claro
        $selectors.forEach((element) => {
          element.classList.remove(classDark);
        });
        $themeBtn.textContent = moon;
      }
    }
  });
}
