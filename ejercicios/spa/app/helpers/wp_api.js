/**
 * aqui almacenamos todas las variables que nos permiten consultar hacia un dominio de wordpress
 * documentacion: https://developer.wordpress.org/rest-api/
 */

const NAME = "luisjovel";
const DOMAIN = `https://${NAME}.com`;
// variable que hace referenia a la url de la wordpress api para obtener info del sito en particular
const SITE = `${DOMAIN}/wp-json`;
// variable que accede a toda la info que ofrece la api de wordpress
const API_WP = `${SITE}/wp/v2`;
// variable que apunta a todos los post. con _embed trae embebido toda la info referente al post
// per_page -> numero de posts por pagina
const PER_PAGE = 6;
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
// variable que apunta a la informacion de un post en particular
const POST = `${API_WP}/posts`;
// variable que apunta a las categorias del sitio
const CATEGORIES = `${API_WP}/categories`;
// consulta de busqueda
// $search= se concatena con el texto en el input de busqueda
const SEARCH = `${API_WP}/search?_embed&&per_page=${PER_PAGE}&search=`;

// pagina en la que empieza la carga inicial
let page = 1;

export default {
  name: NAME,
  domain: DOMAIN,
  site: SITE,
  api_wp: API_WP,
  per_page: PER_PAGE,
  posts: POSTS,
  post: POST,
  categories: CATEGORIES,
  search: SEARCH,
  page: page,
};
