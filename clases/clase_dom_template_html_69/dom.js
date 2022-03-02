/**
 * Templates HTML: La etiqueta <template></template> nos ofrece un modelo a seguir. Un template nos permite
 * estructurar el contenido html que queremos que JS lo aplque dinamicamente. Los template
 * son otra manera de poder interactuar con el DOM
 */

const $cards = document.querySelector(".cards");
// creamos una referencia al contenido del template
const $template = document.querySelector("#template-card").content;
const $fragment = document.createDocumentFragment();

const cardContent = [
  {
    title: "Tecnología",
    img: "https://placeimg.com/200/200/tech",
  },
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },
];

// procesamos el array
cardContent.forEach((el) => {
  // dentro de la variable $template ya tenemos toda la estructura html
  // asignamos valores a los atributos de los elementos dentro del template
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title),
    ($template.querySelector("figcaption").textContent = el.title);

  // tenemos una sola etiqueta template lo que en teoria sería para un solo card
  // pero queremos emplear el template para las demas tarjetas del array para ello
  // debemos clonar el nodo donde esta el template y toda su estructura
  $templateClone = document.importNode($template, true); // con true indicamos clonar toda la estructura
  $fragment.appendChild($templateClone);
});

// al completarse el $frament con las cards lo agregamos al elemento con clase cards
$cards.appendChild($fragment);
