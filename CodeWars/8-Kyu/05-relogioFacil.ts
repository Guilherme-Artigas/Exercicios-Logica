/**
 * Essa função retorna a hora desde a meia-noite me millisegundos.
 *
 * @param h 0
 * @param m 1
 * @param s 1
 * @return 61000
 */

const past = (h: number, m: number, s: number): number | string => {
  if (typeof h !== 'number' || typeof m !== 'number' || typeof s !== 'number') {
    return 'Erro, a função espera receber somente números!';
  }
  const HORAS_EM_MILISSEGUNDOS: number = (h * 60) * 60 * 1000;
  const MINUTOS_EM_MILISSEGUNDOS: number = (m * 60) * 1000;
  const SEGUNDOS_EM_MILISSEGUNDOS: number = s * 1000;
  return HORAS_EM_MILISSEGUNDOS + MINUTOS_EM_MILISSEGUNDOS + SEGUNDOS_EM_MILISSEGUNDOS;
};

export default past;
