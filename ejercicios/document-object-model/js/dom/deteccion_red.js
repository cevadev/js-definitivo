const doc = document;
const win = window;
const nav = navigator;

// esta funcion se ejecutara cuando el navegador detecte la perdida de la conexion de red
export default function networkStatus() {
  const isOnline = () => {
    // creamos dinamicamente un elemento de tipo div
    const $div = doc.createElement("div");
    if (nav.onLine) {
      $div.textContent = "Conexion restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexion perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    // insertamos el div al inicio del body
    doc.body.insertAdjacentElement("afterbegin", $div);
    // removemos el div anterior con su mensaje
    setTimeout(() => {
      doc.body.removeChild($div);
    }, 2000);
  };

  // cuando se detecte la perdida de la conexion se deben escuchar los eventos
  win.addEventListener("online", (e) => {
    isOnline();
  });

  win.addEventListener("offline", (e) => {
    isOnline();
  });
}
