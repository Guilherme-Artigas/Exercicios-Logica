// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
// Há uma oferta "3 por 2" (ou "2+1", se preferir) nas mangas. Para uma determinada quantidade e preço (por manga), calcule o custo total das mangas.

const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));

console.log(mango(2, 3));
console.log(mango(3, 3));
console.log(mango(5, 3));
console.log(mango(9, 5));


// mango(2, 3) ==> 6
// # 2 mangoes for $3 per unit = $6; no mango for free

// mango(3, 3) ==> 6
// # 2 mangoes for $3 per unit = $6; +1 mango for free

// mango(5, 3) ==> 12
// # 4 mangoes for $3 per unit = $12; +1 mango for free

// mango(9, 5) ==> 30
// # 6 mangoes for $5 per unit = $30; +3 mangoes for free
