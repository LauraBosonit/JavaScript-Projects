// Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
// La función debe tener 2 parámetros:
//      * Primer parámetro debe ser el número de bytes
//      * Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

//Ejemplo de uso de la función:
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB


const result2 = fromBytesToFormattedSizeUnits(123456789);
console.log(result2); // 123MB


const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result3); // -12.145GB

// Solución:
function fromBytesToFormattedSizeUnits(bytes, digits = 3) {
    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"];
    let end = false;
    let counter = 0;
    let num = bytes;

    while (!end) {
        if (num < 0) {
            num = Math.abs(num);
        } else {
            if (Math.floor(num / 1000) <= 0) {
                num = num.toPrecision(digits);
                end = true;
                if(bytes <= 0) {
                    return `-${num}${units[counter]}`; 
                }
                return num + units[counter];
            } else {
                num = num / 1000;
                counter++;
            }
        }
    }
}