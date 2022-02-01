const $linkDom = document.querySelector(".link-dom");
// la propiedad style retorna un objeto CSSStyleDeclaration que contiene toda las propiedades css válidas
console.info($linkDom.style);

// llamamos al atributo style
console.info($linkDom.getAttribute("style"));
// llamamos a una propiedad especifica del style
console.info($linkDom.style.backgroundColor);
console.info($linkDom.style.color);

// lista de propiedades dinamicas de css
console.info(window.getComputedStyle($linkDom));
console.info(window.getComputedStyle($linkDom).getPropertyValue("color"));

// aplicando valores  a las propiedades
// quitamos el subrayado del link
$linkDom.style.setProperty("text-decoration", "none");
// hacemos que el link DOM ocupe toda la linea
$linkDom.style.setProperty("display", "block");
$linkDom.style.setProperty("width", "50%");
// 2da forma de aplicar propiedades
$linkDom.style.textAlign = "center"; // centramos el texto
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = ".5rem";

// Variables CSS - Custom properties CSS
// accedemos a la etiqueta html
const $html = document.documentElement;
const $body = document.body;

// accedemos a la variable dark-color en el root
let varDarkColor = window
  .getComputedStyle($html)
  .getPropertyValue("--dark-color");
let varYellowColor = window
  .getComputedStyle($html)
  .getPropertyValue("--yellow-color");
console.info(varDarkColor, varYellowColor);

// le aplicamos al body un background
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// modificando el valor de la propiedad --dark-color declarada en el root
$html.style.setProperty("--dark-color", "#000");
// actualizamos la variable varDarkColor con el nuevo valor
varDarkColor = window.getComputedStyle($html).getPropertyValue("--dark-color");
// aplicamos al body el nuevo valor
$body.style.setProperty("background-color", varDarkColor);
