---
title: Word Boundary
description: A word boundary \b is a test, just like ^ and $. When the regexp engine comes across \b, it checks that the position in the string is a word boundary.
sidebar_position: 6
sidebar_label: Word Boundary
keywords:
  - word boundary
  - word boundaries
  - regexp word boundary
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
  - word boundary
  - word boundaries
  - regexp word boundary
  - regular expressions
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WordBoundarySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Word Boundary | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Word Boundary**

---

<AdSense />

---

<CloseAllAnswers />

### What does a word boundary in regex denote in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It represents a position where a word character is not followed or preceded by another word character.
  </div>
  </div>
</details>

---

### How is a word boundary represented in JavaScript's regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Regex, Word boundaries are represented by the '\b' meta-character.
  </div><br />
  <div><strong>Technical Response:</strong> A word boundary in JavaScript's regular expressions is represented by the `\b` character sequence. It denotes a position where a word character is not followed or preceded by another word-character. This position can be at the start or end of a string, or between a word character and a non-word character.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "Hello, welcome to HelloJavaScript. HelloJavaScript is great!";
let regex = /\bHelloJavaScript\b/g; 

let matches = str.match(regex);

console.log(matches); // prints: [ 'HelloJavaScript', 'HelloJavaScript' ]
```

In this example, the regular expression `/\bHelloJavaScript\b/g` matches the word "HelloJavaScript" where it appears as a whole word (not part of another word). The `g` at the end of the regular expression indicates a global search (find all matches rather than stopping after the first match).

If we didn't use the word boundary `\b`, we would also match words that contain "HelloJavaScript" as a substring. For example:

```javascript
let str = "Hello, welcome to HelloJavaScript. HelloJavaScript is great!";
let regex = /HelloJavaScript/g;

let matches = str.match(regex);

console.log(matches); // prints: [ 'HelloJavaScript', 'HelloJavaScript' ]
```

Here, the regular expression `/HelloJavaScript/g` matches both "HelloJavaScript" and "HelloJavaScript" because we didn't specify the word boundary.

  </div>
  </div>
</details>

---

### What is the opposite of a word boundary in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Regex, The '\B' meta-character matches a non-word boundary position.
  </div><br />
  <div><strong>Technical Response:</strong> The opposite of a word boundary in regular expressions is denoted by `\B`. While `\b` matches the position where a word character is not followed or preceded by another word character, `\B` matches the position where a word character is followed or preceded by another word character.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "Hello, welcome to HelloJavaScript. HelloJavaScriptProgramming is great!";
let regex = /\BHelloJavaScript\B/g;

let matches = str.match(regex);

console.log(matches); // prints: [ 'HelloJavaScript' ]
```

In this example, the regular expression `/\BHelloJavaScript\B/g` matches "HelloJavaScript" only when it's part of another word, like "HelloJavaScriptProgramming". The `g` at the end of the regular expression indicates a global search (find all matches rather than stopping after the first match).

If the string was "Hello, welcome to HelloJavaScript. HelloJavaScript is great!", the same regex would not match "HelloJavaScript" because in this case, "HelloJavaScript" is not part of another word, it stands alone:

```javascript
let str = "Hello, welcome to HelloJavaScript. HelloJavaScript is great!";
let regex = /\BHelloJavaScript\B/g;

let matches = str.match(regex);

console.log(matches); // prints: null
```

In this case, there is no match, so the `match` function returns `null`.

  </div>
  </div>
</details>

---

### What characters does JavaScript consider as word characters for the '\b' meta-character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript considers alphanumeric characters (A-Z, a-z, 0-9) and the underscore (_) as word characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "Hello, world! This is sample text with_123 some word boundaries.";
let regex = /\b\w+\b/g;

let matches = str.match(regex);

console.log(matches); 
// prints: "Hello", "world", "This", "is", "sample", "text", "with_123", "some", "word", "boundaries"]
```

Note that characters other than alphanumeric characters and the underscore are considered non-word characters by \b. Therefore, if a word is followed or preceded by any non-word character, it is considered a word boundary.

```javascript
let str = "Hello, world! This is a sample-text with_123 some word-boundaries.";
let regex = /\b\w+\b/g;

let matches = str.match(regex);

