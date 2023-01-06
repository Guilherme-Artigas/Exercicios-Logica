// Nathan loves cycling.
// Nathan ama andar de bicicleta.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// Como Nathan sabe que é importante manter-se hidratado, ele ebe 0.5 litros de aguá por hora de pedalada.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// Você recebe o tempo em horas e precisa retornar o número de litros que Nathan vai beber, arredondado para o menor valor.

// For example:
// Por exemplo:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// 1º Versão/Solução:
const litres = (time) => Math.floor(time * 0.5);

console.log(litres(2));
console.log(litres(1.4));
console.log(litres(12.3));
console.log(litres(0.82));
console.log(litres(11.8));
console.log(litres(1787));
console.log(litres(0));
