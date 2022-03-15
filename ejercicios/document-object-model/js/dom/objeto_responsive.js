const doc = document;
const win = window;

export default function responsiveMedia(
  idElement,
  mediaquery,
  mobileContent,
  desktopContent
) {
  // guardamos la media query que pasa el usuario en el objeto matchMedia
  let breakpoint = win.matchMedia(mediaquery);

  // agregamos un listener que revise la mediaquery y cuando ya no se cumple realizar el cambio de contenido
  const responsive = (e) => {
    // cuando la mediaqury se cumpla retorna true de lo contrario false
    if (e.matches) {
      // significa que la minima anchura (min-width) es 1024
      doc.getElementById(idElement).innerHTML = desktopContent;
    } else {
      // minima anchura (min-width) es menor a 1024 asumimos que es moil
      doc.getElementById(idElement).innerHTML = mobileContent;
    }

    // console.info("MQ", breakpoint, e.matches);
  };

  // cuando se produce y cambio en el tamaño de la pantalla ejecutamos la mediaquery
  breakpoint.addListener(responsive);

  // ejecutamos la funcion al momento de cargar el documento
  responsive(breakpoint);
}
