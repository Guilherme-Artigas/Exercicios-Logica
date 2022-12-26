// Encontrar o baricentro de um triângulo.

// Formula para o calculo é a seguinte: X = A + B + C / 3, Y = A + B + C / 3.

// 1º versão/solução
const barTriang = (a, b, c) => {
  const x = Number(((a[0] + b[0] + c[0]) / 3).toFixed(4));
  const y = Number(((a[1] + b[1] + c[1]) / 3).toFixed(4));
  return [x, y];
};

barTriang([4, 6], [12, 4], [10, 10]);
barTriang([4, 2], [12, 2], [6, 10]);
