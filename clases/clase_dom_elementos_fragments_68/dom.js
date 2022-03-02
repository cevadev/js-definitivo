/* Creando elementos (etiqueta html) dinámicamente en JS
 */
const $figure = document.createElement("figure");
const $image = document.createElement("img");
const $figCaption = document.createElement("figcaption");
const $figCaptionTextNode = document.createTextNode("Animals"); // texto para el figcaption

// seleccionamos el elemento para donde agregaremos la nueva tarjet que construimos dinamicamente
const $cards = document.querySelector(".cards");

// agregando al DOM los elementos
$image.setAttribute("src", "https://placeimg.com/200/200/animals");
$image.setAttribute("alt", "Animals");
$figure.classList.add("card");
//$figure.setAttribute("class", "card");

$figCaption.appendChild($figCaptionTextNode);
$figure.appendChild($image);
$figure.appendChild($figCaption);

$cards.appendChild($figure);

/**
 * Creacion de varios elementos dinamicamente
 */
const profeticos = ["Isaías", "Jeremías", "Ezequiel", "Daniel"];
const $ul = document.createElement("ul");

document.write("<h3>Libros profetas mayores</h3>");
document.body.appendChild($ul);

// recorremos el array y por cada item del array creamos un elemento li
profeticos.forEach((el) => {
  $li = document.createElement("li");
  // podriamos crear un TextNode o llamar a la propiedad textContent para agregar un texto al elemento li
  $li.textContent = el;
  // agregamos li al elemento ul
  $ul.appendChild($li);
});

/**
 * Creacion de varios elementos dinamicamente utilizando el metodo innerHTML
 */
const continentes = ["África", "Ámerica", "Asia", "Europa", "Oceanía"];
$ulContinentes = document.createElement("ul");
document.write("Continentes del mundo");

// importante al trabajar con innerHTML() debemos inicializar con null o un texto nuestro elemento
$ulContinentes.innerHTML = "";
continentes.forEach((el) => {
  $ulContinentes.innerHTML += `<li>${el}</li>`;
});

document.body.appendChild($ulContinentes);

/**
 * Fragments: Es como una variable a la cual podemos iterar y agregar contenido esto no evita interactuar directamente con el DOM
 * y hacerlos con el fragment. Una vez cargado nuestro fragment entonces hacer una sola inserción al DOM
 */
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const $ulMeses = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  // por cada item del array creamos un elementi li
  const $li = document.createElement("li");
  // agregamos el contenido al li
  $li.textContent = el;
  // agregamos al fragment el elmento li
  $fragment.appendChild($li);
});

document.write("Meses del año");
// agregamos al DOM el fragment
$ulMeses.appendChild($fragment);
document.body.appendChild($ulMeses);
