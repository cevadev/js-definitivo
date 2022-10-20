export function PostCard(props) {
  let { date, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString();
  // si existe la propiedad wp:featuredmedia entonces cargamos su imagen si no existe cargamos favicon
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : "app/assets/globe-africa-32.png";
  return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}">Ver publicacion</a>
            </p>
        </article>
    `;
}
