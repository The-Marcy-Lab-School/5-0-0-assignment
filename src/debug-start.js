const charInserter = (char) => {
  return (word) => word.split('')
    .map((val) => val + char)
    .join('')
    .slice(0, -1);
};

const insertCharsToWords = (words, char, inserterFunc) => {
  return words.split(' ').map().join(' ');
};

module.exports = {
  charInserter,
  insertCharsToWords,
};
