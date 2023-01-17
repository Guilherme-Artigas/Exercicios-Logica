// Description

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// Este kata consiste em multiplicar um determinado número por oito se for um número par e por nove caso contrário.

// 1º Versão/solução
const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9;
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(5));