console.log(matches); // prints: [ 'Hello', 'world', 'This', 'is', 'a', 'sample', 'text', 'with_123', 'some', 'word', 'boundaries' ]
```

In this case, the words "sample-text" and "word-boundaries" are treated as separate words because they are separated by non-word characters (`-` and `-`, respectively).

  </div>
  </div>
</details>

---

### Can you explain why 'at' doesn't match 'cat' when using '\bat' in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '\bat' specifies a word boundary before 'at', but 'c' before 'at' in 'cat' forms a word, violating the boundary.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "cat in the hat";
let regex = /\bat\b/g;

let matches = str.match(regex);

console.log(matches);  // output: null
```

  </div>
  </div>
</details>

---

### How does '\b' behave differently at the start and end of a string in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> At the start, '\b' matches if the first character is a word character. At the end, it matches if the last character is a word character.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using '\b' at the start of a string
const regexStart = /\bfoo/;
console.log(regexStart.test('foo bar')); // Output: true
console.log(regexStart.test('foobar')); // Output: true

// Using '\b' at the end of a string
const regexEnd = /bar\b/;
console.log(regexEnd.test('foo bar')); // Output: true
console.log(regexEnd.test('barfoo')); // Output: false
```

  </div>
  </div>
</details>

---

### Can a word boundary match a position between two non-word characters in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it matches between a word character and a non-word character or at the start or end of a string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const regex = /\bfoo\b/;
console.log(regex.test('foo'));         // Output: true
console.log(regex.test('foo bar'));     // Output: true
console.log(regex.test('foobar'));      // Output: false
console.log(regex.test('foo_bar'));     // Output: false
console.log(regex.test('foo123'));      // Output: false
console.log(regex.test('123 foo 456'));   // Output: true
```

  </div>
  </div>
</details>

---

### Why do we use word boundaries in JavaScript regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundaries are used to perform whole-word matches, preventing partial matches within larger words.
  </div>
  </div>
</details>

---

### What will '\b' match in the string "#apple#" in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '\b' matches positions before 'a' and after 'e' because these are boundaries between word and non-word characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '#apple#'
const regex = /\bapple\b/;
const match = str.match(regex);
console.log(match); // output: ["apple"]
console.log(regex.test('#apple#'));  // Output: true
```

  </div>
  </div>
</details>

---

### Can Regex word boundaries consume characters in a string?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, word boundaries do not consume characters, they match positions in a string.
  </div>
  </div>
</details>

---

### How would a word boundary handle punctuations in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Punctuations are treated as a non-word character. A word boundary can match the position before the word or after, near punctuation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const regex = /\bfoo\b/;
console.log(regex.test('foo!bar'));  // Output: true
console.log(regex.test('foo!'));  // Output: true
console.log(regex.test('bar?foo')); // Output: true
console.log(regex.test('bar.foo')); // Output: true

////////////////////////////////////

let str = 'bar?foo'
const regex = /\bfoo\b/;
const match = str.match(regex)
console.log(match); // ["foo"]
```

  </div>
  </div>
</details>

---

### What happens if you apply a global search with '\b' in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the \b meta-character in regex is used as a word boundary. This essentially means that the regex will match the position where a word character is not followed or preceded by another word-character, such as between a letter and a space.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let text = "I like apple. I love to eat an apple. The apple is red.";
let regex = /\bapple\b/g;

let result = text.match(regex);

console.log(result); // This will output: [ 'apple', 'apple', 'apple' ]
```

  </div>
  </div>
</details>

---

### How does the word boundary regex behave in the case of consecutive word characters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It doesn't match positions between consecutive word characters because they don't form a word boundary. However, it will match at the start and end of the sequence of word characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let text = "apple123 orange4567 banana89";
let regex = /\b/g;

let result = text.split(regex);

console.log(result); // This will output: [ 'apple123', ' ', 'orange4567', ' ', 'banana89' ]
```

  </div>
  </div>
</details>

---

### Can you use a word boundary to match a space character in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, word boundaries don't match space characters. They match positions between word and non-word characters.
  </div>
  </div>
</details>

---

### How can you combine word boundaries with other regex elements in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can combine word boundaries with other regex elements in JavaScript by placing `\b` around the element in the pattern. For instance, to match the word "apple", you can use `/\bapple\b/g`. The `\b` ensures "apple" isn't part of a larger word.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "cat, concatenate, cataract";
let regex = /\bcat\b/g;

let result = text.match(regex);

