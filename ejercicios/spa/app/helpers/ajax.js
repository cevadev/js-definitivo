/**
 * Encapsulamos una funcion asincron con fetch
 * al no utilizar export default, cuando vayamos a importa esta funcion debemos usar la destructuracion
 * de la sgte manera import { ajax } from ...
 */
export async function ajax(props) {
  /**
   * destructuramos el objeto props.
   * Toda peticion ajax por lo menos necesta una url
   * Para nuestro caso hacemos ua peticion al api de wordpress solo necesitamos llamar al metodo GET no es
   * necesario especificar una cabecera.
   * Si se tuviera necesidad de utilizar otros metodos como POST, PUT, DELETE entonces en la
   * destructuracion podriamos especificar el method y headers
   * en el caso que la api retorne una respuesta ok es decir la operacion fue exitosa entonces ejecutamos
   * una callback que llamamos cbSuccess
   */
  const { url, cbSuccess } = props;
  await fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
    })
    // procesamos los datos convertidos en json
    .then((json) => {
      return cbSuccess(json);
    })
    // caso de error
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error al acceder a la API";
      document.getElementById("main").innerHTML = `
                <div class = "error">
                    <p>Error ${err.status}:${message}</p>
                </div>
            `;
      document.querySelector(".loader").style.display = "none";
      console.error(err);
    });
}
