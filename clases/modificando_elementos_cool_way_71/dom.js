/**
 * .insertAdjacent...
 *   .insertAdjacentElement(position, el)
 *   .insertAdjacentHTML(position, html)
 *   .insertAdjacentText(position, text)
 *
 * Posiciones:
 *   beforebegin(hermano anterior) insert el element, html o text como hermano anterior
 *   afternegin(primer hijo) // el primer elemento hijo de ese node que es nuestra referencia
 *   beforeend(ultimo hijo) // el ultimo hijo
 *   afterend(hermano siguiente)
 */

const $cards = document.querySelector(".cards");

const $image = document.createElement("img");
const $figure = document.createElement("figure");
const $figCaption = document.createElement("figcaption");
const $figCaptionTextNode = document.createTextNode("Any"); // texto para el figcaption

// agregando al DOM los elementos
$image.setAttribute("src", "https://placeimg.com/200/200/any");
$image.setAttribute("alt", "Any");
$figure.classList.add("card");
//$figure.setAttribute("class", "card");

$figCaption.appendChild($figCaptionTextNode);
$figure.appendChild($image);
$figure.appendChild($figCaption);

// vamos a insertar una nueva card dentro del section cards con los metodos mencionados arriba
// beforebegin: ubicara al elemento $figure antes de la section $cards que es nuestro nodo de referencia
// es decir, $figure se ubicara entre el link DOM y el nodo cards
// $cards.insertAdjacentElement("beforebegin", $figure);

// afterbegin: nuestro elemento $figure se insertará despues de la etiqueta<section> del nodo cards
// es decir, aparecerá al inicio
$cards.insertAdjacentElement("afterbegin", $figure);

// beforeend: nuestro elemento $figure se insertará antes de la etiqueta </section> del nodo cards
// es decir, aparecerá al final
// $cards.insertAdjacentElement("beforeend", $figure);

// afterend: nuestro elemento $figure se colocará
// $cards.insertAdjacentElement("afterend", $figure);
