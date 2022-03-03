const doc = document;
const localS = localStorage;

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

  const lightMode = () => {
    // ya estamos en el modo oscuro y qeremos retonar al modo claro
    $selectors.forEach((element) => {
      element.classList.remove(classDark);
    });
    $themeBtn.textContent = moon;
    // guardamos el valor light en el localstorage
    localS.setItem("theme", "light");
  };

  const darkMode = () => {
    // agregamos la clase dark-mode a todos los elementos que poseen el data attribute data-dark
    // por cada selector que posee el data-dark le agregamos la clase dark-mode
    $selectors.forEach((element) => {
      element.classList.add(classDark);
    });
    $themeBtn.textContent = sun;
    // guardamos el valor dark en el localstorage
    localS.setItem("theme", "dark");
  };

  doc.addEventListener("click", (event) => {
    if (event.target.matches(themeBtn)) {
      // evaluamos el contenido html del boton con a propiedad textContent
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  /* ****** Trabajando con el localStorage ****** */
  // Para trabajar con el localStorage necesitamos dos metodos
  // un metodo para obtener o recuperar una variable de tipo localStorage
  // un metodo para actualizar o establecer (settter) un valor en el localStorage

  /**
   * Necesitamos escuchar un evento DOMContentLoaded ya que al momento de cargar la app
   * la app debe ir y preguntar al localstorage si existe una variable que maneja el theme de la app
   * y en base al valor de la variable aplicamos los estilos correspondientes
   */
  doc.addEventListener("DOMContentLoaded", (event) => {
    // cuando se cargue el documento debemos preguntar su existe una variable (item) de tipo localStorage
    if (localS.getItem("theme" === null)) {
      // establecemos una variable theme para manejar el tema de la app
      localS.setItem("theme", "light");
    }
    if (localS.getItem("theme") === "light") {
      // aplicamos el tema claro
      lightMode();
    }
    if (localS.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
