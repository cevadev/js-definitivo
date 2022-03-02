const doc = document;
// cuando se detecte el scroll del window se mostrara el boton scroll
const win = window;

export default function scrollTopBtn(btnSelector) {
  // detectamos el scroll y a que dstancia de la barra scroll vertical queremos mostrar el boton
  const $scrollBtn = doc.querySelector(btnSelector);
  // escuchamos el evento scroll para determinar donde mostrar o no el boton
  win.addEventListener("scroll", (event) => {
    // detectamos la distancia que se ha separado la barra del scroll vertical, esta deteccion se puede
    // realizar desde el objeto window o desde html
    // si no detecta pageXOffset entonces almacenamos scrollTop del document
    let scrollTop = win.pageXOffset || doc.documentElement.scrollTop;

    // validamos a que tantos pixeles queremos mostrar el boton scroll
    if (scrollTop > 600) {
      // le quitamos la clase hidden al selector scroll-top-btn para mostrarse en la pantalla
      $scrollBtn.classList.remove("hidden");
    } else {
      // mientras sea menos a 600 px le agregamos la clase hidden
      $scrollBtn.classList.add("hidden");
    }
  });

  // asignamos el evento click del boton al document
  doc.addEventListener("click", (event) => {
    // validamos si el selector scroll-top-btn genero el evento
    if (event.target.matches(btnSelector)) {
      // hacemos un scroll al inicio de la pagina
      win.scrollTo({
        // animacion del comportamiento
        behavior: "smooth",
        // a donde queremos que regrese la barra vertical
        top: 0,
      });
    }
  });
}
