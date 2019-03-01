'use strict';

const fs = require('fs');

console.log('Test me');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
    if(error) throw error;
    console.log(data);
});
