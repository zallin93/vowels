# vowels-util

A node module to count vowels in lines of a text file. 

## Usage
Include it as a dependency in your `package.json`.  The latest version is 1.0.0. 

```
npm install -s vowels-util
```


The primary function is `countVowels`. Import/require it into your project as 
necessary.  The function accepts a single string parameter. 

```
import { countVowels } from 'vowels-util';

...

countVowels('aabbccddee');
```

