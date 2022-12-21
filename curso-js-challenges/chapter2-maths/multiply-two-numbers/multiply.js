import isNumber from "../../utils/utils.js";

const doc = document;

function calcular(value1, value2) {
  const result = ((value1 * value2) / 2) % 7;
  console.info(`El resultado es: ${result}`);
}

export default function multiplyTowNumbers(idForm) {
  const $form = doc.getElementById(idForm);

  doc.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();

      if (isNumber($form.numero1.value) && isNumber($form.numero2.value)) {
        calcular($form.numero1.value, $form.numero2.value);
      }
    }
  });
}
