const doc = document;

export default function countDown(
  idCountdownSelector,
  limitDate,
  finalMessage
) {
  const $countdown = doc.getElementById(idCountdownSelector);
  // para realizar cualquier operacion de fechas en JS es importante convertir la fecha
  // a timestamp (milisegundos) esto lo obtenemos con getTime()
  const countdownDate = new Date(limitDate).getTime();

  // con setInterval() hacemos que la cuenta regresiva se vaya actualizando cada segundo
  let countdownTempo = setInterval(() => {
    // capturamos el momento actual
    let now = new Date().getTime();
    // limitTime = fecha_a_la_debemos_llegar - now
    let limitTime = countdownDate - now;
    let days, hours, minutes, seconds;

    // conversion
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);

    seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    // construimos el mensaje
    $countdown.innerHTML = `<h3>Faltan: ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

    // cuando limitTime llega a 0
    if (limitTime < 0) {
      clearInterval(countdownTempo);
      // construimos el mensaje
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
