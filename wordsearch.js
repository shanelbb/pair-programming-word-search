//Contributors Kim O'Dell (@kimodell), Jeremiah Chua (@Ametrysinine), Shanel Beebe (@shanelbb)
//implement a word search solver as a function that recieves a 2D array of letters and a word
//function must check to find the word horizontally and vertically, return true if found, false if not
const transpose = function (matrix) {
  const newMatrix = [];
  for (let y = 0; y < matrix[0].length; y++) {
    newMatrix.push([]); // Creates rows equal to number of original columns
    for (let x = 0; x < matrix.length; x++) {
      newMatrix[y][x] = matrix[x][y]; // Swap x-coordinate and y-coordinate
    }
  }

  return newMatrix;
};
//
const wordSearch = (letters, word) => {
  //join each individual array into one string
  const horizontalJoin = letters.map((ls) => ls.join(""));
  //for each string of the new array
  for (let l of horizontalJoin) {
    //if word is present, return true
    if (l.includes(word)) {
      return true;
    }
  }
  //use the tranpose function to check for vertical words
  const transposedLetters = transpose(letters);
  //join each vertical array into one string
  const verticalJoin = transposedLetters.map((ls) => ls.join(""));
  //for each string of the new array
  for (let l of verticalJoin) {
    //if word is present, return true
    if (l.includes(word)) {
      return true;
    }
  }
  //if word not present, return false
  return false;
};
module.exports = wordSearch;
