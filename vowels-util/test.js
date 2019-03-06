/**
 * Test
 */

const assert = require('assert');
const {countVowels} = require('./index.js');

function testCountVowels() {
    var example1 = 'lol';
    var example1ExpectedOutput = 4;
    var example2 = 'baker';
    var example2ExpectedOutput = 16;

    try {
        let example1ActualOutput = countVowels(example1);
        let example2ActualOutput = countVowels(example2);
        assert.equal(example1ExpectedOutput, example1ActualOutput, 'Example 1 failed.');
        assert.equal(example2ExpectedOutput, example2ActualOutput, 'Example 2 failed.');
        
        console.log('testCountVowels passed.');
    } catch(error) {
        console.error('testCountVowels failed.', error);
    }
    
}

testCountVowels();