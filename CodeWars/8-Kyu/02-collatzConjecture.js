// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:
// if(number is even) number = number / 2;
// if(number is odd) number = 3 * number + 1;

// #Task

// Your task is to make a function with name hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// A conjectura de Collatz (também conhecida como conjectura 3n+1) é uma conjectura de que, aplicando o seguinte algoritmo a qualquer número, sempre chegaremos a um:
// if (number is par) number = number / 2;
// if (number is ímpar) number = 3 * number + 1;

// Tarefa

// Sua tarefa é fazer uma função com o nome hotpo que receba um n positivo como entrada e retorne o número de vezes que você precisa executar este algoritmo para obter n = 1.

// 1º versão/solução
const hotpo = (term) => {
  let count = 0;
  if (term === 1) return count;
  do {
    if (term % 2 === 0) {
      term = term / 2;
    } else {
      term = 3 * term + 1;
    };
    count += 1;
  } while (term > 1);
  return count;
};

hotpo(1);
hotpo(5);
hotpo(6);
hotpo(23);
