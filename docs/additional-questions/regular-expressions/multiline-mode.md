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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/MultilineSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Multiline Mode | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Multiline Mode**

<CloseAllAnswers />

---

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
  </div><br />
  </div>
</details>

---

### What does the '^' character represent in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, the '^' character represents the start of the string and the start of each line within the string, occurring after every newline ('\n').
  </div><br />
  </div>
</details>

---

### What does the '$' character represent in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, the '$' character represents the end of the string and the end of each line within the string, occurring before every newline ('\n').
  </div><br />
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
  </div><br />
  </div>
</details>

---

### Are there any considerations when using lookahead and lookbehind in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, lookahead and lookbehind still work from the current position, not the start/end of lines. However, '^' and '$' within lookahead/lookbehind will respect multiline mode, matching line start/end.
  </div><br />
  </div>
</details>

---

### Is there a performance impact when using multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline mode can impact performance if the regex engine needs to check for line breaks in large strings. However, for most practical use cases, this performance impact would be minimal and unnoticeable.
  </div><br />
  </div>
</details>

---

### Can multiline and case-insensitive modes be used together?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiline ('m') and case-insensitive ('i') modes can be used together in a regular expression. For instance, in JavaScript, you can write `/pattern/mi` to enable both modes.
  </div><br />
  </div>
</details>

---

### Does JavaScript's multiline mode work similarly to other languages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the multiline mode in JavaScript works similarly to many other languages like Python or Perl. It modifies '^' and '$' to match the start and end of each line, not just the whole string.
  </div><br />
  </div>
</details>

---

### How does multiline mode handle carriage return and line feed characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In multiline mode, both carriage return (\r) and line feed (\n) characters are considered line breaks. Therefore, '^' and '$' will match positions after and before these characters respectively.
  </div><br />
  </div>
</details>

---

### How does multiline mode affect character classes like \w, \d, and \s?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline mode does not directly affect character classes like \w, \d, and \s. These classes will match as usual regardless of whether the multiline flag is set. \w matches word characters, \d digits, and \s whitespace.
  </div><br />
  </div>
</details>

---

### How does the '\b' word boundary behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Word boundary '\b' isn't affected by multiline mode. It still matches a position where a word character is followed by a non-word character or vice versa.
  </div><br />
  </div>
</details>

---

### Can multiline mode be combined with the sticky flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiline mode can be combined with the sticky flag. Sticky flag makes the regex match start exactly at lastIndex.
  </div><br />
  </div>
</details>

---

### How do empty strings behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Empty strings are treated as lines by themselves in multiline mode, meaning '^' and '$' can match before and after them.
  </div><br />
  </div>
</details>

---

### How do you handle backreferences in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Backreferences work the same in multiline mode. They refer back to previously captured groups, regardless of line boundaries.
  </div><br />
  </div>
</details>

---

### Is multiline mode supported across all JavaScript engines?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiline mode is a standard feature and is supported across all ECMAScript-compliant JavaScript engines.
  </div><br />
  </div>
</details>

---

### Can multiline mode be used with non-capturing groups?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, non-capturing groups work the same way in multiline mode as they do in single-line mode.
  </div><br />
  </div>
</details>

---

### Can multiline mode impact the operation of quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, multiline mode does not impact quantifiers like *, +, ?, and {}. They work the same way as in single-line mode.
  </div><br />
  </div>
</details>

---

### What's the difference between dot (.) and multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  The dot (.) matches any character except newline. Multiline mode changes how '^' and '$' behave, but does not affect the '.' dot.
  </div><br />
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

alert(str.match(/^\d/gm)); // 1, 2, 3
```

  </div>
  </div>
</details>

---

### What is the difference between the \n and ^$ in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '\n' represents a newline character in regular expressions, marking the end of a line. '^' and '$', known as anchors, represent the start and end of a line or string, respectively.
    </div><br />
  <div><strong>Technical Details:</strong> To find a new line, we can use not only anchors ^ and $, but we can also use the newline character \n. The most notable behavior between the \n and ^$ is that the new line only returns values in new lines. This characteristic can lead to odd behaviors where a value does not return when it exists at the end of a line. So, a \n in the pattern gets used, we need newline characters in the result, while anchors are used to find something at the beginning/end of a line. Yes, this can be confusing, but we should be aware of it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

alert(str.match(/\d\n/gm)); // alerts 1\n,2\n
```

  </div>
  </div>
</details>

---
