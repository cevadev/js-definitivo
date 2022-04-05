// funcion anonima autoejeutable
(() => {
  // 1. Creamos una instancia
  const xhr = new XMLHttpRequest();
  const $xhr = document.getElementById("xhr");

  // $fragment -> document fragement donde se insertaran los users del api y luego el fragment en el dom
  const $fragment = document.createDocumentFragment();

  // 2. escuchamos el evento readyStateChange
  // evento readystatechange -> este evento se dispara cuando detecta cualquier cambio de estado
  xhr.addEventListener("readystatechange", (e) => {
    // validamos que si el readyState no es 4 que no haga nada,
    // el codigo que se va a ejecutar debe ser cuando la propiedad readyState es 4 (completed)
    if (xhr.readyState !== 4) return "";

    // validamos los codigos de respuesta. Si el codigo es 200 o mayor y menos a 300 ejecute elcodigo
    if (xhr.status >= 200 && xhr.status < 300) {
      console.info(xhr);
      // imprimimos la respuesta del API
      // console.info(xhr.responseText);
      // convertimos la respuesta JSON a objeto JS (arrays) con parse()
      let users = JSON.parse(xhr.responseText);
      users.forEach((user) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
        $fragment.appendChild($li);
      });
      // al elemento ol en el dom le insertamos el fragment con los users
      $xhr.appendChild($fragment);
    } else {
      console.info("Error");
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${$xhr.status} : ${message}`;
    }
  });
  // 3. especificamos el verbo de operacion (GET, PUT, POST) y la url (endpoint) a hacer la peticion
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  // si quisieramos consulta a un archivo json local seria:
  // xhr.open("GET","assets/users.json");
  // 4. envio de la peticion
  xhr.send();
})();
