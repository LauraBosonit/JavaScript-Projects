// Crea una función que elimine las etiquetas html o xml de un string.
// La función debe tener un string como único parámetro.

// Ejemplo de uso de la función:
const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result); // lorem ipsum

// Solución:
function removeHTMLTags(tag) {
    tag = tag.split(/\<[/]?\w+\>/g).join("");
    return tag;
}