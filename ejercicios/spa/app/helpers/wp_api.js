/**
 * aqui almacenamos todas las variables que nos permiten consultar hacia un dominio de wordpress
 * documentacion: https://developer.wordpress.org/rest-api/
 */

const NAME = "malvestida";
const DOMAIN = `https://${NAME}.com`;
// variable que hace referenia a la url de la wordpress api para obtener info del sito en particular
const SITE = `${DOMAIN}/wp-json`;
// variable que accede a toda la info que ofrece la api de wordpress
const API_WP = `${SITE}/wp/v2`;
// variable que apunta a todos los post. con _embed trae embebido toda la info referente al post
const POSTS = `${API_WP}/posts?_embed`;
// variable que apunta a la informacion de un post en particular
const POST = `${API_WP}/posts`;
// variable que apunta a las categorias del sitio
const CATEGORIES = `${API_WP}/categories`;
// consulta de busqueda
const SEARCH = `${API_WP}/search?_embed&search=`;

export default {
  name: NAME,
  domain: DOMAIN,
  site: SITE,
  api_wp: API_WP,
  posts: POSTS,
  post: POST,
  categories: CATEGORIES,
  search: SEARCH,
};
