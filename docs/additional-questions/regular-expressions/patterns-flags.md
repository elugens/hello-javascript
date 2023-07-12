---
title: Patterns and Flags
description: Patterns and Flags are used to match text against regular expressions. They are used to match text against regular expressions. Interview Questions
sidebar_position: 1
sidebar_label: Patterns and Flags
keywords:
  - regexp pattern
  - regexp flags
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
  - regexp pattern
  - regexp flags
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PatternsFlagsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Patterns and Flags | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Patterns and Flags**

<CloseAllAnswers />

---

### What is a Regular Expression (Regex) in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular expressions are patterns with optional flags that allow powerful text search and replacement. They are available in JavaScript via the RegExp object, and we can embed them into string functions and string methods combined with regular expressions.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you might use a regular expression in JavaScript to match all instances of the word "hello" in a string, regardless of case:

```javascript
var myString = "Hello world! hello universe! Hello people!";

// This is our regular expression. 'g' stands for global, 'i' stands for case insensitive
var myRegex = /hello/gi;

// Use the match() function to return an array of all matches
var matches = myString.match(myRegex);

console.log(matches); // Output: ["Hello", "hello", "Hello"]
```

In this example, `myRegex` is a regular expression that will match the string "hello" in a case-insensitive way (due to the 'i' flag). The 'g' flag means that the regular expression should match all occurrences of "hello", not just the first one. The `match()` function is then used to find all matches in `myString` and return them as an array.

---

:::note
Note: Regular expressions can be very complex and powerful, capable of much more than just simple string matching. They can also include various special characters to match specific types of character sequences, etc.
:::

  </div>
  </div>
</details>

---

### What is a flag in Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Flags are modifiers that define how a search should be conducted. Examples: 'g' for global, 'i' for case-insensitive, 'm' for multiline.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a code example that uses the 'g' and 'i' flags:

```javascript
let str = "Hello, hello, HELLO";

let regex = /hello/gi; // This will match 'hello' regardless of case, and find all matches in the string, not just the first

let matches = str.match(regex);

console.log(matches); // Output: ["Hello", "hello", "HELLO"]
```

In this code, 'g' and 'i' flags are used in the regular expression `/hello/gi`. The 'g' flag tells the script to find all matches, not just the first, and 'i' makes the search case-insensitive. Hence it matches "Hello", "hello", and "HELLO" in the string.

  </div>
  </div>
</details>

---

### What are the two syntaxes used to create a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular expressions can be created using literal syntax (/pattern/) or the RegExp constructor.
    </div><br />
  <div><strong>Technical Response:</strong> We can use two syntaxes when creating a regular expression object, including the long and short syntaxes. The extended syntax uses the RegExp object with optional flags, and the short syntax uses forward slashes with optional flags. Slashes /.../ tell JavaScript that we are creating a regular expression, and they play the same role as quotes for strings. In both cases, regexp becomes an instance of the built-in RegExp class.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Long Syntax
regexp = new RegExp('pattern', 'flags');

// Short Syntax
regexp = /pattern/; // no flags
regexp = /pattern/gim; // with flags g,i and m (to be covered soon)
```

  </div>
  </div>
</details>

---

### Can you name the six flags used in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Six flags in regular expressions are: global (g), case-insensitive (i), multiline (m), dotall (s), unicode (u), and sticky (y).
  </div><br/>
  <div><strong>Interview Response:</strong> Regular expressions may have flags that affect the search. There are only 6 of them in JavaScript, including the i, g, m, s, u, and y regular expression flags:<br /><br />
  <strong>Flag Descriptions:</strong><br />
  <ul>
    <li>With the <strong>i</strong> flag the search is set to case insensitive.</li>
    <li>The <strong>g</strong> flag the search is set to global and looks for all matches, without it only the first search match is returned.</li>
    <li>The <strong>m</strong> flag represents a query in multiline mode.</li>
    <li>The <strong>s</strong> flag enables dot all mode allows a dot to match the newline character.</li>
    <li>The <strong>u</strong> enables full Unicode support, the flag enables correct processing of surrogate pairs.</li>
    <li>Sticky flag <strong>y</strong> sets the stick mode that allows search for the exact position of the text.</li>
  </ul>
</div>
  </div>
</details>

---

### What does the 'g' flag do in a regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'g' flag in JavaScript regular expressions stands for 'global'. When you use the 'g' flag, it changes the regular expression to find all matches in the provided string rather than stopping after the first match.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example that demonstrates this:

```javascript
var str = "The cat sat on the mat.";

