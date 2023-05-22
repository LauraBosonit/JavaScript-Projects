// Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
// La función debe tener dos parámetros:
//      * El primer parámetro es el array entero que se quiere dividir.
//      * El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

// Ejemplo de uso de la función:
const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

// Solución:
function splitArrayIntoChunks(array, number) {
    // let original = [...array];
    // let result = [];

    // while(original.length > 0) {
    //     result.push(original.splice(0, number));
    // }

    // return result;
    return Array.from({length: Math.ceil(array.length/number)}, (v,i) => array.slice(i * number, i * number + number));
}