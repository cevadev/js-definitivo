import STRIPE_KEYS from "./stripe-keys.js";

const doc = document;
// seccion donde se almacenan los productos de stripe
const $tacos = doc.getElementById("tacos");
// accedemos al contenido del template
const $template = doc.getElementById("taco-template").content;
// creamos una fragmento del DOm para hacer las inserciones al template
const $fragment = doc.createDocumentFragment();

// Accedemos de la API de Stripe a nuestros productos
fetch("https://api.stripe.com/v1/products", {
  // objeto con las credenciales de autenticacion en Stripe
  headers: {
    // definimos la cabecera de tipo autorization
    Authorization: `Bearer ${STRIPE_KEYS.secrete}`,
  },
})
  .then((response) => {
    console.info(response);
    return response.json();
  })
  .then((json) => {
    console.info(json);
  });

// Acceemos a la API de Stripe de los precios de productos
fetch("https://api.stripe.com/v1/prices", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secrete}`,
  },
})
  .then((response) => {
    console.info(response);
    return response.json();
  })
  .then((json) => {
    console.info(json);
  });
