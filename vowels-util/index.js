const {VOWELS} = require('./config.js');

function countVowels(line) {
    // if a vowel isn't even in the word, we aren't going to check it. 
    let vowelsIcanCheck = filterVowels(line);
    let counter = recurse(line);

    // for(let i=0; i < line.length; i++) {

    //     for(let j=i; j <= line.length; j++) {
    //         vowelsIcanCheck.forEach( (vowel) => {
    //             if( line.substring(i,j).indexOf(vowel) !== -1 ) {
    //                 counter++;
    //             }
    //         }); 
            
    //     }
    // }

    // print the count
    console.log(counter);
};

function recurse(line) {
    console.log('line: ', line);
    let count = 0;
    if(line.length == 1) {
        VOWELS.forEach((vowel) => {
            if( line.indexOf(vowel) !== -1) {
                count++;
            }
        });
        return count; 
    }

    VOWELS.forEach((vowel) => {
        if( line.indexOf(vowel) !== -1) {
            count++;
        }
    });

    for(let i=1; i < line.length; i++) {
        count += recurse(line.substring(0,line.length-i))
        //count += recurse(line.substring(i, line.length-1));    
    }
    
    //count += recurse(line.substring(1,line.length));
    
    return count;
}

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