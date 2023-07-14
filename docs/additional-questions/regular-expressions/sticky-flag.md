---
title: Regex Sticky Flag
description: Regex Sticky Flag - The flag y allows us to perform the search at the given position in the source string. There is a performance gain when using flag y.
sidebar_position: 16
sidebar_label: Sticky Flag
keywords:
  - regex sticky flag
  - regular expressions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - regex sticky flag
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StickyFlagSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Regex Sticky Flag | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Regex Sticky Flag**

<CloseAllAnswers />

---

### What is the purpose of the sticky flag in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'Y' flag, or sticky flag, makes a regex match only from the index it last matched, enabling sequential matching rather than searching the entire string. The flag 'y' makes regexp.exec(str) search strictly at position lastIndex, not “starting from” it. There is a critical performance gain when using flag y.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'let varName = "value"';

let regexp = /\w+/y;

regexp.lastIndex = 3;
alert(regexp.exec(str)); // null (there's a space at position 3, not a word)

regexp.lastIndex = 4;
alert(regexp.exec(str)); // varName (word at position 4)
```

  </div>
  </div>
</details>

---

### How does the sticky flag differ from the global flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unlike the global flag (g), the sticky flag (y) doesn't search the whole string for matches but sticks to the "lastIndex" where the previous match ended.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**1. Global flag (g)**: When the `g` flag is used, the regular expression will be tested against all possible matches in a string. This is in contrast to the default behavior, which is to stop after the first match.

Here's an example:

```javascript
let regex = /abc/g;
let str = 'abc abc abc';
let matches = str.match(regex);
console.log(matches); // Outputs: [ 'abc', 'abc', 'abc' ]
```

**2. Sticky flag (y)**: The `y` flag makes a regular expression "sticky", meaning it will only search for a match at the exact index where the previous match ended, instead of searching the entire string.

Here's an example:

```javascript
let regex = /abc/y;
let str = 'abcabcabc';
let match = regex.exec(str);
console.log(match); // Outputs: [ 'abc', index: 0, input: 'abcabcabc', groups: undefined ]

match = regex.exec(str);
console.log(match); // Outputs: [ 'abc', index: 3, input: 'abcabcabc', groups: undefined ]
```

In this example, you can see that the `exec()` method returns the next match each time it is called. This is because the `y` flag causes the regex engine to search for a match only from the exact spot where the last match ended.

Another example to highlight the difference:

```javascript
let str = 'abc xyz abc';
let regexGlobal = /abc/g;
let regexSticky = /abc/y;

console.log(regexGlobal.test(str)); // Outputs: true
console.log(regexGlobal.test(str)); // Outputs: true

console.log(regexSticky.test(str)); // Outputs: true
console.log(regexSticky.test(str)); // Outputs: false
```

In the case of the `regexGlobal`, both tests return `true` because after the first match, it continues searching for the next match from where it left off.

However, in the case of `regexSticky`, the second test returns `false` because it tries to match the pattern at the exact position following the first match (which is a space character in this case) and fails to find the pattern 'abc' there.

The `sticky` flag can be very useful when you're parsing tokens in order or performing search-and-replace operations that should maintain state across multiple operations.

  </div>
  </div>
</details>

---

### What does the "lastIndex" property represent in Regex with a sticky flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "lastIndex" property represents the position at which to start the next match when using the sticky flag.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let regex = /abc/y;
let str = 'abcabcabc';

regex.lastIndex = 0;
console.log(regex.exec(str)); // Outputs: [ 'abc', index: 0, input: 'abcabcabc', groups: undefined ]

console.log(regex.lastIndex); // Outputs: 3

console.log(regex.exec(str)); // Outputs: [ 'abc', index: 3, input: 'abcabcabc', groups: undefined ]

console.log(regex.lastIndex); // Outputs: 6
```

In this example, you can see that `lastIndex` starts at 0, and after each `exec` call, it is updated to the position following the last match. Because the `y` flag is set, each `exec` call only looks for a match starting at `lastIndex`.

If we set `lastIndex` to a value that doesn't correspond to the start of a match, `exec` will return null and `lastIndex` will be reset to 0:

```javascript
regex.lastIndex = 1;
console.log(regex.exec(str)); // Outputs: null

console.log(regex.lastIndex); // Outputs: 0
```

In the example above, because 'abc' doesn't start at index 1, the `exec` method returned null and `lastIndex` was reset to 0.

  </div>
  </div>
</details>

---

### Is the sticky flag compatible with all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As of March 2021, all modern browsers support the sticky flag. However, it's not supported in Internet Explorer.
  </div><br />
  <div><strong className="codeExample">Sticky flag 'y' Browser Support:</strong><br /><br />

  <div></div>

The sticky flag `y` in regular expressions is a fairly modern feature in JavaScript and as of my last training cut-off in September 2021, it is supported in the following major browsers:

| Browser        | Version that added `y` flag support |
| -------------- | ----------------------------------- |
| Chrome         | 49                                  |
| Firefox        | 3                                   |
| Safari         | 10                                  |
| Edge           | 15                                  |
| Internet Explorer| Not supported                     |
| Opera          | 36                                  |

