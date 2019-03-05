# vowels-util

A node module to count vowels in lines of a text file. 

## Usage
Include it as a dependency in your `package.json`.  The latest version is 1.0.0. 

```
npm install -s vowels-util
```


The primary function is `countVowels`. Import/require it into your project as 
necessary.  The function accepts a single string parameter and print the result
on the Console.

```
import { countVowels } from 'vowels-util';

...

countVowels('aabbccddee');
```


## Updating the "vowels" list

To update the list of characters that count as vowels, 
modify the list in `config.js`. 