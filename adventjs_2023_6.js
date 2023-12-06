function maxDistance(movements) {
  let movementsArray = [...movements];
  let leftMovements = 0;
  let rightMovements = 0;
  let randomMovements = 0;

  movementsArray.forEach((movement) => {
    switch (movement) {
      case "<":
        leftMovements++;
        break;
      case ">":
        rightMovements++;
        break;
      case "*":
        randomMovements++;
        break;
    }
  });

  let returnValue;

  if (leftMovements > rightMovements) {
    returnValue = leftMovements + randomMovements - rightMovements;
  } else {
    returnValue = rightMovements + randomMovements - leftMovements;
  }

  return returnValue;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
