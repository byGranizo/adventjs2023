function createChristmasTree(ornaments, height) {
  const totalOrnaments = ornaments.length;
  let currentOrnament = 0;

  let returnArray = [];

  for (let i = 1; i <= height; i++) {
    let lineArray = Array(height - i).fill(" ");

    for (let j = 0; j < i; j++) {
      lineArray.push(ornaments[currentOrnament]);
      lineArray.push(" ");

      currentOrnament =
        currentOrnament === totalOrnaments - 1 ? 0 : currentOrnament + 1;
    }
    returnArray.push(lineArray);
  }

  let lastLevelArray = Array(height - 1).fill(" ");
  lastLevelArray.push("|");
  returnArray.push(lastLevelArray);
  returnArray.push([]);

  let returnString = returnArray
    .map((line) => line.join("").trimEnd())
    .join("\n");

  return returnString;
}

createChristmasTree("123", 4);
