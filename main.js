'use strict';
const fs = require('fs');

// verify # of params coming in
if( process.argv.length != 3 ) {
    console.error('Incorrect # of params. \nProper usage: node main.js [input-file]');
    process.exitCode = 1;
    return;
}

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if(error) throw error;
    console.log(data);
    let inputLines = data.split('\n');
    inputLines.forEach((line) => {
        // if a vowel isn't even in the word, we aren't going to check it. 
        let vowelsIcanCheck = filterVowels(line);
        let counter = 0;

        console.log(vowelsIcanCheck);

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
    });
});


function filterVowels(word) {
    return VOWELS.filter((vowel) => {
        if(word.indexOf(vowel) !== -1) {
            return true;
        } else {
            return false;
        }
    });
}