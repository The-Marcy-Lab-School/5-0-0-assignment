const path = require('path');
const ScoreCounter = require('score-tests'); // eslint-disable-line import/no-extraneous-dependencies
const {
  charInserter,
  insertCharsToWords,
} = require('./debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('insertCharsToWords - takes a string of words, a joining character, and the inserter function and returns the words with the inserted character', () => {
    expect(insertCharsToWords('Hello there!', '-', charInserter)).toBe('H-e-l-l-o t-h-e-r-e-!');

    expect(insertCharsToWords('Hey, you good?', '0', charInserter)).toBe('H0e0y0, y0o0u g0o0o0d0?');

    expect(insertCharsToWords('Batman!', '?', charInserter)).toBe('B?a?t?m?a?n?!');

    expect(insertCharsToWords('a b c d e', '?', charInserter)).toBe('a b c d e');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('charInserter - calls the provided inserterFunc with the provided char argument at some point in the function', () => {
    // A "Spy" simply allows jest to monitor a method and see if/what it was called with.
    const spyWrapper = require('./debug'); // eslint-disable-line global-require
    const spiedInserter = jest.spyOn(spyWrapper, 'charInserter');

    expect(insertCharsToWords('Okay cool.', '%', spiedInserter)).toBe('O%k%a%y c%o%o%l%.');
    expect(spiedInserter).toHaveBeenCalledWith('%');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('charInserter - was NOT touched. It takes a character and returns a function that takes a word and inserts the original character between each value', () => {
    const dashInserter = charInserter('-');
    expect(dashInserter('hi')).toBe('h-i');
    expect(dashInserter('wow')).toBe('w-o-w');
    expect(dashInserter('100')).toBe('1-0-0');

    const spaceInserter = charInserter(' ');
    expect(spaceInserter('alright')).toBe('a l r i g h t');
    expect(spaceInserter('neat')).toBe('n e a t');
    expect(spaceInserter('HEY')).toBe('H E Y');

    // copied test to prevent auto pass
    expect(insertCharsToWords('Hello there!', '-', charInserter)).toBe('H-e-l-l-o t-h-e-r-e-!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
