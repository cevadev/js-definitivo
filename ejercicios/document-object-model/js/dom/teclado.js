const doc = document;
// controlamos el movimiento del ball
let x = 0,
  y = 0;

/**
 *
 * @param {*} e evento
 * @param {*} ball selector ball
 * @param {*} stage selector del escenari
 */
export function moveBall(e, ball, stage) {
  const $ball = doc.querySelector(ball);
  const $stage = doc.querySelector(stage);
  // la funcion getBoundingClientRect() retorna un objeto con una serie de informacion de la posicion
  // distancia de los margenes top, right, bottom y left. con este objeto vamos a controlar
  // los movimiento y colisiones de la pelota
  const limitBall = $ball.getBoundingClientRect();
  // el escenario al estar fijo, sus valores de posicion no cambian
  const limitStage = $stage.getBoundingClientRect();
  // console.info(limitBall, limitStage);

  /**
   * Para identificar los movimientos de la pelota debemos identificar los keycode de las teclas
   * direccionales o flechas
   */
  switch (e.keyCode) {
    // prevenimos el comportamiento por defecto de las teclas izq y der que es manejar la barra de scroll inferir
    // por lo que para el movimiento de las flechas vamos a prevenir el movimiento por default
    // left arrow
    case 37:
      // mientras sea mayor el left de la pelota que del stage permitimos disminuir x es decir
      // transladar a la izq
      if (limitBall.left > limitStage.left) {
        e.preventDefault();
        // x inicia en 0. Si queremos mover hacia la izq. sera en sentido negativo
        x--;
      }
      break;
    // up arrow
    case 38:
      if (limitBall.top > limitStage.top) {
        e.preventDefault();
        // en el plano carteciamos las y van hacia arriba pero en la web es lo contrario
        y--;
      }
      break;
    // right arrow
    case 39:
      if (limitBall.right < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    // down arrow
    case 40:
      if (limitBall.bottom < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
  }
  // desplazamiento del ball
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

  // deteccion de colision
}

/**
 * La deteccion de los eventos del teclado debe asgnarse al nodo raiz, es decir, al document
 * Cada tecla del teclado posee un keyCode y de esta manera la podemos identificar
 *
 */
export function shortcuts(e) {
  /* console.info(e.type);
  console.info(e.key);
  console.info(e.keyCode);
  console.info(e.ctrlKey);
  console.info(e.altKey);
  console.info(e.shiftKey);
  console.info(e);
 */
  // cuando el usuario presiona alt + una tecla a, c, p se ejecuta una accion
  if (e.key === "a" && e.altKey) {
    alert(`Usted ha lanzado una alerta`);
  }

  if (e.key === "c" && e.altKey) {
    confirm(`Usted ha lanzado un confirm`);
  }

  if (e.key === "p" && e.altKey) {
    prompt(`Usted ha lanzado un prompt`);
  }
}
