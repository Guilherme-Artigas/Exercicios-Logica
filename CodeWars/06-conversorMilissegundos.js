// Clock shows h hours, m minutes and s seconds after midnight.
// - Relógio mostra h (horas), m (minutos), s (segundos) depois da meia-noite.

// Your task is to write a function which returns the time since midnight in milliseconds.
// - Sua tarefa é escrever uma função que retorne a hora desde a meia noite em milissegundos.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// 1º versão/solução
const past = (h, m, s) => {
  if (typeof h !== 'number' || typeof m !== 'number' || typeof s !== 'number') {
    return console.log('Erro, a função espera receber somente números!');
  };
  const HORAS_EM_MILISSEGUNDOS = (h * 60) * 60 * 1000;
  const MINUTOS_EM_MILISSEGUNDOS = (m * 60) * 1000;
  const SEGUNDOS_EM_MILISSEGUNDOS = s * 1000;
  return HORAS_EM_MILISSEGUNDOS + MINUTOS_EM_MILISSEGUNDOS + SEGUNDOS_EM_MILISSEGUNDOS;
};

console.log(past(0,1,1)); // 61000
console.log(past(1,1,1)); // 3661000
console.log(past(0,0,0)); // 0
console.log(past(1,0,1)); // 3601000
console.log(past(1,0,0)); // 3600000
