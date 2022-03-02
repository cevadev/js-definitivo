/**
 * Metodos del Browser Object Model
 */
const $btnAbrir = document.getElementById("abrir-ventana");
const $btnCerrar = document.getElementById("cerrar-ventana");
const $btnImprimir = document.getElementById("imprimir-ventana");

// var para almcenar na referencia a una ventana
let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://www.jonmircha.com");
});

$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});
