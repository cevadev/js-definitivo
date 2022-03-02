/**
 * Solo podemos export una funcion usando default por lo que usamos export para
 * exportar las dos funciones
 */
const doc = document;

export function digitalClock(clock, btnPlay, btnStop) {
  // variable que contendrá la referencia al setInterval
  let clockTempo;

  // delegamos el evento al document
  doc.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      // mostramos un reloj digital, para ello usamos setInterval
      clockTempo = setInterval(() => {
        // toLocaleTimeString() nos imprime un reloj digital
        let clockHour = new Date().toLocaleTimeString();
        // insertamos el div el reloj
        doc.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      // accedemos al elemento que genero el evento y lo deshabilitamo
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      // hacemos desaparecer el reloj
      doc.querySelector(clock).innerHTML = null;
      doc.querySelector(btnPlay).disabled = false;
    }
  });
}

/**
 *
 * @param {*} sound archivo mp3 de alarma
 * @param {*} btnPlay inicia la reproduccion del archivo
 * @param {*} btnStop detiene la reproduccion
 */
export function alarm(sound, btnPlay, btnStop) {
  // variable que controla el temporizador del timeout
  let alarmTempo;
  // cuando se hace click en play creamos una etiqueta html audio dinamicamente
  const $alarm = doc.createElement("audio");
  $alarm.src = sound;

  doc.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      // a los 2 segundo activamos la alarma
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $alarm.pause();
      $alarm.currentTime = 0;
      doc.querySelector(btnPlay).disabled = false;
    }
  });
}
