// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Dada uma matriz não vazia de números inteiros, retorne o resultado da multiplicação dos valores em ordem. Exemplo:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// 1º versão/solução
const grow = (x) => x.reduce((acc, curr) => acc * curr, 1);

grow([1, 2, 3, 4]);
