// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos).
const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];

// Solución:
let arrClean = [];

for(let i = 0; i < arrDirty.length; i++) {
    if(arrDirty[i] === 0) {
        arrClean.push(arrDirty[i]);
    }
   
    if(Boolean(arrDirty[i])) {
        arrClean.push(arrDirty[i])
    }
}

console.log(arrClean);