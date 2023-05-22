// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos).
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

// Solución:
let arrClean = arrDirty.filter(value => Boolean(value) ? value : "");

console.log(arrClean);