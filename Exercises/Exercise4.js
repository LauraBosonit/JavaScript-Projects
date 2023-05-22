// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

// Solución:
let numbers = [...arrNumber1, ...arrNumber2, ...arrNumber3]
let allNumbers = [];
allNumbers = numbers.filter(number => allNumbers.includes(number) ? "" : allNumbers.push(number)); 

console.log(allNumbers)