/**
 * Funcion anonima autoejecutable Component
 */
const Component = (function () {
  // creamos constructor del componente
  const Constructor = function (options) {
    // elemento de la UI
    this.el = options.el;
    // options.data pasa el state del componente
    this.data = options.data;
    // funcion template
    this.template = options.template;
  };

  // Agregamos los metodos al prototipo del constructor del componente
  // Metodo que realiza el renderizado d la UI
  Constructor.prototype.render = function () {
    const $el = doc.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };

  // Metodo que actualiza el state de manera reactiva
  Constructor.prototype.setState = function (obj) {
    // recorremos las propiedades del objeto
    for (let key in obj) {
      // evaluamos que una propiedad exista dentro de un objeto
      if (this.data.hasOwnProperty(key)) {
        // actualizamos las propiedades del state que coincidan con la propiedades del obj
        this.data[key] = obj[key];
      }
    }

    this.render();
  };

  // Metodo que nos retorna una copia inmutable del state
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
