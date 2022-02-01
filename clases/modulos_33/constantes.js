//exportamos la constante
export const PI = Math.PI;

//cuando se exporte el archivo constantes.js, la funcion saludar sera exportada automaticamente por medio de la palabra default
//es decir, que la importacion sera automatica, sino que la funcion sera reconocida desde cualquier archivo.
//default solo puede ser utilizado 1 sola vez en un archivo .js
export function saludar() {
  console.log("Hola  mundo ES6");
}

//ejemplo de exportar por defecto una constante
let password = "cvilla";
//export default password;

//ejemplo de usar export default para una
// no se puede tener dos objetos exportado d manera default
export default class Saludar {
  constructor() {
    console.log("Hola JS");
  }
}
