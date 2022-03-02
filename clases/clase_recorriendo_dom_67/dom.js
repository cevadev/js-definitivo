// el API del DOM nos ofrece una serie de propiedades para tomar como referencia un NODE
// y poder recorrer diferentes elementos.

const $cards = document.querySelector(".cards");
console.info($cards);

// accedemos a los hijos del elemento con clase cards
console.info($cards.children);

// accdemos a un hijo en particular
console.info($cards.children[0]);

// retornamos el padre de cards
console.info($cards.parentElement); // main

// obteniendo el primer y ultimo elemento hijo
console.info($cards.firstElementChild);
console.info($cards.lastElementChild);

// acceder a elemento hermano antes y el elemento hermano después
console.info($cards.previousElementSibling);
console.info($cards.nextElementSibling);

// closest() es un metodo busca el padre mas cercano del tipo de selector declarado
// nos ubicamos en el tercer hijo de cards, buscamos la etiqueta section ancestral mas cercana
console.info($cards.children[3].closest("body"));
