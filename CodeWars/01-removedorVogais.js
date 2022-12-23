const shortCut = (string) => {
  const novaFrase1 = [];
  for (let index of string) {
    novaFrase1.push(index);
  };
  const novaFrase2 = novaFrase1.filter((letter) => letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u');
  let novaFrase3 = '';
  for (let index of novaFrase2) novaFrase3 += index;
  return novaFrase3;
};

shortCut('hello');
shortCut('codewars');
shortCut('goodbye');
shortCut('HELLO');
