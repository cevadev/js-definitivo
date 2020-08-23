import Saludar, {PI, saludar} from './constantes.js';
//aplicamos un alias para aritmetica
import {aritmetica as calculos} from './aritmetica.js';

console.log('Clase modulos');
console.log(`PI: ${PI}`);

//invocamos las funciones sumar y restar
console.log(`La suma de 5+3 es: ${calculos.sumar(5,3)}`);
saludar();
let saludo = new Saludar();
