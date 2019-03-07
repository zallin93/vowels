const {VOWEL_REGEX} = require('./config.js');

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