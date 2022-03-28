const doc = document;

export default function slider() {
  // capturamos los elementos del dom con las que vamos a interactuar
  const $nextBtn = doc.querySelector(".slider-btns .next");
  const $prevBtn = doc.querySelector(".slider-btns .prev");
  const $slides = doc.querySelectorAll(".slider-slide");

  // var que cuenta los slides si llega al final va al primero
  let i = 0;

  doc.addEventListener("click", (e) => {
    if (e.target === $prevBtn) {
      e.preventDefault();
      // quitamos la clase .active al slide
      $slides[i].classList.remove("active");
      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("active");
    }

    if (e.target === $nextBtn) {
      e.preventDefault();
      // quitamos la clase .active al slide
      $slides[i].classList.remove("active");
      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      $slides[i].classList.add("active");
    }
  });
}
