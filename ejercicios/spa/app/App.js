/** Componente padre de toda la SPA
 *  Llamado de componentes para dibujar en pantalla la interface de usuario
 */
export function App() {
  document.getElementById(
    "root"
  ).innerHTML = `<h1>Bienvenidos a mi primer SPA con VanilaJS</h1>`;
}
