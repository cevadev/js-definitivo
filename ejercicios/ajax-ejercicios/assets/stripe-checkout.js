import stripeKeys from "./stripe-keys.js";
import STRIPE_KEYS from "./stripe-keys.js";

const doc = document;
// seccion donde se almacenan los productos de stripe
const $tacos = doc.getElementById("tacos");
// accedemos al contenido del template
const $template = doc.getElementById("taco-template").content;
// creamos una fragmento del DOm para hacer las inserciones al template
const $fragment = doc.createDocumentFragment();

// objeto de configuracion para las peticiones fetch
const fetchOptions = {
  headers: {
    // definimos la cabecera de tipo autorization
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
};

// variabes que almacenan la informacion de los productos y precios
let products, prices;

/**
 * funcion para dar formato al precio del producto que nos retorna Stripe
 * El precio viene en texto, cortamos los dos ultimos caracteres ponerle un punto (.)
 */
const moneyFormat = (num) => {
  // conservamos desde la pocision cero del num y le quitamos las dos ultimas posiciones
  // y luego agregamos los centavos
  return `$${num.slice(0, -2)}.${num.slice(-2)}`;
};

// Como tenemos que hacer varias peticiones para tener la informacion requerida es mejor tratar
// El metodo all() de las promise y en ella hacer la peticiones fetch
// Promise.all() espera que todos los endpoints respondan, hecha la respuesta se ejecuta el metodo then()
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  // recibimos todos las respuestas. Cuando se tengan todas las respuestas del Promise.all(). Creamos un arreglo
  // con las respuesta y por cada respuesta,vamos a agregar al responses global l respuesta en formato json
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  // impresion de la respuesta
  .then((json) => {
    // Promise.all() responde un array con dos posiciones. Posicion 0 datos de los productos. Posicion 1 datos de los precios
    // La propiedad data contiene los datos tanto de products y prices
    products = json[0].data;
    prices = json[1].data;

    // Interactuamos con el template $tacos
    // Del producto obtenemos el nombre del producto y la foto
    // Del precio obtenemos el id del precio
    // recorremos con un foreach por cada elemento que trae la variable precios hacemos:
    prices.forEach((el) => {
      // almacenamos la info del producto. Al array products aplicamos un filtro donde comparamos
      // que por cada product.id del array products sea igual a price.product del array prices
      let productData = products.filter((product) => product.id === el.product);

      // procesamos el template: buscamos dentro del template el selector de clase .taco
      // establecemos un nuevo atributo donde almancenams el id del precio a vender
      $template.querySelector(".taco").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector("figcaption").innerHTML = `
        ${productData[0].name}
        <br/>
        ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
      `;

      // clonamos el node del template
      let $clone = doc.importNode($template, true);

      // para no hacer muchas inserciones al DOM hacemos la insercion al fragment y luego hacemos una sola insercion
      // del fragment que contiene todos los products
      $fragment.appendChild($clone);
    });
    // hacemos una sola insercion del fragment al dom
    $tacos.appendChild($fragment);
  })
  .catch((error) => {
    console.error(error);
    let message =
      error.statusText || "Ocurrio un error al conectarse con el API de Stripe";
    $tacos.innerHTML = `<p><b>Error ${error.status}</b>:${message}</p>`;
  });

/**
 * Programamos el click a cada tarjeta
 */
doc.addEventListener("click", (e) => {
  // validamos cuando se hace click a los elemento internos de la clase .taco
  if (e.target.matches(".taco *")) {
    /**
     * enviamos a Stripe el precio del producto que el usuario va a comprar.
     * el elemento figure contiene un data attribute llamado data-price que contiene el id del price
     * al hacer click ya sea en el img o el figCaption obtenemos el data-price del elemento padre figure
     */
    let price = e.target.parentElement.getAttribute("data-price");

    // invocacion al objeto Stripe que viene del archivo js en el html
    Stripe(stripeKeys.public)
      .redirectToCheckout({
        // definimos un objeto de configuracion
        lineItems: [{ price: price, quantity: 1 }],
        // en nuestro ejemplo aplicamos una subscripcion mensual el usuario nos invita un taco
        mode: "subscription",
        // cuando el checkout se realiza, Stripe no redirige a la pagina que le indiquemos de exito o de error
        successUrl:
          "http://127.0.0.1:5500/js-definitivo-mircha/ejercicios/ajax-ejercicios/assets/stripe-success.html",
        cancelUrl:
          "http://127.0.0.1:5500/js-definitivo-mircha/ejercicios/ajax-ejercicios/assets/stripe-error.html",
      })
      // procesamos la respuesta
      .then((res) => {
        // validams si se produjo un error
        if (res.error) {
          // imprimimos el error y lo colocamos en la variable tacos
          $tacos.insertAdjacentHTML("afterend", res.error.message);
        }

        // cuando la respuesta es correcta debemos tener una pagina de transaccion exitosa a cual redirijimos
      });
  }
});

// Accedemos de la API de Stripe a nuestros productos
// objeto con las credenciales de autenticacion en Stripe
// definimos la cabecera de tipo autorization

/*fetch("https://api.stripe.com/v1/products", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((response) => {
    console.info(response);
    return response.json();
  })
  .then((json) => {
    console.info(json);
  });*/

// Acceemos a la API de Stripe de los precios de productos
/*fetch("https://api.stripe.com/v1/prices", {
  headers: {
    Authorization: `Bearer ${STRIPE_KEYS.secret}`,
  },
})
  .then((response) => {
    console.info(response);
    return response.json();
  })
  .then((json) => {
    console.info(json);
  });*/
