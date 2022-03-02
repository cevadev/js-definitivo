// interactuando con el texto en un elemento y el contenido html

// capturamos en una variable la referencia al elemento p con id="que-es"
const $whatIsDOM = document.querySelector("#que-es");
console.info($whatIsDOM);

let texto = `
    <mark>El Antiguo Testamento</mark> se compone del Pentateuco, y otras series de libros
    históricos, sapienciales y proféticos. En total se numeran en el Antiguo
    Testamento 39 libros en <strong>la versión protestante</strong>, libros en la versión de
    la Iglesia católica y 51 libros en la de la Iglesia ortodoxa.`;

// agregar un texto al elemento html
// innerText no es parte de standard
$whatIsDOM.innerText = texto;

// textContent es un metodo que si forma parte del standard y permite agregar texto al elemento html
$whatIsDOM.textContent = texto;

// innerHtml reconoce etiquetas html que pueden estar dentro del texto
$whatIsDOM.innerHTML = texto;

// ¿Cuándo utilizar textContent e innerHtml?
// en una app de tipo chat nos puede interesar que los usuarios agregan formatos a su texto en ese caso
// innerHtml es una buena opcion. por otro lado si solo queremos que se agrega texto plano entonces
// textContent es la mejor opción.

// outerHtml: mientras que innerHtml reemplaza el contenido html del elemento en el DOM, outerHtml
// reemplaza el elemento del DOM
$whatIsDOM.outerHTML = texto;
