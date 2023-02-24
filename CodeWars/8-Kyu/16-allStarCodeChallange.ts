/**
 * Essa função recebe dois parâmetros "string" e retorna a quantidade em "number" de ocorrências do segundo
 * parâmetro contidas no primeiro parâmetro.
 *
 * @param str qualquer texto
 *
 * @param letter letra a ser buscada
 */
const strCount = (str: string, letter: string): number => {
  let c: number = 0;
  for (const i of str) {
    if (i === letter) c++
  }
  return c;
};

console.log(strCount('Qualquer texto', 'o'));
