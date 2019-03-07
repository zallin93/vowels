'use strict';
const fs = require('fs');
const Utils = require('./vowels-util');

// verify # of params coming in
if( process.argv.length != 3 ) {
    console.error('Incorrect # of params. \nProper usage: node main.js [input-file]');
    process.exitCode = 1;
    return;
}

/**
 * 1. Read the file. 
 * 2. Parse the file based on 'newline'. 
 * 3. For each line of input, call the util function to count, 
 *    print to the console.
 */
fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if(error) throw error;
    
    let inputLines = data.split('\n');
    inputLines.forEach((line) => {
        console.log( Utils.countVowels(line) );
    });
});
