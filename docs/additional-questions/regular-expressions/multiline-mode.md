---
title: Multiline Mode
description: The m flag is used to specify that a multiline input string should be treated as multiple lines. Regular Expressions Interview Questions
sidebar_position: 5
sidebar_label: Multiline Mode
keywords:
  - multiline mode
  - multiline input string
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
  - multiline mode
  - multiline input string
  - regular expressions
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MultilineSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Multiline Mode | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Multiline Mode**

---

<AdSense />

---

<CloseAllAnswers />

### What does the multiline mode do in JavaScript Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'm' flag in regular expressions, also known as multiline mode, modifies the behavior of '^' and '$' to match the start and end of each line within a string, rather than the entire string.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple JavaScript example using the 'm' flag in a regular expression:

```javascript
let str = `First line
Second line
Third line`;

let regex = /^Second.*$/m;

let match = str.match(regex);

console.log(match);  // This will output: ['Second line']
```

In this example, we use the 'm' flag with the `^Second.*$` regex to find 'Second line' at the start of a line in the multiline string. Without the 'm' flag, this would not match anything as 'Second line' is not at the start of the entire string.

  </div>
  </div>
</details>

---

### How do you enable multiline mode in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, multiline mode is enabled in regular expressions by appending an 'm' flag after the pattern, like this: `/pattern/m`. It allows '^' and '$' to match the start and end of each line.
  </div>
  </div>
</details>

---

### What does the '^' character represent in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, the '^' character represents the start of the string and the start of each line within the string, occurring after every newline ('\n').
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "apple\nbanana\napple";

let regexWithM = /^apple$/gm;
console.log(str.match(regexWithM)); 
// Outputs: [ 'apple', 'apple' ] (With "m" flag)
```

  </div>
  </div>
</details>

---

### What does the '$' character represent in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, the '$' character represents the end of the string and the end of each line within the string, occurring before every newline ('\n').
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "Hello, world!\nHello, javascript!\nHello, multiverse!";

let regex = /Hello, \w+!$/gm;

console.log(str.match(regex));
// Outputs: [ 'Hello, world!', 'Hello, javascript!', 'Hello, multiverse!' ]
```

In this example, the regular expression `/Hello, \w+!$/gm` matches any line that ends with a pattern "Hello, [word]!". The `g` flag makes it match globally, and the `m` flag allows `$` to match the end of each line. It matches all three lines in the string.

  </div>
  </div>
</details>

---

### How does multiline mode affect dotall mode in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline and dotall modes are independent in regex. Multiline mode affects '^' and '$' anchors, while dotall (enabled with 's' flag) makes '.' match any character including newline. They can be used together as needed.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using both multiline and dotall modes in JavaScript:

```javascript
let str = `First line
Second line
Third line`;

let regex = /^.*$/ms; // both multiline (m) and dotall (s) modes

let match = str.match(regex);

console.log(match);  // This will output: ['First line\nSecond line\nThird line']
```

In this example, '^.*$' with 'ms' flags will match the entire multiline string, including newline characters. This is because the '.' in dotall mode also matches newline characters, and '^' and '$' match the start and end of the string, respectively. Without the 's' flag, '.' would not match newline characters, and without the 'm' flag, '^' and '$' would only match the start and end of the entire string, not each line.

  </div>
  </div>
</details>

---

### What is the difference between global and multiline mode in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regex, the 'g' flag (global) makes the regex search for all matches in a string, instead of stopping at the first match. The 'm' flag (multiline) changes '^' and '$' to match the start and end of each line, not just the string.
  </div>
  </div>
</details>

---

### Are there any considerations when using lookahead and lookbehind in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, lookahead and lookbehind still work from the current position, not the start/end of lines. However, '^' and '$' within lookahead/lookbehind will respect multiline mode, matching line start/end.
  </div><br />
  <div><strong>Technical Details:</strong> There are considerations when using lookahead and lookbehind in multiline mode. The most significant is that these assertions don't consume characters in the string, but only assert whether a match is possible.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nbanana\napple";

let regexLookahead = /apple(?=\nbanana)/gm;
console.log(str.match(regexLookahead)); 
// Outputs: [ 'apple' ] 

