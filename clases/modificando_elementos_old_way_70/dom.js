/**
 * Modificando elementos del DOM (vieja forma)
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

// $cards.appendChild($figure); // inserta el elemento al final

// reemplazamos un nodo del setion cards
// $cards.replaceChild($figure, $cards.children[2]);

// insertamos un elemento antes de un nodo que tomamos como referencia
// caso: Vamos a inserar nuestro nodo $figure antes del nodo tech del $cards
// $cards.insertBefore($figure, $cards.firstElementChild);

// Eliminamos el ultimo elemento
$cards.removeChild($cards.lastElementChild);

// cloneNode() funciona muy similar al importNode() solo que cloneNode() genera el contenido dinamicamente
// cloneNode(true) clona la estructura y todo el contenido de los hijos
// ejemplo: clonamos toda la seccion de cards
const $cloneCards = $cards.cloneNode(true);
// lo insertamos en el body del documento
document.body.appendChild($cloneCards);
