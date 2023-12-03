function manufacture(gifts, materials) {
  const returnGifts = [];
  const materialsChars = materials.split("");

  for (const gift of gifts) {
    const giftChars = gift.split("");
    const found = giftChars.every((char) => materialsChars.includes(char));
    if (found) {
      returnGifts.push(gift);
    }
  }

  return returnGifts;
}

const gifts1 = ["tren", "oso", "pelota"];
const materials1 = "tronesa";

const result1 = manufacture(gifts1, materials1); // ["tren", "oso"]
console.log(result1);
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts2 = ["juego", "puzzle"];
const materials2 = "jlepuz";

const result2 = manufacture(gifts2, materials2); // ["puzzle"]
console.log(result2);

const gifts3 = ["libro", "ps5"];
const materials3 = "psli";

const result3 = manufacture(gifts3, materials3); // []
console.log(result3);
