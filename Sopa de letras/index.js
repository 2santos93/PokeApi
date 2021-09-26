const fs = require("fs");
const Moves = require("./Moves");

const main = () => {
  const fileData = fs.readFileSync("./data.json");
  const { lettersSoup, rows, columns, word } = JSON.parse(fileData);

  if (rows * columns !== lettersSoup.length)
    throw new Error("Check your data");

  const wordToFind = word.split("");
  let found = 0;

  for (let i = 0; i < lettersSoup.length; i++) {
    if (wordToFind[0] === lettersSoup[i])
      found += getWordsNumber(lettersSoup, rows, columns, i, wordToFind);
  }

  return found;
};

const getWordsNumber = (soup, rows, columns, currentPos, word) => {
  let found = 0;
  for (const move in Moves) {
    let col = Math.round(currentPos % columns);
    let row = Math.round(currentPos / rows);

    let position = 0;
    currentPosAux = currentPos;
    moveColumn = 0;
    moveRow = 0;

    for (let i = 1; i < word.length; i++) {
      const moveColumn = col + Moves[move].column;
      const moveRow = row + Moves[move].row;

      if (
        moveRow > rows ||
        moveRow < 0 ||
        moveColumn > columns ||
        moveColumn < 0
      )
        break;

      position = getPosition(move, currentPosAux, columns);

      currentPosAux = position;

      if (soup[position] !== word[i]) break;

      if (i === word.length - 1) {
        ++found;
        currentPosAux = currentPos;
      }
      row = Math.round(position / rows);
      col = Math.round(position % columns);
    }
  }

  return found;
};

const getPosition = (move, currentPos, columns) => {
  switch (move) {
    case Moves.up.value:
      return currentPos - columns;
    case Moves.left.value:
      return --currentPos;
    case Moves.down.value:
      return currentPos + columns;
    case Moves.right.value:
      return ++currentPos;
    case Moves.upLeft.value:
      return currentPos - columns - 1;
    case Moves.upRight.value:
      return currentPos - columns + 1;
    case Moves.downLeft.value:
      return currentPos + columns - 1;
    case Moves.downRight.value:
      return currentPos + columns + 1;
  }
};

console.log(main());

module.exports = {
  main
}