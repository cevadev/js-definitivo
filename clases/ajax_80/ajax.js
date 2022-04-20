// funcion anonima autoejeutable - Using XmlHttpRequest
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
      //sconsole.info(xhr);
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

// Funcion anonima autoejecutable - UsingFetch
(() => {
  const $fetch = document.getElementById("fetch");
  const $fragment = document.createDocumentFragment();

  // podemos pasar un archivo json local como fuente de datos
  // fetch("assets/users/json")
  fetch("https://jsonplaceholder.typicode.com/users")
    // ejecutamos el codigo si la promesa se resuelve
    .then((response) => {
      // el metodo then() retorna una objeto de tipo ReadableStream pero es necesario convertirlo a un formato valido
      // retornamos al siguiente then() el objeto response convertido a texto json,
      // otros metodos válidos son .text() .blob()
      // si la propiedad ok del objeto response es true convertimos response a json y lo enviamos al sgte then
      // si no es asi, forzamos el error con un Promise.reject()
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((jsonResponse) => {
      //console.info(jsonResponse);
      jsonResponse.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    // ejecutamos este bloque si se produce un error
    .catch((err) => {
      // console.error(err);
      let message = err.statusText || "Ocurrió un error";
      $fetch.innerHTML = `Error ${err.status} : ${message}`;
    })
    .finally(() =>
      console.info("esto se ejecutará independiente de la promesa fetch()")
    );
})();

// Funcion anonima autoejecutable - Usando API Fetch + Async await
(() => {
  const $fetchAsync = document.getElementById("fetch-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      // antes de ejecutar la sgte linea de codigo, esperamos la respuesta del fetch
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let json = await res.json();

      // Manipulamos el error
      if (!res.ok) {
        // si la respuesta del fetch no es res.ok ==0 true lanzamos con throw in objeto al catch
        throw {
          status: res.status,
          statusText: res.statusText,
        };
      }

      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
    } finally {
      console.info("esto se ejecutará independiente de la promesa fetch()");
    }
  }

  getData();
})();

// Funcion anonima autoejecutable - Usando API Axios vs API Fetch
(() => {
  const $axios = document.getElementById("axios");
  const $fragment = document.createDocumentFragment();
  axios
    // axios tambien puede leer un archivo local como fuente de datos
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      // console.info(res);
      let jsonResponse = res.data;
      jsonResponse.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((error) => {
      let message = error.response.statusText || "Ocurrió un error";
      $axios.innerHTML = `Error ${error.response.status} : ${message}`;
    })
    .finally(() => {
      console.info(
        "Esto se ejecutará independientemente del resultado de Axios"
      );
    });
})();

// Funcion anónima autoejecutable - Usando API Axios con Async y Await
(() => {
  const $axiosAsync = document.getElementById("axios-async");
  const $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      // antes de ejecutar la sgte linea de codigo, esperamos la respuesta del fetch
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      // axios nos retorna un objeto ya parseado
      let json = await res.data;
      // console.info(res, json);
      json.forEach((element) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${element.name}--${element.email}--${element.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let message = err.response.statusText || "Ocurrió un error";
      $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
    } finally {
      console.info("esto se ejecutará independiente de la promesa fetch()");
    }
  }

  getData();
})();
