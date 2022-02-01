// Los data-attributes son atributos personalizado que podemos crear y añadirlos en la etiqueta html
// para crear un data-attribute es necesario que el atributo inice con data-

/*
    Existen 2 forma de llamar a los atributos y de establecerles valores
*/
// accedemos a la etiqueta lang del documento html
console.info(document.documentElement.getAttribute("lang")); // en
// 2 da forma
console.info(document.documentElement.lang); // en

// ejemplo: obtener el href de la clase "link-dom"
console.info(document.querySelector(".link-dom").getAttribute("href")); // index.html
console.info(document.querySelector(".link-dom").href); // http://localhost/index.html

// estableciendo un nuevo valor a los atributos
// 1 era forma
document.documentElement.setAttribute("lang", "es-AR");
// 2 da forma
// document.documentElement.lang = "es";

// guarda en variables elementos del dom. Cuando almacenamos un elemento del html es buena practica inicarla con $
const $linkDom = document.documentElement.querySelector(".link-dom");
// al hacer click abre una nueva pestaña
$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
// al hacer click llama a facebook
$linkDom.setAttribute("href", "https://facebook.com");

// validamos si existe un atributo, removemos un elemento
console.info($linkDom.hasAttribute("href")); // true
// removemos un atributo
$linkDom.removeAttribute("rel");
console.info($linkDom.hasAttribute("rel"));

// Trabajando con los Data-Attribute
// .dataSet almacena en un map todos los data-attribute
console.info($linkDom.dataset); // retorna un DOMStringMap
// obtenemos un determinado data-attribute
console.info($linkDom.dataset.id);
// estableciendo nuevo valores en el data-attribute
$linkDom.setAttribute("data-description", "Modelo de Objeto del Documento");
console.info($linkDom.getAttribute("data-description")); // print: Document Object Model
$linkDom.dataset.description = "Hello good bye";

$linkDom.removeAttribute("data-id");
console.info($linkDom.hasAttribute("data-id"));
