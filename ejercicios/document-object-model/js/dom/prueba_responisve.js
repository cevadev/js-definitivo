const doc = document;

//clase 77, 78
export default function responsiveTester(idForm) {
  const $form = doc.getElementById(idForm);
  // almacenamos la ref a la ventana del tester
  let tester;

  // asociamos el evento submit al document
  doc.addEventListener("submit", (e) => {
    // validamos que el form haya disparado el evento submit con e.target === $form
    if (e.target === $form) {
      // cancelamos la accion por defecto de formulario que es enviar la informacion
      e.preventDefault();
      // cuando el form se procese abrimos una ventana
      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
      );
    }
  });

  doc.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
