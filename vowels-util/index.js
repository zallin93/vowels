const {VOWELS} = require('./config.js');

function countVowels(line) {
    // if a vowel isn't even in the word, we aren't going to check it. 
    let vowelsIcanCheck = filterVowels(line);
    let counter = 0;

    for(let i=0; i < line.length; i++) {

        for(let j=i; j <= line.length; j++) {
            vowelsIcanCheck.forEach( (vowel) => {
                if( line.substring(i,j).indexOf(vowel) !== -1 ) {
                    counter++;
                }
            }); 
            
        }
    }

    // print the count
    console.log(counter);
    return counter;
};

/**
 * Helper function to shorten the search keys, if possible.
 * @return array of chars
 */
function filterVowels(word) {
    return VOWELS.filter((vowel) => {
        if(word.indexOf(vowel) !== -1) 
            return true;
        else
            return false;
    });
}

module.exports = {countVowels};