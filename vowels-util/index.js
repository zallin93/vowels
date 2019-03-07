const {VOWEL_REGEX} = require('./config.js');

/**
 * Main function, returns the number of occurences of vowels in all
 * substrings of the input. 
 *
 * Complexity is O(n^2), aka not so good for larger inputs, 
 * like `inputs/large.txt`.
 */
function countVowels(line) {
    let counter = 0;

    for(let i=0; i < line.length; i++) {
        for(let j=i; j <= line.length; j++) {
            counter += count(line.substring(i,j));        
        }
    }
    
    return counter;
};

/** 
 * Helper function that returns the number of vowels in a single string.
 */
function count(testWord) {
    return (testWord.match(VOWEL_REGEX) || []).length;
}

module.exports = {countVowels};