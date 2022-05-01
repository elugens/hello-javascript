---
title: Regex / String Methods
description: Regex / String Methods - The following are the methods available in the regular expression and string objects.
sidebar_position: 17
sidebar_label: Regex / String Methods
---

**Regular Expressions: Regex / String Methods**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the function and syntax of the match() string method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The match() method retrieves the result of matching a string against a regular expression. It has three standing modes: (1) If the regexp does not have flag g, then it returns the first match as an array with capturing groups and properties index (position of the match), input (input string, equals str). (2) If the regexp has flag g, it returns an array of all matches as strings without capturing groups and other details. (3) If there are no matches, no matter if there’s flag g or not, null returns.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Mode #1:
let str = 'I love JavaScript';

let result = str.match(/Java(Script)/);

alert(result[0]); // JavaScript (full match)
alert(result[1]); // Script (first capturing group)
alert(result.length); // 2

// Additional information:
alert(result.index); // 7 (match position)
alert(result.input); // I love JavaScript (source string)

// Mode #2:
let str = 'I love JavaScript';

let result = str.match(/Java(Script)/g);

alert(result[0]); // JavaScript
alert(result.length); // 1

// Mode #3:
let str = 'I love JavaScript';

let result = str.match(/HTML/);

alert(result); // null
alert(result.length); // Error: Cannot read property 'length' of null

// * If we want the result to be an array, we can write like this:

let result = str.match(regexp) || [];
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the matchAll() string method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method str.matchAll(regexp) is a “newer, improved” variant of str.match. The str.matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups. The RegExp object must have the /g flag; otherwise, a TypeError gets thrown. The matchAll() method may require a polyfill in some browsers.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '<h1>Hello, world!</h1>';
let regexp = /<(.*?)>/g;

let matchAll = str.matchAll(regexp);

alert(matchAll); // [object RegExp String Iterator], not array, but an iterable

matchAll = Array.from(matchAll); // array now

let firstMatch = matchAll[0];
alert(firstMatch[0]); // <h1>
alert(firstMatch[1]); // h1
alert(firstMatch.index); // 0
alert(firstMatch.input); // <h1>Hello, world!</h1>
```

  </div>
  </div>
</details>

---

### What is the difference between match() and matchAll() String methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three differences between str.match(regexp) and str.match(regexp) string methods. The matchAll method returns an iterable object with matches instead of an array. We can make a regular array from it using Array.from. Every match gets returned as an array with capturing groups (the same format as str.match without flag g). If there are no results, it returns not null but an empty iterable object. If we use the for..of to loop over matchAll matches, then the Array.from method is unnecessary because the matchall() method returns an iterable object as its result.
    </div>
  </div>
</details>

---

### Is it possible to use the str.split() method with a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two ways to implement a string split. The string split method can use a regular expression or a substring as a delimiter.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: str.split(substring)
alert('12-34-56'.split('-')); // array of ['12', '34', '56']

// Example: str.split(regexp)
alert('12, 34, 56'.split(/,\s*/)); // array of ['12', '34', '56']
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the search() string method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The search() method executes a search for a match between a regular expression and this String object. The critical limitation: the search only finds the first match. If we need the positions of other matches, we should use other means, such as finding them all with str.matchAll(regexp).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'A drop of ink may make a million think';

alert(str.search(/ink/i)); // 10 (first match position)
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the str.replace() string method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a regular expression, and the replacement can be a string or a function to be called for each match. Using a function gives us the ultimate replacement power because it gets all the information about the match, has access to external variables, and can do everything. If a pattern is a string, only the first occurrence gets replaced.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// replace all dashes by a colon
alert('12-34-56'.replace(/-/g, ':')); // 12:34:56

let str = 'John Smith';
// swap first and last name
alert(str.replace(/(john) (smith)/i, '$2, $1')); // Smith, John

// Using a function as the second argument
let str = 'html and css';
let result = str.replace(/html|css/gi, (str) => str.toUpperCase());
alert(result); // HTML and CSS

// Replace each match by its position in the string:
alert('Ho-Ho-ho'.replace(/ho/gi, (match, offset) => offset)); // 0-3-6
```

  </div>
  </div>
</details>

---

### What's the distinction between the replace() and replaceAll() methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This method is essentially the same as str.replace, with two significant differences. (1) If the first argument is a string, it replaces all occurrences of the string, while the replace method replaces only the first occurrence. (2) If the first argument is a regular expression without the g flag, an error occurs. With the g flag, it works the same as the replace method. The primary use case for replaceAll is replacing all occurrences of a string.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// replace all dashes by a colon
alert('12-34-56'.replaceAll('-', ':')); // 12:34:56
```

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the regexp.exec() object method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method regexp.exec(str) method returns a match for regexp in the string str. Unlike previous methods, it gets called on a regexp, but not on a string. Depending on whether the regexp includes flag g, it works differently. If no g option is used, regexp.exec(str) gives the first match precisely as str.match (regexp). This behavior does not bring anything new. But if there’s flag g, then a call to regexp.exec(str) returns the first match and saves the position immediately after it in the property regexp.lastIndex. The next such call starts the search from position regexp.lastIndex, returns the next match, and saves the position after it in regexp.lastIndex. If there are no matches, regexp.exec returns null and resets regexp.lastIndex to 0. So, repeated calls return all matches one after another, using property regexp.lastIndex to keep track of the current search position.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'More about JavaScript at https://javascript.info';
let regexp = /javascript/gi;

let result;

while ((result = regexp.exec(str))) {
  alert(`Found ${result[0]} at position ${result.index}`);
  // Found JavaScript at position 11, then
  // Found javascript at position 33
}

// Search from a given position by manually setting lastIndex.
let str = 'Hello, world!';

let regexp = /\w+/g; // without flag "g", lastIndex property is ignored
regexp.lastIndex = 5; // search from 5th position (from the comma)

alert(regexp.exec(str)); // world

// replace flag g with y
let str = 'Hello, world!';

let regexp = /\w+/y;
regexp.lastIndex = 5; // search exactly at position 5

alert(regexp.exec(str)); // null
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the regexp.test() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method regexp.test(str) looks for a match and returns true/false whether it exists. This expression is the most precise way to run a test on a string in our regular expressions. You should note that there are some drawbacks to using the regex.test method repeatedly on global tests (flag g).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Basic Example:
let str = 'I love JavaScript';

// these two tests do the same
alert(/love/i.test(str)); // true
alert(str.search(/love/i) != -1); // true

// An example with the negative answer:
let str = 'Bla-bla-bla';

alert(/love/i.test(str)); // false
alert(str.search(/love/i) != -1); // false

// Use it to search from a given position with flag g:
let regexp = /love/gi;

let str = 'I love JavaScript';

// start the search from position 10:
regexp.lastIndex = 10;
alert(regexp.test(str)); // false (no match)
```

  </div>
  </div>
</details>

---

### Are there any ramifications when we run global regexp.tests repeatedly on different sources?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, executing the same global regexp check on many sources several times may result in failure. When we apply the same global regexp to different inputs, we could receive an incorrect result because the regexp.test function advances the regexp.lastIndex property, forcing the search in another string to start at a non-zero position. To avoid this, we may set regexp.lastIndex=0 before each search, or we can use string methods str.match/search/... without using regexp methods, which do not use lastIndex.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /javascript/g; // (regexp just created: regexp.lastIndex=0)

alert(regexp.test('javascript')); // true (regexp.lastIndex=10 now)
alert(regexp.test('javascript')); // false
```

  </div>
  </div>
</details>

---
