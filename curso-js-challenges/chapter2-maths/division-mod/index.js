// extraemos los digitos que el usuario ingreso
function extractDigits(startValue) {
  let remainingValue = startValue;
  while (remainingValue > 0) {
    let digit = Math.trunc(remainingValue % 10);
    console.info(`Digits ${digit}`);
    remainingValue = Math.trunc(remainingValue / 10);
  }
}

// determinamos el numero de digitos ingresados por el usuario
function countDigits(input) {
  let count = 0;
  let remainingValue = input;
  while (remainingValue > 0) {
    remainingValue = Math.trunc(remainingValue / 10);
    count++;
  }

  console.info(`Numbers entered: ${count}`);
}

function findPoperDiversors(input) {
  let divisors = [];
  for (let i = 1; i <= input / 2; i++) {
    if (input % i === 0) {
      divisors.push(i);
    }
  }
  divisors.map((item) => console.info(item));
}

extractDigits(123);
countDigits(123);
findPoperDiversors(8);