console.log(result); // Outputs: ['cat']
```

In this code, `\bcat\b` only matches the standalone word "cat", not "cat" in "concatenate" or "cataract".

  </div>
  </div>
</details>

---

### How would you use a word boundary to match 'end' but not 'ending' in a JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use word boundaries in a JavaScript regex to match 'end' but not 'ending' by using the pattern `/\bend\b/g`. This ensures only the standalone word 'end' is matched.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "end ending bend";
let regex = /\bend\b/g;

let result = text.match(regex);

console.log(result); // Outputs: ['end']
```

In this code, `\bend\b` only matches the standalone word "end", not "end" in "ending" or "bend".

  </div>
  </div>
</details>

---

### How can word boundaries help in validating user input in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundaries can help to ensure that user input matches exact patterns or words, improving data validation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a code snippet where word boundaries are used to validate user input for a specific username format (only allows alphanumeric characters and underscores).

```javascript
function validateUsername(username) {
  let regex = /^\b\w+\b$/g;
  return regex.test(username);
}

console.log(validateUsername('username_1')); // Outputs: true
console.log(validateUsername('username@1')); // Outputs: false
```

Here, the regex `^\b\w+\b$` checks that the entire username (`^...$`) consists of one or more word characters (`\w+`) enclosed by word boundaries (`\b`). This ensures the username doesn't contain invalid characters.

  </div>
  </div>
</details>

---

### Does '\b' meta-character match the beginning or end of a line in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, '\b' doesn't match line boundaries. It matches word boundaries at the start or end of a string.
  </div>
  </div>
</details>

---

### Can you use word boundaries to replace specific words in a string in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, word boundaries can be used with the replace method to replace specific whole words in a string.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "I love apples. I love to eat apples.";
let regex = /\bapples\b/g;

let newText = text.replace(regex, 'oranges');

console.log(newText); // Outputs: "I love oranges. I love to eat oranges."
```

In the above code, the `replace()` method uses the regex with word boundaries (`\b`) to replace all standalone instances of "apple" with "orange".

  </div>
  </div>
</details>

---

### Can you use word boundaries in a character set in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, word boundaries are not valid within a character set. They match positions, not actual characters.
  </div>
  </div>
</details>

---

### What is a word boundary \b in regular expressions (regexp)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A word boundary '\b' in regex represents the position where a word character is not followed or preceded by another word character.
    </div><br />
  <div><strong>Technical Response:</strong> A word boundary \b is a test, just like ^ and $. When the regexp engine (program module that implements searching for RegExp) comes across \b, it checks that the position in the string is a word boundary. Three different positions qualify as word boundaries in regular expressions. For instance, if the first string character is a word character \w. Also, between two characters in the string, where one is a word character \w, and the other is not, and at the string end if the last string character is a word character \w. We can use \b not only with words but also with digits.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('Hello, Java!'.match(/\bJava\b/)); // Java
console.log('Hello, JavaScript!'.match(/\bJava\b/)); // null

// More Examples

console.log('Hello, Java!'.match(/\bHello\b/)); // Hello
console.log('Hello, Java!'.match(/\bJava\b/)); // Java
console.log('Hello, Java!'.match(/\bHell\b/)); // null (no match)
console.log('Hello, Java!'.match(/\bJava!\b/)); // null (no match)

// Digit Boundaries
console.log('1 23 456 78'.match(/\b\d\d\b/g)); // returns 23,78
console.log('12,34,56'.match(/\b\d\d\b/g)); // returns 12,34,56
```

  </div>
  </div>
</details>

---

### Does a word boundary work on Non-Latin alphabets?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundaries may not function as expected with Non-Latin alphabets as they're designed to work with alphanumeric characters and underscores.
    </div><br/>
  <div><strong>Technical Details:</strong> The word boundary test \b checks that there should be \w on the one side from the position and "not \w" – on the other side. But \w means a Latin letter a-z (or a digit or an underscore), so the test does not work for other characters, e.g., Cyrillic letters or Hieroglyphs.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example with Cyrillic characters:

```javascript
let text = "яблоко груша банан";
let regex = /\bяблоко\b/g;

let result = text.match(regex);

console.log(result); // Outputs: null
```

In this code, we're trying to match the word for "apple" in Russian ("яблоко"). However, the output is `null`, indicating no matches, because `\b` doesn't recognize the Cyrillic characters as word characters.

While `\b` is useful for many scenarios with English and other languages using the Latin alphabet, for non-Latin alphabets, you may need to use different approaches or libraries that support Unicode word boundaries.

  </div>
  </div>
</details>

---
