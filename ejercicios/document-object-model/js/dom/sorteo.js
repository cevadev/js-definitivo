const doc = document;

/**
 *
 * @param {*} btn que dispara la accion
 * @param {*} selector que contiene todo los elementos a iterar (lenguajes de programacion)
 */
export default function drawn(btn, selector) {
  const getWinner = (selector) => {
    // obtenemos todos los elementos que coinciden con el selector
    const $players = doc.querySelectorAll(selector);
    // Math.floor() redondeo hacia abajo
    const random = Math.floor(Math.random() * $players.length);

    // obtenemos el lenguaje ganador
    const winner = $players[random];

    // winner es un ListItem por ello extraemos el textContent
    console.info($players, random, winner);

    return `El ganador es ${winner.textContent}`;
  };

  doc.addEventListener("click", (e) => {
    // Validamos que nuestro boton haya originado el evento
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      console.info(result);
    }
  });
}
