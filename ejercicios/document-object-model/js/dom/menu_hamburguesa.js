/**
 *
 * @param {*} panelBtn nombre del selector html (boton que activa el panel)
 * @param {*} panel elemento a mover
 * @param {*} menuLink parametro que hace referencia a un link del menu
 */
export default function hamburgerMenu(panelBtn, panel, menuLink) {
  // Delegacion de eventos (manejamos el DOM)
  const doc = document;
  // asigno el evento click al document
  doc.addEventListener("click", (e) => {
    // validamos que el evento lo genere el panelBtn o los hijos dentro del boton
    // .panel-btn * significa que si se hace click en algun hijo del button tambien que aplique el toggle
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      // intercambiamos la propiedad class del aside (panel) quitando o agregando la clase is-active
      // buscamos al elemento con la clase panel, ingresamos a su lista de clases y con toggle() intercambiamos
      // la clase ya sea agregando o quitando .is-active
      doc.querySelector(panel).classList.toggle("is-active");
      // activamos la animacion del boton (panelBtn)
      doc.querySelector(panelBtn).classList.toggle("is-active");
    }

    // cuando se haga click a un link del menu hamburguesa debemos ocultar el menu
    if (e.target.matches(menuLink)) {
      doc.querySelector(panel).classList.remove("is-active");
      doc.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
