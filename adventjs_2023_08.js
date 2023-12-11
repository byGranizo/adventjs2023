function organizeGifts(gifts) {
  const GIFTS_IN_PALE = 50;
  const GIFTS_IN_BOX = 10;
  const giftsSeparated = [...gifts.matchAll(/\d+[a-zA-Z]/g)];

  let returnArray = [];

  giftsSeparated.forEach((group) => {
    const typeOfGift = group[0].slice(-1);
    let remainingGifts = Number(group[0].slice(0, -1));

    //Check pale 50 gifts per pale
    const numberOfPale = Math.trunc(remainingGifts / GIFTS_IN_PALE);
    remainingGifts = remainingGifts % GIFTS_IN_PALE;

    const paleFormated = Array.from(Array(numberOfPale)).fill(
      `[${typeOfGift}]`
    );
    returnArray = returnArray.concat(paleFormated);

    //Check box 10 gifts per box
    const numberOfBoxes = Math.trunc(remainingGifts / GIFTS_IN_BOX);
    remainingGifts = remainingGifts % GIFTS_IN_BOX;

    const boxFormated = Array.from(Array(numberOfBoxes)).fill(
      `{${typeOfGift}}`
    );
    returnArray = returnArray.concat(boxFormated);

    //Check remaining gifts
    if (remainingGifts) {
      const giftsFormated = Array.from(Array(remainingGifts)).fill(typeOfGift);
      returnArray = returnArray.concat("(").concat(giftsFormated).concat(")");
    }
  });

  return returnArray.join("");
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
