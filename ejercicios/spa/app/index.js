/** Archivo principal que desencadena toda la programacion de la SPA (no es un componente)
 *  Desencadena la invocacion hacia los demas componentes de la App
 *  Manejo de la delegacion de eventos
 *
 */
import { App } from "./App.js";

const doc = document;

// que se cargue el componente principal App cuando se cargue el documento en el DOM
doc.addEventListener("DOMContentLoaded", App);
