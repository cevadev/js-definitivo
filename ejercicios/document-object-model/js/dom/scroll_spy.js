const doc = document;

export default function scrollSpy() {
  // nos interesa observar a la secciones que se van haciendo scroll
  // traermos todas las etiquetas section con el data-attribute: data-scroll-spy
  const $sections = doc.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    // console.info("entries", entries);
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        // obtenemos los elementos link (a) con el atributo data-scroll-spy y que en su href
        // temga in gatito y tenga el valor de la variable id
        doc
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        doc
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };

  const observer = new IntersectionObserver(cb, {
    //rootMargin: "-250px",
    // que se ilumnine el menu solo cuando se logra ver el 50% del contenido de la opcion de menu
    // y al 75% de su anchura
    threshold: [0.5, 0.75],
  });
  // por cada elemento section con el data-attribute le asignamos el observer
  $sections.forEach((el) => {
    observer.observe(el);
  });
}
