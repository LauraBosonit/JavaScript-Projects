// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

// Solución:
// Versión larga: 
let allNumbers = [...arrNumber1, ...arrNumber2, ...arrNumber3];
let numbers = [];

for(let i = 0; i < allNumbers.length; i++) {
    if(!numbers.includes(allNumbers[i])) {
        numbers.push(allNumbers[i]);
    }
}

// Versión corta: 
// let numbers = new Set(arrNumber1.concat(arrNumber2).concat(arrNumber3));

console.log(numbers)