It is always a good idea to check the most recent compatibility information from a reliable source like [Can I use](https://caniuse.com) or [MDN Web Docs](https://developer.mozilla.org), as browser capabilities are constantly being updated.

  </div>
  </div>
</details>

---

### Can you combine the sticky 'y' flag with other flags?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the sticky 'y' flag in JavaScript regular expressions can be combined with other flags such as 'g' (global), 'i' (case-insensitive), 'm' (multiline), and 'u' (unicode). The order of the flags doesn't matter.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

You can combine the `y` flag with any other flags based on your requirement.

```javascript
let regex = /abc/iy; // Case-insensitive and sticky
let str = 'ABCabcabc';

console.log(regex.exec(str)); // Outputs: [ 'ABC', index: 0, input: 'ABCabcabc', groups: undefined ]
console.log(regex.lastIndex); // Outputs: 3
```

---

:::note
Please note that the order of the flags doesn't matter. `/abc/iy` is the same as `/abc/yi`.
:::

  </div>
  </div>
</details>

---

### What happens if the sticky flag 'y' doesn't find a match at the "lastIndex"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, if a regular expression with the sticky 'y' flag doesn't find a match at the `lastIndex` position, the `exec` method returns `null` and the `lastIndex` property is reset to 0 for the next search operation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a JavaScript code example demonstrating what happens when a sticky flag regex does not find a match at the position specified by `lastIndex`.

```javascript
let regex = /abc/y;
let str = 'abc def abc';

console.log(regex.exec(str)); // Outputs: [ 'abc', index: 0, input: 'abc def abc', groups: undefined ]
console.log(regex.lastIndex); // Outputs: 3

console.log(regex.exec(str)); // Outputs: null
console.log(regex.lastIndex); // Outputs: 0
```

  </div>
  </div>
</details>

---

### How does the sticky flag 'y' affect the "exec" method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> With the sticky flag, the "exec" method only finds a match starting exactly at "lastIndex", unlike without the flag.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regex = /abc/y; // sticky regex
let str = 'abcabcabc';

console.log(regex.exec(str)); // Outputs: [ 'abc', index: 0, input: 'abcabcabc', groups: undefined ]
console.log(regex.lastIndex); // Outputs: 3 (updated to the position following the match)

console.log(regex.exec(str)); // Outputs: [ 'abc', index: 3, input: 'abcabcabc', groups: undefined ]
console.log(regex.lastIndex); // Outputs: 6 (updated to the position following the match)

regex.lastIndex = 7; // set lastIndex to a position where there's no 'abc'
console.log(regex.exec(str)); // Outputs: null (no match found at lastIndex)
console.log(regex.lastIndex); // Outputs: 0 (reset to 0)
```

  </div>
  </div>
</details>

---

### What does the sticky flag 'y' do with the "match" method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The sticky flag (y) is not fully compatible with the match method. When used with match, the y flag does not change the behavior of the method as one might expect.
  </div><br/>
  <div><strong>Additional Information:</strong> Normally, when you use the match method with a global (g) flag, it returns all matches in the string. However, if you replace the g flag with the y flag, match will only return the first match, not all matches starting from the lastIndex like exec does. This is because match does not update the lastIndex property of the RegExp object. From <strong>ECMAScript 2018</strong> onwards, you can use the <strong>matchAll</strong> method with the y flag, which does what you might expect: it returns an iterator that yields all matches, one by one, considering the y flag.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// you must add the 'g' global flag or it will result in an Type error
let regex = /abc/gy;
let str = 'abcabcabc';

let matches = str.matchAll(regex);

for (let match of matches) {
  console.log(match); 
}
// Outputs: 
// [ 'abc', index: 0, input: 'abcabcabc', groups: undefined ]
// [ 'abc', index: 3, input: 'abcabcabc', groups: undefined ]
// [ 'abc', index: 6, input: 'abcabcabc', groups: undefined ]
```

---

:::note
The Official ECMA Specification, ECMA-262 as of February 15, 2020, states that if there is no g flag present, that matchAll should throw a TypeError. ( See here <https://tc39.es/ecma262/#sec-string.prototype.matchall> )
:::

  </div>
  </div>
</details>

---

### What is a common use case for the sticky flag 'y'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A common use case for the sticky flag (y) in JavaScript is when parsing tokens in a string, where you want to ensure that each token immediately follows the previous one. This is particularly useful when processing text line-by-line, or parsing structured text formats.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let input = 'a,b,c';
let regex = /([^,]+),?/y; // match one or more non-comma characters, followed by optional comma
let match;
let output = [];

while (match = regex.exec(input)) {
    output.push(match[1]); // push the captured group
}

console.log(output); // Outputs: [ 'a', 'b', 'c' ]
```

  </div>
  </div>
</details>

---

### How does the sticky flag 'y' impact performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The sticky flag (`y`) can improve performance by preventing unnecessary backtracking. It forces a match at the exact index where the previous match ended, reducing the need for searching the whole string.
  </div>
  </div>
</details>

---
