function findNaughtyStep(original, modified) {
  const maxLength = Math.max(original.length, modified.length);

  const originalList = original.split("");
  const modifiedList = modified.split("");

  for (let i = 0; i < maxLength; i++) {
    if (originalList[i] !== modifiedList[i]) {
      //Se ha eliminado entre medias
      if (originalList[i + 1] !== modifiedList[i]) {
        return modifiedList[i];
      }
      //Se ha añadido entre medias
      if (originalList[i] !== modifiedList[i + 1]) {
        return originalList[i];
      }
    }
  }
  return "";
}

const original1 = "abcd";
const modified1 = "abcde";
const result1 = findNaughtyStep(original1, modified1); // 'e'
console.log(result1);

const original2 = "stepfor";
const modified2 = "stepor";
const result2 = findNaughtyStep(original2, modified2); // 'f'
console.log(result2);

const original3 = "abcde";
const modified3 = "abcde";
const result3 = findNaughtyStep(original3, modified3); // ''
console.log(result3);
