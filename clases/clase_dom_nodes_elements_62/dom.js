// Node.ELEMENT_NODE: representa una etiqueta html
// Node.TEXT_NODE : representa el texto que contiene una etiqueta

// Metodos del DOM para acceder a elementos del documento html

// Metodos antiguos (en desuso)
// obtenemos los elementos html por nombre de la etiqueta
console.info(document.getElementsByTagName("li"));
// obtenemos los elementos html por nombre de clase
console.info(document.getElementsByClassName("card"));
// obtenemos los elementos html por name del elemento
console.info(document.getElementsByName("nombre"));

// getElementById mas rápido que querySelector() ya que getElementById no hace la validaciones
// obtenemos los elementos html por el id del elemento
console.info(document.getElementById("menu"));

// metodos modernos
// querySelector - recibe un selector valido de css (que puede ser un element, id, class)
console.info(document.querySelector("#menu"));
// querySelector recupera el primer selector que encuentre en el documento html
console.info(document.querySelector("a"));
// querySelectorAll() recupera todo los selectores que coincidan en el documento
console.info(document.querySelectorAll("a"));

// recorremos todos los elementos a
document.querySelectorAll("a").forEach((el) => {
  console.info(el);
});

// accediendo al primer elemento card
console.info(document.querySelector(".card"));

// accedemos a todas las card
console.info(document.querySelectorAll(".card"));

// accedemos a un elemento dentro del NodeList card
console.info(document.querySelectorAll(".card")[2]);

// podemos acceder a elemento descendientes. por ejemplo dentro del id menu recuperamos todos los li
console.info(document.querySelectorAll("#menu li"));