let regexLookbehind = /(?<=apple\n)banana/gm;
console.log(str.match(regexLookbehind)); 
// Outputs: [ 'banana' ] 
```

In this example, `/apple(?=\nbanana)/gm` matches "apple" only when it's immediately followed by "\nbanana", but it does not include "\nbanana" in the match.

Similarly, `/(?<=apple\n)banana/gm` matches "banana" only when it's immediately preceded by "apple\n", but it does not include "apple\n" in the match.

The "m" flag makes `^` and `$` match the start and end of lines, but it doesn't change the behavior of lookahead and lookbehind.

  </div>
  </div>
</details>

---

### Is there a performance impact when using multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline mode can impact performance if the regex engine needs to check for line breaks in large strings. However, for most practical use cases, this performance impact would be minimal and unnoticeable.
  </div>
  </div>
</details>

---

### Can multiline and case-insensitive modes be used together?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiline ('m') and case-insensitive ('i') modes can be used together in a regular expression. For instance, in JavaScript, you can write `/pattern/mi` to enable both modes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nBanana\nAPPLE";

let regex = /^apple$/gmi;

console.log(str.match(regex));
// Outputs: [ 'apple', 'APPLE' ]
```

In this example, the regular expression `/^apple$/gmi` matches any line that only contains "apple", regardless of the case. The `g` flag makes it match globally, the `m` flag allows `^` and `$` to match the start and end of each line, and the `i` flag makes it case-insensitive. It matches the first and the third lines in the string.

  </div>
  </div>
</details>

---

### Does JavaScript's multiline mode work similarly to other languages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the multiline mode in JavaScript works similarly to many other languages like Python or Perl. It modifies '^' and '$' to match the start and end of each line, not just the whole string.
  </div>
  </div>
</details>

---

### How does multiline mode handle carriage return and line feed characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, both carriage return (\r) and line feed (\n) characters are considered as line terminators or breaks. Therefore, '^' and '$' will match positions after and before these characters respectively.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\r\nbanana\napple";

let regex = /^apple$/gm;

console.log(str.match(regex));
// Outputs: [ 'apple', 'apple' ]
```

In this example, the regular expression `/^apple$/gm` matches any line that only contains "apple". The `g` flag makes it match globally, and the `m` flag allows `^` and `$` to match the start and end of each line. It recognizes both `\r\n` (carriage return + line feed, as commonly used in Windows) and `\n` (line feed, as used in Unix-based systems) as line terminators. It matches the first and the third lines in the string.

  </div>
  </div>
</details>

---

### How does multiline mode affect character classes like \w, \d, and \s?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline mode does not directly affect character classes like \w, \d, and \s. These classes will match as usual regardless of whether the multiline flag is set. \w matches word characters, \d digits, and \s whitespace.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nbanana3\nApple 1";

let regexW = /\w/gm;
console.log(str.match(regexW));
// Outputs: [ 'a', 'p', 'p', 'l', 'e', 'b', 'a', 'n', 'a', 'n', 'a', '3', 'A', 'p', 'p', 'l', 'e', '1' ]

let regexD = /\d/gm;
console.log(str.match(regexD));
// Outputs: [ '3', '1' ]

let regexS = /\s/gm;
console.log(str.match(regexS));
// Outputs: [ ' ' ]
```

In this example, `\w` matches any word character (equivalent to `[a-zA-Z0-9_]`), `\d` matches any digit (equivalent to `[0-9]`), and `\s` matches any whitespace character. They match the same characters regardless of the "m" flag.

  </div>
  </div>
</details>

---

### How does the '\b' word boundary behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundary '\b' isn't affected by multiline mode. It still matches a position where a word character is followed by a non-word character or vice versa.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple apple\nbanana apple";

let regex = /\bapple\b/gm;

