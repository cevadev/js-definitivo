const doc = document;
const nav = navigator;

export default function webcam(id) {
  const $video = doc.getElementById(id);

  // comprobamos que la funcion getUserMedia exista en el navegador
  if (nav.mediaDevices.getUserMedia) {
    nav.mediaDevices
      .getUserMedia({ video: true, audio: true })
      // getUserMedia es un promesa, en caso de exito envia un strema
      .then((stream) => {
        console.info(stream);
        $video.srcObject = stream;
        $video.play();
      })
      .catch((err) => {
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
        console.error(err);
      });
  }
}