// Regular expression without 'g' flag. It will stop after the first match
var regex1 = /the/;
var result1 = str.match(regex1);
console.log(result1);  // Output: ["The", index: 0, input: "The cat sat on the mat.", groups: undefined]

// Regular expression with 'g' flag. It will find all matches
var regex2 = /the/gi;  // 'i' flag is for case insensitivity
var result2 = str.match(regex2);
console.log(result2);  // Output: ["The", "the"]
```

In the first example, the regular expression `/the/` finds the first instance of "the" and then stops. In the second example, the regular expression `/the/gi` finds all instances of "the" in any case (due to the 'i' flag), and returns an array of all matches.

  </div>
  </div>
</details>

---

### Can you explain the purpose of the 'i' flag in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'i' flag in a JavaScript regular expression stands for 'insensitive'. This means that it makes the search case-insensitive. Without the 'i' flag, the regular expression will match the case exactly as it is written.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example:

```javascript
var str = "Hello World! hello world!";

// Regular expression without 'i' flag. It will match exactly 'hello'
var regex1 = /hello/g;
var result1 = str.match(regex1);
console.log(result1);  // Output: ["hello"]

// Regular expression with 'i' flag. It will match 'hello' and 'Hello'
var regex2 = /hello/gi; // 'g' flag is for global search, 'i' flag is for case insensitivity
var result2 = str.match(regex2);
console.log(result2);  // Output: ["Hello", "hello"]
```

In the first example, the regular expression `/hello/g` finds only "hello" (all lowercase). In the second example, the regular expression `/hello/gi` finds all instances of "hello", regardless of case, and returns an array of all matches. That's the effect of the 'i' flag: it makes the regular expression case-insensitive.

  </div>
  </div>
</details>

---

### What does the 'm' flag represent in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'm' flag stands for multiline, enabling start and end anchors (^, $) to match at the start/end of each line.
  </div><br />
  <div><strong>Detailed Response:</strong> In JavaScript Regular Expressions, the 'm' flag stands for 'multiline'. When used, it changes the behavior of `^` and `$` symbols. Normally, `^` matches the beginning of the string, and `$` matches the end of the string. However, if the 'm' flag is set, `^` matches the start of each line within the string and `$` matches the end of any line within the string.

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example:

```javascript
var str = "Hello\nWorld";

// Regular expression without 'm' flag. ^ and $ match start and end of the string
var regex1 = /^Hello$/g;
var result1 = regex1.test(str);
console.log(result1);  // Output: false

// Regular expression with 'm' flag. ^ and $ match start and end of each line
var regex2 = /^Hello$/gm;  // 'g' flag is for global search, 'm' flag is for multiline matching
var result2 = regex2.test(str);
console.log(result2);  // Output: true
```

In the first example, `/^Hello$/g` tries to match the string that starts and ends with "Hello", but it doesn't find any match because the string "Hello\nWorld" starts with "Hello" and ends with "World".

In the second example, `/^Hello$/gm` matches the string that starts and ends with "Hello" on any line. It finds a match because "Hello" is the entire content of the first line in the multiline string "Hello\nWorld". The 'm' flag makes `^` and `$` match the start and end of each line, rather than the start and end of the whole string.

  </div>
  </div>
</details>

---

### Can you combine flags in Regex? How?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can combine flags in JavaScript regular expressions. To do this, you simply add each flag to the end of your regular expression without any spaces or commas between them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example where 'g', 'i', and 'm' flags are combined:

```javascript
var str = `Hello world
hello WORLD
HELLO WORLD`;

