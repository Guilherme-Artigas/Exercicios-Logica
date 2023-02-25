
export const cubeChecker = (volume: number, side: number) : boolean => volume > 0 ? volume === side ** 3 : false;

console.log(cubeChecker(1, 1));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(27, 3));
console.log(cubeChecker(0, 35));
console.log(cubeChecker(452, 1));
console.log(cubeChecker(785, 0));
