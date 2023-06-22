const charInserter = (char) => {
  return (word) => word.split('').map((val) => val + char);
};

const insertCharsToWords = (words, char, inserterFunc) => {
  return words.split(' ').map().join(' ');
};

module.exports = {
  charInserter,
  insertCharsToWords,
};
