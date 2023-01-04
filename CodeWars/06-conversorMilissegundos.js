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
  if (h !== 0 && h !== undefined) return h*60;
  if (m !== 0 && m !== undefined) return m;
  if (s !== 0 && s !== undefined) return s;
};
// 1 hora é igual a 60 minutos.
// 1 minuto é igual a 60 segundos.
// 1 segundo é igual a 1000 milissegundos.



console.log(past(1, 1, 1));
