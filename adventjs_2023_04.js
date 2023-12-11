function decode(message) {
  const OPENING = "(";
  const CLOSING = ")";

  let messageList = [...message];

  let searchChar = OPENING;
  let openingIndex = -1;
  let closingIndex = -1;

  let deleteableChars = [];

  for (let i = 0; i < messageList.length; i++) {
    if (messageList[i] === OPENING) {
      openingIndex = i;
      searchChar = CLOSING;
    }

    if (messageList[i] === CLOSING && searchChar === CLOSING) {
      closingIndex = i;
      searchChar = OPENING;
    }

    if (openingIndex !== -1 && closingIndex !== -1) {
      const codedFragment = messageList.slice(openingIndex + 1, closingIndex);
      const revertedFragment = codedFragment.reverse();

      const startingFragment = messageList.slice(0, openingIndex + 1);
      const endingFragment = messageList.slice(closingIndex);

      messageList = [
        ...startingFragment,
        ...revertedFragment,
        ...endingFragment,
      ];

      deleteableChars.push(openingIndex);
      deleteableChars.push(closingIndex);

      openingIndex = -1;
      closingIndex = -1;
    }
  }

  messageList = messageList.filter(
    (_, index) => !deleteableChars.includes(index)
  );

  const workToDo = messageList.some((el) => el === OPENING || el === CLOSING);

  let messageString = messageList.join("");

  if (workToDo) {
    messageString = decode(messageString);
  }

  return messageString;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!*/

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus*/

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
