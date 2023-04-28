// Crea una función que redondee un número float a un número específico de decimales. 
// La función debe tener dos parámetros: 
//      * Primer parámetro es un número float con x decimales
//      * Segundo parámetro es un int que indique el número de decimales al que redondear
//      * Evitar usar el método toFixed()
// Ejemplo de uso de la función:
const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12

const roundedResult2 = roundTo(1.123456789, 6);
console.log(roundedResult2); // 1.123456

// Solución: 
function roundTo(number, decimals) {
    number = number.toString();
    let array = number.split(".");

    array[1] = array[1].substring(0, decimals);
    number = parseFloat(array.join("."));
    return number;
}