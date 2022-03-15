const doc = document;
const nav = navigator;
const agent = nav.userAgent;

export default function userDeviceInfo(userDeviceId) {
  // variable que maneja el selector div
  const $userDeviceId = doc.getElementById(userDeviceId);

  // objetos con sus p  rops para detectar dispositivos mobile, desktop, ipad
  const isMobile = {
    android: () => agent.match(/android/i),
    ios: () => agent.match(/iphone|ipad|ipod/i),
    windows: () => agent.match(/windows phone/i),
    // funcion anonima cuyo contexto es la variable isMobile
    any: function () {
      return this.android() || this.ios() || this.windows();
    },
  };

  const isDesktop = {
    linux: () => agent.match(/linux/i),
    mac: () => agent.match(/mac os/),
    windows: () => agent.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  const isBrowser = {
    chrome: () => agent.match(/chrome/i),
    safari: () => agent.match(/safari/i),
    firefox: () => agent.match(/firefox/i),
    opera: () => agent.match(/opera|opera mini/i),
    ie: () => agent.match(/msie|iemobile/i),
    edge: () => agent.match(/edge/i),
    any: function () {
      return (
        this.chrome() ||
        this.safari() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      );
    },
  };

  $userDeviceId.innerHTML = `
    <ul>
        <li>User Agent: <b>${agent}</b> </li>
        <li>Plataforma: <b>${
          isMobile.any() ? isMobile.any() : isDesktop.any()
        }</b></li>
    </ul>
  `;

  /* **** Contenido exclusivo **** */
  if (isBrowser.chrome()) {
    $userDeviceId.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
  }

  if (isBrowser.firefox()) {
    $userDeviceId += `<p><mark>Este contenido solo se ve en firefox</mark></p>`;
  }

  if (isDesktop.linux()) {
    $userDeviceId.innerHTML += `<p><mark>Descarga nuestro software para Linux</mark></p>`;
  }

  if (isDesktop.mac()) {
    $userDeviceId.innerHTML += `<p><mark>Descarga nuestro software para Mac OS</mark></p>`;
  }

  if (isDesktop.windows()) {
    $userDeviceId.innerHTML += `<p><mark>Descarga nuestro software para windows</mark></p>`;
  }

  /* **** Redirecciones **** */
  // cuando se detecte que el dispositivo es un celular redireccionara la pagina de vuelos
  if (isMobile.android()) {
    window.location.href = "https://www.google.com/flights?hl=es";
  }
}
