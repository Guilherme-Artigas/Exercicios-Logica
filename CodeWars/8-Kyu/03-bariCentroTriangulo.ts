/**
 * A função recebe as coordenadas dos três vértices, a, b e c, e mostra as coordenadas do baricentro 0.
 *
 * @param a [4, 6]
 * @param b [12, 4]
 * @param c [10, 10]
 * @return [8.6667, 6.6667]
 */

const barTriang = (a: number[], b: number[], c: number[]): number[] => {
  const x: number = Number(((a[0] + b[0] + c[0]) / 3).toFixed(4));
  const y: number = Number(((a[1] + b[1] + c[1]) / 3).toFixed(4));
  return [x, y];
};

export default barTriang;
