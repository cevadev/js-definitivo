export function ContactForm() {
  const doc = document;
  // creamos un nodo
  const $form = doc.createElement("form");
  const $tyles = doc.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $tyles.innerHTML = `
    /* ***** Contact Form -  Validations ***** */
      .contact-form {
        --form-ok-color: #4caf50;
        --form-error-color: #f44336;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
      }

      /* aplicamos a todos los elementos hijos directos dentro del selector .contact-form*/
      .contact-form > * {
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
        width: 100%;
      }

      .speech-form > * {
        padding: 0.5rem;
        margin: 1rem auto;
        display: block;
      }

      .contact-form textarea {
        resize: none;
      }

      .contact-form legend,
      .contact-form-response {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
      }

      .contact-form input,
      .contact-form textarea {
        font-size: 1rem;
        font-family: sans-serif;
      }

      .contact-form input[type="submit"] {
        width: 50%;
        font-weight: bold;
        cursor: pointer;
      }

      /* a todos los elementos del formulario que tengan el atributo :placeholder aplicamos el estilo*/
      .contact-form ::placeholder {
        color: #000;
      }

      /* Validamos que los elementos del formulario (de clase .contact-form) tengan el atributo
     required, su contenido sea válido */
      .contact-form [required]:valid {
        border: thin solid var(--form-ok-color);
      }

      .contact-form [required]:invalid {
        border: thin solid var(--form-error-color);
      }

      .contact-form-error {
        margin-top: -1rem;
        /*pegadito al input*/
        font-size: 80%;
        background-color: var(--form-error-color);
        color: #fff;
        transition: all 800ms ease;
      }

      /*mostramos el error cuando tenga la clase .is-active*/
      .contact-form-error.is-active {
        display: block;
        animation: show-message 1s 1 normal 0s ease-out both;
      }

      .none {
        display: none;
      }

      .contact-form-loader {
        text-align: center;
      }

      @keyframes show-message {
        0% {
          visibility: hidden;
          opacity: 0;
        }

        100% {
          visibility: visible;
          opacity: 1;
        }
      }
  `;

  $form.innerHTML = `
    <legend>Envíanos tus comentarios</legend>
      <input
        type="text"
        name="name"
        placeholder="Escribe tu nombre"
        title="Nombre solo acepta letras y
           espacios en blanco"
        required
        pattern="^[A-Za-zÑñÁÉÍÓÚáéíóúü\\s]+$"
      />
      <input
        type="email"
        name="email"
        placeholder="Escribe tu correo"
        title="Email incorrecto"
        required
        pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"
      />
      <input
        type="text"
        name="subject"
        placeholder="Asunto a tratar"
        title="Asunto es requerido"
        required
      />
      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Escribe tus comentarios"
        required
        data-pattern="^.{1,255}$"
        title="Tu comentario no puede superar los 255 caracteres"
      ></textarea>
      <input type="submit" value="Enviar" />
      <!--clase none para que al momento del cargar el formulario no se muestren-->
      <div class="contact-form-loader none">
        <img
          src="../document-object-model/assets/three-dots.svg"
          alt="cargando"
        />
      </div>
      <div class="contact-form-response none">
        <p>Los datos han sido enviados</p>
      </div>
  `;

  function validationForm() {
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

    // interceptamos el evento submit que procesa el formulario
    doc.addEventListener("submit", (e) => {
      // prevenimos la accion automatica de submit. e representa el elemento qe lanza el evento
      // en este caso el elemento es el form
      e.preventDefault();

      // almacenamos la referencia del loader y el div de respuesta en el DOM
      const $loader = doc.querySelector(".contact-form-loader");
      const $response = doc.querySelector(".contact-form-response");

      // quitamos la clase none
      $loader.classList.remove("none");

      // realizamos una peticion fetchm pasando url y un obejto
      fetch("https://formsubmit.co/ajax/barcvilla@gmail.com", {
        method: "POST",
        /* el objeto FormData parsea el contenido de elemento/valor es decir, el input y el texto escrito
               para que elparseo se realice todos los inputs debe tener su attributo name establecidos*/
        body: new FormData(e.target),
      })
        // validamos si la respuesta es ok convertimos res en json
        // si no es ok, rechazamos la res
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        // procesamos nuestra respuesta con el objeto json
        .then((json) => {
          console.info(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${json.message}</p>`;
          $form.reset();
        })
        // procesamos si ocurre un error
        .catch((err) => {
          console.error(err);
          let message = err.statusText || "Ocurrió un error fatal";
          $response.innerHTML = `<p>Error ${err.status} : <b>${message}</b></p>`;
        })
        // luego de 3 segundos limpiamos los mensajes
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 8000);
        });
    });
  }

  // Esperamos que pase unos instantes para que el contenido se renderice y evitar errores de interaccion en la
  // programacion de elemento que se cargan dinamicamente
  setTimeout(() => validationForm(), 100);
  // como app se carga en el DomContentLoad podemos llamar desde aqui a validationForm la cual tambien se llama
  // desde el evento DomContentLoaded

  return $form;
}