// Regular expression with 'g', 'i', and 'm' flags
var regex = /hello/gim;  // 'g' flag is for global search, 'i' flag is for case insensitivity, 'm' flag is for multiline matching

var result = str.match(regex);

console.log(result);  // Output: ["Hello", "hello", "HELLO"]
```

In this example, `/hello/gim` is a regular expression with the 'g', 'i', and 'm' flags. The 'g' flag means that the search should find all matches, not just the first. The 'i' flag means the search should be case-insensitive. The 'm' flag means `^` and `$` match start and end of each line, rather than start and end of the whole string.

As a result, the `match()` function finds all instances of "hello", regardless of case and across multiple lines, and returns them as an array.

  </div>
  </div>
</details>

---

### What does the 's' flag do in JavaScript regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 's' flag, also known as the dotAll flag, in JavaScript regular expressions makes the dot (`.`) special character match any character, including newline characters. Normally, the dot does not match line terminator characters such as newline (\n) or carriage return (\r).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example demonstrating the 's' flag:

```javascript
var str = "Hello\nWorld";

// Regular expression without 's' flag. The dot does not match newline
var regex1 = /Hello.World/;
var result1 = regex1.test(str);
console.log(result1);  // Output: false

// Regular expression with 's' flag. The dot matches newline
var regex2 = /Hello.World/s;  // 's' flag is for dotAll (allowing . to match newlines)
var result2 = regex2.test(str);
console.log(result2);  // Output: true
```

In the first example, `/Hello.World/` tries to match "Hello", followed by any character, followed by "World". But it fails because the dot does not match the newline character between "Hello" and "World".

In the second example, `/Hello.World/s` successfully matches "Hello\nWorld". The 's' flag makes the dot match the newline character between "Hello" and "World".

  </div>
  </div>
</details>

---

### What does the u flag signify in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The u flag enables full Unicode matching, which treats patterns as code points, not code units.
  </div><br/>
  <div><strong>Detailed Response:</strong> The 'u' flag in a JavaScript regular expression stands for 'unicode'. When the 'u' flag is used, the regular expression treats the pattern as a sequence of unicode code points. This is necessary for correctly handling characters from astral planes and properly interpreting certain escape sequences.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example:

```javascript
// Without 'u' flag
var regex1 = /^.$/;
console.log(regex1.test('💻'));  // Output: false

// With 'u' flag
var regex2 = /^.$/u;
console.log(regex2.test('💻'));  // Output: true
```

The character '💻' is a unicode symbol that takes up two JavaScript characters (it's a "surrogate pair"), so a regular expression without the 'u' flag will not treat it as a single character. As a result, `/^.$/` (a regex that matches any string with exactly one character) returns false when tested against '💻'.

However, with the 'u' flag, the regular expression `/^.$/u` correctly recognizes '💻' as a single unicode character, so it matches the pattern and `test()` returns true.

  </div>
  </div>
</details>

---

### What's the purpose of the y flag in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The y flag, or sticky flag, matches from the exact position indicated by the lastIndex property.
  </div><br />
  <div><strong>Detailed Response:</strong> The 'y' flag in a JavaScript regular expression stands for 'sticky'. When the 'y' flag is used, it causes the regular expression to search for a match from the exact position indicated by the `lastIndex` property of the regex. If the regex does not find a match at that exact position, it will not search for a match further along in the string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example:

```javascript
var str = "Hello Hello Hello";

// Regular expression without 'y' flag. It finds the first 'Hello' it can, regardless of lastIndex
var regex1 = /Hello/g; 
regex1.lastIndex = 6;
console.log(regex1.exec(str));  // Output: ["Hello", index: 6, input: "Hello Hello Hello", groups: undefined]

