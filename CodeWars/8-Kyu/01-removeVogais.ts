/**
 * Função para remover vogais minúsculas de um nome/palavra.
 *
 * @param inputText Nome/Palavra que sera base para a função montar uma nova 'string' sem as vogais.
 * @return É uma 'string' sem as vogais.
 */
const shortCut = (inputText: string): string => {
  const VOWELS: string[] = ['a', 'e', 'i', 'o', 'u'];
  let newPhrase: string = '';
  for (let i of inputText) {
    if (!VOWELS.includes(i)) newPhrase += i;
  }
  return newPhrase;
}

export default shortCut;
