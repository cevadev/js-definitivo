const doc = document;
const win = window;

export default function speechReader() {
  // capturamos los elementos
  const $speechSelect = doc.querySelector("#speech-select");
  const $speechTextarea = doc.querySelector("#speech-text");
  const $speechBtn = doc.querySelector("#speech-btn");

  // almacenamos el api que permite leer los mensajes
  const speechMessage = new SpeechSynthesisUtterance();
  //console.info(speechMessage);

  // almacenamos las voces disponibles
  let voices = [];

  // eventos que vamos a detectar
  doc.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    win.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voices = win.speechSynthesis.getVoices();
      // por cada voz detenctada creamos un elemento <option></option> y lo agregamos al elemento <select></select>
      voices.forEach((voice) => {
        const $option = doc.createElement("option");
        // asignamos un valor al option
        $option.value = voice.name;
        $option.textContent = `${voice.name} - ${voice.lang}`;

        $speechSelect.appendChild($option);
      });
    });
  });

  // evento que se dispara cada vez que se detecta un cambio en el select (combo) y se asigne a la variable
  // speechMessage
  doc.addEventListener("change", (e) => {
    e.preventDefault();
    // validamos si el select origina el evento
    if (e.target === $speechSelect) {
      // speechMessage.voice = voices.find((voices)=> voice.name === e.target.value)
      speechMessage.voice = voices.find((voice) => {
        if (voice.name === e.target.value) {
          return e.target.value;
        }
      });
    }
    // console.info(speechMessage);
  });

  doc.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === $speechBtn) {
      // pasamos el texto para narrar
      speechMessage.text = $speechTextarea.value;
      win.speechSynthesis.speak(speechMessage);
    }
  });
}
