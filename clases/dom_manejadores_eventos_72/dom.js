/**
 * Los eventos son mecanismos que nos permiten controlar las acciones de los usuarios y definir
 * ciertos comportamiento del documento html
 */
// la funcion holaMundo se convierte en un manejador de evento porque esta funcion se ejecuta en el evento
// onClick
function holaMundo() {
  console.info("Hola mundo Javascript");
  // accedemos al evento donde se ejecuta esta funcion
  /**
   * target: indica el objeto que originó el evento en nuestro caso un button
   * type: tipo de evento, en nuestro caso click
   */
  console.info(event);
}

/**
 * Los eventos semanticos tienen una limitante: una vez que hemos definido el evento semantico
 * el elemento solo podra ejecutar una funcion
 */

// apuntamos al button
const $eventoSemantico = document.querySelector("#evento-semantico");
const $eventoMultiple = document.querySelector("#evento-multiple");
// asignamos la funcion holaMundo al evento onClick, es importante llamar a la funcion pero sin parentesis
// si colocamos los parentesis cuando se carge la pagina se llamara al evento
$eventoSemantico.onclick = holaMundo;

// asignamos una nueva funcion al evento onclick pero ya no se aplicara la funcion de la linea 26 sino
// que se asigna la nueva funcion anonima que creamos
// toda función que se ejecuta en un evento solo puede recibir el parametro event y ningun otro
$eventoSemantico.onclick = function (event) {
  console.info("hola mundo JS");
  console.info(event);
};

/**
 * Evento multiple: quiere decir ejecutar varias funciones definidas en diferentes manejadores
 * al mismo evento. A diferencia del ejemplo de evento-semantico la funcion holaMundo fue
 * reemlazada por la funcion anonima, pero con el manejador de eventos multiples
 * podremos llamar a varias funciones
 */

// agregamos un listener al elemento
/**
 * click. nombre del evento al que va a escuchar
 * holaMundo. funcion que llamamos a ejecutar
 */
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (event) => {
  console.info("Adios mundo JS");
  console.info(event);
  console.info(event.type);
  console.info(event.target);
});
