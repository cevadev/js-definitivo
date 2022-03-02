const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any" />
    <figcaption></figcaption>
`;
$newCard.classList.add("card");

// insertamos contenido html a la nueva tarjeta
$newCard.insertAdjacentHTML("afterbegin", $contentCard);
// insertamos texto en el figcaption
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// prepend: nos permite insertar contenido como primer hijo
// $cards.prepend($newCard);

// before: nos permite insertar contenido como hermano anterior
// $cards.before($newCard);

// append: nos permite insertar contenido como ultimo hijo
// $cards.append($newCard);

// after: nos permite insertar contenido como hermano posterior
$cards.after($newCard);
//$cards.insertAdjacentElement("afterbegin", $newCard);
