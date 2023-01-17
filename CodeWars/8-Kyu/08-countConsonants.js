// Complete the function that takes a string of English-language text and returns the number of consonants in the string.
// Conclua a função que pega uma string de texto em inglês e retorna o número de consoantes na string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
// Consoantes são todas as letras usadas para escrever em inglês, excluindo as vogais a, e, i, o, u.

// Solução 1
const countConsonants = (word) => {
  let count = 0;
  for (let index of word) {
    if (index !== 'a' && index !== 'e' && index !== 'i' && index !== 'o' && index !== 'u') {
      count += 1;
    };
  };
  return count;
};

console.log(`Guilherme tem ${countConsonants('guilherme')} consoantes.`);
console.log(`Julia tem ${countConsonants('Julia')} consoantes.`);
console.log(`Rafaela tem ${countConsonants('Rafaela')} consoantes.`);
console.log(`Bryan tem ${countConsonants('Bryan')} consoantes.`);
console.log(`Paralelepipito tem ${countConsonants('Paralelepipito')} consoantes.`);
