console.info("************* Elementos del Document ****************");
console.info(document.head); // obtenemos el head del documento html
console.info(document.body);

// documentElemento - recupera la etiqueta html del documento html
console.info(document.documentElement);

console.info(document.charset); // get el charset
console.info(document.title); // get title

console.info(document.links); // get lista de link de tipo HtmlCollection
console.info(document.images); // get lista de imagenes en el documento de tipo HtmlCollection

// get lista de formularios, css y scripts que contienen el documento. Retorna un objeto de tipo HtmlCollection
console.info(document.forms);
console.info(document.styleSheets);
console.info(document.scripts);
