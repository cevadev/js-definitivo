// la propiedad .className nos permite acceder a la cadena de texto del atributo class

// obtenemos la primera card que se encuentre en el arbol de documento
const $card = document.querySelector(".card");
console.info($card);

// accedemos al valor del atributo class
console.info($card.className);
console.info($card.classList);

// metodos del classList
// evaluamos si un elemento html tiene una clase en particular
console.info($card.classList.contains("card"));

// agregando una clase a un elemento
$card.classList.add("rotate-45");
console.info($card.className); // print card rotate-45

// eliminando una clase de un elemento
$card.classList.remove("rotate-45");
console.info($card.classList.contains("rotate-45"));

// metodo que agrega o elimina segun sea el caso
$card.classList.toggle("rotate-45");
console.info($card.classList.contains("rotate-45"));

// reemplazar una clase por otra
$card.classList.replace("rotate-45", "rotate-135");
console.info($card.classList);

$card.classList.add("opacity-80", "cepia");
console.info($card.classList);

$card.classList.remove("opacity-80", "cepia");
$card.classList.toggle("opacity-80", "cepia");
console.info($card.classList);