console.log(str.match(regex));
// Outputs: [ 'apple', 'apple', 'apple' ]
```

In this example, the regular expression `\bapple\b` matches the word "apple" when it appears as a whole word. It matches "apple" in both lines, regardless of the "m" flag. The word boundary `\b` matches the position where "apple" is followed by a space or the end of a line, ensuring that it doesn't match substrings within larger words (like if there were a word "pineapple").

  </div>
  </div>
</details>

---

### Can multiline mode be combined with the sticky flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiline mode can be combined with the sticky flag. Sticky flag makes the regex match start exactly at lastIndex.
  </div><br />
  <div><strong>Technical Response:</strong> Multiline mode can be combined with the "sticky" flag (indicated by "y") in JavaScript regular expressions. The sticky flag makes the regex start searching for a match from the index indicated by `lastIndex` property of the regex object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nbanana\napple";
let regex = /^apple$/gmy;

// Match from start
let result1 = regex.exec(str);
console.log(result1[0], regex.lastIndex); 
// Outputs: "apple", 6

// Match from index 6
let result2 = regex.exec(str);
console.log(result2, regex.lastIndex);
// Outputs: null, 6 (no match starting from index 6)

// Match from index 14
regex.lastIndex = 14;
let result3 = regex.exec(str);
console.log(result3[0], regex.lastIndex); 
// Outputs: "apple", 20
```

In this example, the regular expression `/^apple$/gmy` matches any line that only contains "apple". The `g` flag makes it match globally, the `m` flag allows `^` and `$` to match the start and end of each line, and the `y` flag makes it sticky. If a match is found, the `lastIndex` property of the regex is updated to the end of the match, and the next `exec` starts searching from there. If a match is not found, `lastIndex` is not updated.

  </div>
  </div>
</details>

---

### How do empty strings behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Empty strings are treated as lines by themselves in multiline mode, meaning '^' and '$' can match before and after them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nbanana\n";

let regex = /^$/gm;

let matches = str.match(regex);

console.log(matches.length);
// Outputs: 1
```

In this example, the regular expression `/^$/gm` matches any line that is empty. The `g` flag makes it match globally, and the `m` flag allows `^` and `$` to match the start and end of each line. It matches once because there's one empty line at the end of the string. Note that if the input string did not end with `\n`, there would be no match, because there wouldn't be an empty line.

  </div>
  </div>
</details>

---

### How do you handle backreferences in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backreferences work the same in multiline mode. They refer back to previously captured groups, regardless of line boundaries.
  </div><br />
  <div><strong>Technical Response:</strong> In JavaScript regex, backreferences in multiline mode are handled the same way as in single-line mode. The "m" flag does not affect their behavior. A backreference `\n` (where n is a group number) matches the same text as previously matched by the nth capturing group.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple apple\nbanana banana\napple banana";

let regex = /(\w+) \1/gm;

let matches = str.match(regex);

console.log(matches);
// Outputs: [ 'apple apple', 'banana banana' ]
```

In this example, the regular expression `/(\w+) \1/gm` matches any line that contains a word followed by a space and the same word again. The `g` flag makes it match globally, and the `m` flag allows `^` and `$` to match the start and end of each line. The `(\w+)` captures a word into group 1, and `\1` is a backreference that matches the same word. It matches the first and the second lines in the string.

  </div>
  </div>
</details>

---

### Is multiline mode supported across all JavaScript engines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiline mode is a standard feature and is supported across all ECMAScript-compliant JavaScript engines.
  </div><br />
  <div><strong>Technical Details:</strong> Most modern browsers have solid support for JavaScript regular expressions. However, specific support for advanced features like lookbehind assertions and Unicode property escapes may vary.
  </div><br />
  <div><strong className="codeExample">Here's a simple table illustration:</strong><br /><br />

  <div></div>

| Feature                       | Chrome | Firefox | Safari | Edge  |
|-------------------------------|--------|---------|--------|-------|
| Basic Regular Expressions     | Yes    | Yes     | Yes    | Yes   |
| Lookahead Assertions          | Yes    | Yes     | Yes    | Yes   |
| Lookbehind Assertions         | Yes    | No      | No     | Yes   |
| Unicode Property Escapes      | Yes    | No      | Partial| Yes   |
| Named Capture Groups          | Yes    | Yes     | No     | Yes   |
| s (dotAll) flag               | Yes    | Yes     | No     | Yes   |
| Sticky Flag                   | Yes    | Yes     | Yes    | Yes   |

