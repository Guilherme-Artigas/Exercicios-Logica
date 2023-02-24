/**
 * Função que manipula dois parâmetros booleanos para contornar a inexistencia do Xor em JS/TS.
 *
 * @param a
 * @param b
 */
export const xor = (a: boolean, b: boolean): boolean => a !== b;

console.log(xor(true, false));
