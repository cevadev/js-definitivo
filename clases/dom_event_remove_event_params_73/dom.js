/**
 * Pasando parametros a la funcion manejadora de eventos.
 * Toda funcion que sea un manejador de evento solo puede recibir como parametro event o el
 * evento en si
 */
const $eventoMultiple = document.querySelector("#evento-multiple");

function saludar(nombre = "quien sea usted") {
  console.info(`Hola ${nombre}`);
}
// la linea 12 llama a la funcion saludar pero no se toma el parametro por defecto
// $eventoMultiple.addEventListener("click", saludar);

// declarando una arrow function como funcion manejadora del evento
// llamamos a nuestra funcion saludar() y si le pasamos elparametro
$eventoMultiple.addEventListener("click", (event) => {
  saludar();
  saludar("Pedro");
  console.info(event);
});

$eventoMultiple.addEventListener("click", () => {
  console.info("Otro evento mas");
});

/**
 * Remover eventos con manejadores multiples
 */
const $eventoRemover = document.querySelector("#evento-remover");
// guardamos en una variable la funcion removedora
const removerDobleClick = (e) => {
  console.info(`Removiendo el evento ${e.type}`);
  console.info(e);
  // removemos la funcion manejadora
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