// Regular expression with 'y' flag. It tries to find 'Hello' exactly at position 6
var regex2 = /Hello/y;
regex2.lastIndex = 0;
console.log(regex2.exec(str));  // Output: ["Hello", index: 0, input: "Hello Hello Hello", groups: undefined]

regex2.lastIndex = 6;
console.log(regex2.exec(str));  // Output: ["Hello", index: 6, input: "Hello Hello Hello", groups: undefined]

regex2.lastIndex = 7;
console.log(regex2.exec(str));  // Output: null, because there is no 'Hello' starting at index 7
```

In this example, the 'y' flag causes the regular expression `/Hello/y` to only find a match if it starts at the exact position indicated by `regex2.lastIndex`. This allows you to control precisely where in the string the regular expression should look for matches.

  </div>
  </div>
</details>

---

### How does the match method work with Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The match method applies a regex to a string, returning an array of matches or null if no matches.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myString = 'We will, we will rock you';

console.log(myString.match(/we/gi)); // We,we (an array of 2 substrings that match)
```

  </div>
  </div>
</details>

---

### Can you explain the three regex modes of the match method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The match method has three modes: single match returning the first match, global match returning all matches, and sticky match executing from a specified position.
    </div><br />
  <div><strong>Technical Response:</strong> The match method has three working regex modes. First, if a regular expression has flag g, it returns an array of all matches. Second, if there is no such flag, it returns only the first match in the form of an array, with the whole match at index 0 and some additional details in properties. The array may have other indexes besides 0 if a part of the regular expression gets enclosed in parentheses. And finally, if there are no matches, null is returned (it does not matter if there’s flag g or not). This behavior is an essential nuance. If there are no matches, we do not receive an empty array but instead receive null. Forgetting about that may lead to errors, e.g.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here are JavaScript code examples of the three modes:

1. Single match:

```javascript
let str = "Hello world!";
let result = str.match(/world/); // Returns ["world"]

```

2. Global match:

```javascript
let str = "Hello world, world!";
let result = str.match(/world/g); // Returns ["world", "world"]

```

3. Sticky match:

```javascript
let str = "Hello world!";
let regex = /world/y;
regex.lastIndex = 6;
let result = str.match(regex); // Returns ["world"]

```

In the sticky match, the `lastIndex` property sets the index at which to start the next match.

  </div>
  </div>
</details>

---

### Is there a way to handle empty or null values in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, when the result contains an empty or null value. We should subscribe to the match method by adding an empty array. If the length is empty or null, we should do a condition check and return a value.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Wrong Approach
let matches = 'JavaScript'.match(/HTML/); // = null

if (!matches.length) {
  // Error: Cannot read property 'length' of null
  console.log('Error in the line above');
}

// Correct Approach
let matches = 'JavaScript'.match(/HTML/) || [];

if (!matches.length) {
  console.log('No matches'); // now it works
}
```

  </div>
  </div>
</details>

---

### How does the string replace method work with Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method str.replace(regexp, replacement) replaces regular expression matches in string str with replacement (all matches if flag g is present; otherwise, only the first one). The replacement string is the second parameter. We can utilize specific character combinations in it to insert match pieces.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// no flag g
console.log('We will, we will'.replace(/we/i, 'I')); // I will, we will

// with flag g
console.log('We will, we will'.replace(/we/gi, 'I')); // I will, I will
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> An example with $& symbol<br /><br />

  <div></div>

```js
console.log('I love HTML'.replace(/HTML/, '$& and JavaScript'));
// returns - I love HTML and JavaScript
```

  </div>
  </div>
</details>

---

### Is there a way to test for a string fragment using a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use the "test()" function or "match()" method with a regular expression to find a string fragment.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'I love JavaScript';
let regexp = /LOVE/i;

console.log(regexp.test(str)); // true
```

  </div>
  </div>
</details>

---
