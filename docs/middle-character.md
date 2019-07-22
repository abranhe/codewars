# middle-character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

### Examples:

```js
Kata.getMiddle("test")
// => return "es"

Kata.getMiddle("testing")
// => return "t"

Kata.getMiddle("middle")
// => return "dd"

Kata.getMiddle("A")
// => return "A"
```


## Install

```
$ npm install @abranhe/codewars
```

## Usage

```js
const codewars = require('@abranhe/codewars');

codewars.getMiddle('test');
//=> 'es'
```

## API

### codewars.getMiddle(input)

#### input

Type: `string`