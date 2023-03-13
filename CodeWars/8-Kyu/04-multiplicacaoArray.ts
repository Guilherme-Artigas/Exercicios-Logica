/**
 * Função recebe uma lista de valores e devolve o resultado da multiplicação de todos eles.
 *
 * @param list [1, 2, 3, 4]
 * @return 24
 */

const grow = (list: number[]): number => list.reduce((acc, cur) => acc *= cur, 1);

export default grow;
