function drawGift(size, symbol) {
  let returnArray = [];
  //Create template full of [#]
  const nRows = 2 * size - 1;
  for (let i = 0; i < nRows; i++) {
    let currentRow;
    if (i < size) {
      //Iterable empty array
      currentRow = Array.from(Array(nRows));

      currentRow.fill("#");
      currentRow.fill(" ", 0, size - i - 1);

      if (i > 0 && i < size - 1) {
        currentRow.fill(symbol, size - i, 2 * size - i - 2);
      }

      if (i > 1) {
        currentRow.fill(symbol, nRows - i, nRows - 1);
      }
    } else {
      currentRow = Array.from(Array(nRows - i + size - 1));

      currentRow.fill("#");

      if (i > size - 1 && i < nRows - 1) {
        currentRow.fill(symbol, 1, size - 1);
      }

      if (i < nRows - 2) {
        currentRow.fill(symbol, size, currentRow.length - 1);
      }
    }
    returnArray.push(currentRow);
  }

  returnArray.push([]);
  let returnString = returnArray.map((line) => line.join("")).join("\n");
  return returnString;
}

drawGift(4, "+");

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

//drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

//drawGift(1, '^')
/*
#
*/
