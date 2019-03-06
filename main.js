'use strict';
const fs = require('fs');
const Utils = require('./vowels-util');

// verify # of params coming in
if( process.argv.length != 3 ) {
    console.error('Incorrect # of params. \nProper usage: node main.js [input-file]');
    process.exitCode = 1;
    return;
}

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if(error) throw error;
    
    let inputLines = data.split('\n');
    inputLines.forEach((line) => {
        console.log( Utils.countVowels(line) );
    });
});
