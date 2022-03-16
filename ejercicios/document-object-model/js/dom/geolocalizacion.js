const doc = document;
const nav = navigator;

export default function geoLocation(id) {
  const $geoDiv = doc.getElementById(id);
  // Objeto para enviarle a la funcion que ejecuta la geolocalizacion
  const options = {
    // que tome la mejor lectura
    enableHighAccuracy: true,
    // tiempo de espera para tomar la lectura
    timeout: 5000,
    maximumAge: 0,
  };

  // funcion anonima que nos retorna la posicion
  const success = (position) => {
    // almacenamos las coordenadas del objeto position
    let coords = position.coords;
    console.info(position);

    $geoDiv.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precisión: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blank">Ver en google maps</a>
    `;
  };

  const error = (err) => {
    $geoDiv.innerHTML = `<p><mark>Error: ${err.code} ${err.message}</mark></p>`;
    console.info(`Error: ${err.code} ${err.message}`);
  };

  // la funcion getCurrentPosition necesita una funcion para ejecutar en caso de exito, otra en caso de error
  // y un objeto options
  nav.geolocation.getCurrentPosition(success, error, options);
}
