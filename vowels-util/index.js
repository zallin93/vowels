const {VOWEL_REGEX} = require('./config.js');

/**
 * Main function, returns the number of occurences of vowels in all
 * substrings of the input. 
 *
 * Complexity is O(n^2), aka not so good for larger inputs, 
 * like `inputs/large.txt`.  There may be a better methodology. 
 *
 * Next step would be to put a restriction on it, likely based on character 
 * length of input.  Example test file suggests reasonable upper bound is below
 * 10,000. 
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