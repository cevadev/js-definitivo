const doc = document;

export default function contactFormValidation() {
  // detectamos nuestro form
  const $form = doc.querySelector(".contact-form");
  // recuperamos todos los inputs dentro del contact-form que sean requeridos
  const $inputs = doc.querySelectorAll(".contact-form [required]");

  // por cada input
  $inputs.forEach((input) => {
    const $span = doc.createElement("span");
    $span.id = input.name;
    // el title del input trae el mensaje de error
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  // realizamos las validacion al ejecutarse el evento keyup
  doc.addEventListener("keyup", (e) => {
    // la delgacion de evento ocurrira cuando el evento lo dispare un elemento (dentro de .contact-form)
    // con el selector required
    if (e.target.matches(".contact-form [required]")) {
      // almacenamos los elementos que originan el evento
      let $input = e.target;
      // obtenemos el valor del atributo pattern del input, si el input no tiene patter como es el caso del
      // textarea accedemos al data attribute
      let pattern = $input.pattern || $input.dataset.pattern;
      //console.info($input, pattern);

      // 1er caso de validación: cuando la variable pattern sea true
      if (pattern && $input.value !== "") {
        //console.info("El input tiene patron");
        let regex = new RegExp(pattern);
        // si no se valida el patron, mostramos el span con el error
        return !regex.exec($input.value)
          ? doc.getElementById($input.name).classList.add("is-active")
          : doc.getElementById($input.name).classList.remove("is-active");
      }

      // 2do caso de validación: cuando no se tiene patron
      if (!pattern) {
        //console.info("El input NO tiene patron");
        return $input.value === ""
          ? doc.getElementById($input.name).classList.add("is-active")
          : doc.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
}
