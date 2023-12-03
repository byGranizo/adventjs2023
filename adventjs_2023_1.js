function findFirstRepeated(gifts) {
  // hash table with gift as key and if it was visited as value
  let visitedGifts = {};

  for (let i = 0; i < gifts.length; i++) {
    let gift = gifts[i];
    if (visitedGifts[gift]) {
      return gift;
    }
    visitedGifts[gift] = true;
  }

  return -1;
}

const giftIds1 = [2, 1, 3, 5, 3, 2];
const firstRepeatedId1 = findFirstRepeated(giftIds1);
console.log(firstRepeatedId1); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
