const doc = document;
const win = window;

export default function smartVideo() {
  // capturamos todos los elementos video con el data-attribute: data-smart-vide
  const $video = doc.querySelectorAll("video[data-smart-video]");

  // definimos la callback
  const cb = (entries) => {
    entries.forEach((entry) => {
      // validamos si se ha dado la interseccion
      if (entry.isIntersecting) {
        // reproducimos el video
        entry.target.play();
      } else {
        entry.target.pause();
      }

      win.addEventListener("visibilityChange", (e) => {
        // evaluamos la propiedad del document
        doc.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };

  // threshold:0.5 cuando el video se logre ver al 50% se reproduce automaticamente
  const observer = new IntersectionObserver(cb, { threshold: 0.5 });

  // asignamos el observe a nuestro elemento del DOM
  $video.forEach((el) => {
    observer.observe(el);
  });
}