Remember that JavaScript compatibility can change as browsers are updated. For the most accurate and up-to-date information, please check the official documentation or use a resource like [Can I Use](https://caniuse.com/) or [MDN Web Docs](https://developer.mozilla.org/).

  </div>
  </div>
</details>

---

### Can multiline mode be used with non-capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, non-capturing groups work the same way in multiline mode as they do in single-line mode. A non-capturing group (?:...) groups together the included pattern elements, but doesn't create a backreference.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "apple banana\nbanana apple\napple apple";

let regex = /^(?:apple banana|banana apple)$/gm;

console.log(str.match(regex));
// Outputs: [ 'apple banana', 'banana apple' ]
```

  </div>
  </div>
</details>

---

### Can multiline mode impact the operation of quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, multiline mode doesn't impact the operation of quantifiers in JavaScript regular expressions. Quantifiers such as *, +, ?, and &#123;n,m&#125; still work the same way in multiline mode as they do in single-line mode.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nbanana\napples";

let regex = /^apple.*$/gm;

console.log(str.match(regex));
// Outputs: [ 'apple', 'apples' ]
```

In this example, the regular expression `/^apple.*$/gm` matches any line that starts with "apple". The `g` flag makes it match globally, the `m` flag allows `^` and `$` to match the start and end of each line, and the `.*` matches any characters (except for line terminators), zero or more times. It matches the first and the third lines in the string. The `.*` quantifier does not extend across multiple lines, even in multiline mode.

  </div>
  </div>
</details>

---

### What's the difference between dot (.) and multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  The dot (.) matches any character except newline. Multiline mode changes how '^' and '$' behave, but does not affect the '.' dot.
  </div>
  </div>
</details>

---

### How do Anchors (caret ^/ dollar sign $) behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, the caret (^) matches the start of the string and after each newline (\n), while the dollar sign ($) matches before every newline and at the end of the string.
    </div><br />
  <div><strong>Technical Response:</strong> In the multiline mode, they match at the beginning and the end of the string and the start/end of a new line. If we do not have the m flag, we search only the first line, and each additional line gets missed. This outcome is because, by default, a caret only matches at the beginning of the text. In multiline mode, at the beginning of any line.<br />You should note that “Start of a line” formally means “immediately after a line break”: the test ^ in multiline mode matches at all positions preceded by a newline character \n. And at the text start.<br />When we are dealing with the dollar sign $, it behaves similarly. The regular expression \d$ finds the last digit in all lines.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log(str.match(/^\d/gm)); // 1, 2, 3
```

  </div>
  </div>
</details>

---

### What is the difference between the \n and (^,$) in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '\n' represents a newline character in regular expressions, marking the end of a line. '^' and '$', known as anchors, represent the start and end of a line or string, respectively.
    </div><br />
  <div><strong>Technical Details:</strong> To find a new line, we can use not only anchors ^ and $, but we can also use the newline character \n. The most notable behavior between the \n and (^,$) is that the new line only returns values in new lines. This characteristic can lead to odd behaviors where a value does not return when it exists at the end of a line. So, a \n in the pattern gets used, we need newline characters in the result, while anchors are used to find something at the beginning/end of a line. Yes, this can be confusing, but we should be aware of it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "apple\nbanana\napple";

// Matches 'apple' at the start of a line
let regex1 = /^apple/gm;
console.log(str.match(regex1)); // Outputs: [ 'apple', 'apple' ]

// Matches newline characters
let regex2 = /\n/g;
console.log(str.match(regex2)); // Outputs: [ '\n', '\n' ]
```

In the first regex, `/^apple/gm`, the `^` character is used to find 'apple' at the start of a line or string. The 'm' flag is used to apply `^` and `$` to each line, not just the start/end of the entire string.

In the second regex, `/\n/g`, the `\n` is used to find newline characters in the string. It finds two newline characters in the string. This is fundamentally different from `^` and `$`, which match positions in the string, not actual characters.

  </div>
  </div>
</details>

---
