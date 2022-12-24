// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// - don't worry about uppercase vowels.
// - y not considered a vowel for this kata.

// Criar uma função chamada shortCut para remover as vogais minúsculas (a, e, i, o, u) contidas na string.
// - Nenhum preocupação sobre vogais maiúsculas.
// - y não é considerado uma vogal para este kata.

// 1º versão/solução
const shortCut1 = (string) => {
  const novaFrase1 = [];
  for (let index of string) {
    novaFrase1.push(index);
  };
  const novaFrase2 = novaFrase1.filter((letter) => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u');
  let novaFrase3 = '';
  for (let index of novaFrase2) novaFrase3 += index;
  return novaFrase3;
};

// 2º versão/solução
shortCut1('hello');
shortCut1('codewars');
shortCut1('goodbye');
shortCut1('HELLO');

const shortCut2 = (string) => {
  let newWord = '';
  for (let index of string) {
    if (index !== 'a' && index !== 'e' && index !== 'i' && index !== 'o' && index !== 'u') {
      newWord += index;
    };
  };
  return console.log(newWord);
};

shortCut2('hello');
shortCut2('codewars');
shortCut2('goodbye');
shortCut2('HELLO');
