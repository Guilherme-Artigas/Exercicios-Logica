/**
 * Essa função recebe um termo e cria várias repetições até que esse mesmo termo chegue a um.
 *
 * @param termo 23
 * @return 15
 */
const hotpo = (termo: number): number => {
  let contador: number = 0;
  if (termo === 1) return contador;
  do {
    if (termo % 2 === 0) termo /= 2;
    else termo = termo * 3 + 1;
    contador++;
  } while (termo > 1);
  return contador;
};

export default hotpo;
