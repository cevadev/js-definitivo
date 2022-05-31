// a la carga del documento ejecutamos el codigo
document.addEventListener("DOMContentLoaded", (e) => {
  // Funcion expresada: includeHtml() esta funcion se ejecuta por cada elemento del documento que posea el
  // data-attribute data-include.
  // Parmas: el -> elemento del documento que posee el data attribute data-include
  //         url -> la url del archivo a cargar
  const includeHtml = (el, url) => {
    const xhr = new XMLHttpRequest();
    // escuchamos el evento readystatechange
    xhr.addEventListener("readystatechange", (e) => {
      // validamos solo ejecutar el codigo del readystate cuando su valor sea 4
      if (xhr.readyState !== 4) return;

      if (xhr.status >= 200 && xhr.status < 300) {
        // en el contenido outer del elemento colocamos la respuesta de la peticion
        // outerHtml lo que hace es reemplazar el nodo del elemento por otro elemento en este caso
        // el contenido que viene de la peticion
        // innerHtml lo que hace es reemplazar el contenido interno pero no reemplaza el elemento
        el.outerHTML = xhr.responseText;
      } else {
        let message =
          xhr.statusText ||
          "Error al cargar el archivo, verifique que realice la peticion por http o https";
        el.outerHTML = `<div><p>${xhr.status}: ${message}</p></div>`;
      }
    });

    // abrimos la peticion de informacion (GET)
    xhr.open("GET", url);
    // establecemos la cabecera
    xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
    xhr.send();
  };

  // recuperamos todos los elementos del documento html que poseen el data-attribute data-include
  document
    .querySelectorAll("[data-include]")
    // por cada elemento que posea el data attribute llamamos a la funcion includeHtml()
    // y le pasamos a la funcion el elemento y el valor del data attribute data-incluce
    .forEach((el) => includeHtml(el, el.getAttribute("data-include")));
});
