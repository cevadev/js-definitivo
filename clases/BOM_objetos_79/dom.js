/**
 * Object BOM: Asicomo el objeto document "culelga" del objeto window los objetos URL, Historial y Navegador
 * tambien "cuelgan" del objeto window
 */

console.info("*** Objeto URL (Location) ***");
console.info(window.location);
console.info(window.location.origin);
console.info(window.location.protocol);
console.info(window.location.host);
console.info(window.location.hostname);
console.info(window.location.port);
console.info(window.location.href);
console.info(window.location.hash);
console.info(window.location.pathname);
console.info(window.location.search); // almacena los valores que se pasan por la url

console.info("*** Objeto Historial (history) ***");
console.info(window.history);
console.info(window.history.length);
// console.info(window.history.forward(1));
// console.info(window.history.go(-3));
// console.info(window.history.back(2));

console.info("*** Objeto Navigador (navigator) ***");
console.info(window.navigator);
console.info(window.navigator.connection);
console.info(window.navigator.geolocation);
console.info(window.navigator.mediaDevices);
console.info(window.navigator.mimeTypes);
console.info(window.navigator.onLine);
console.info(window.navigator.serviceWorker);
console.info(window.navigator.storage);
console.info(window.navigator.usb);
console.info(window.navigator.userAgent);
