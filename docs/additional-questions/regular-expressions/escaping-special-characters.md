---
title: Escaping Characters
description: To match a character having special meaning in regex, you need to use a escape sequence prefix with a backslash (\). Regular Expressions Interview Questions
sidebar_position: 7
sidebar_label: Escaping Characters
keywords:
  - escaping characters
  - escaping special characters
  - regex escape sequences
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
  - escaping characters
  - escaping special characters
  - regex escape sequences
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/EscapingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Escaping Characters | Regular Expression Interview Questions</title>
</head>

**Regular Expressions: Escaping Characters**

<CloseAllAnswers />

---

### What is the purpose of escaping characters in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Escaping characters prevents certain special characters from being interpreted as part of the regular expression's syntax, allowing them to be used as literal characters instead.
  </div>
  </div>
</details>

---

### Can you name some special characters that need to be escaped in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript Regex, the following special characters need to be escaped with a backslash (\): . * + ? ^ $ &#123; &#125; ( ) | [ ] \ and /.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "Hello (world). How are you? $100 is the cost. [JavaScript] {Regex} *bold*";
let specialChars = ["$", "(", ")", ".", "*", "+", "?", "[", "]", "{", "}", "\\"];

// the regext variable is generates the regex value dynamically
// /[\$\(\)\.\*\+\?\[\]\{\}\\]/g
let regex = new RegExp('[' + specialChars.map(c => '\\' + c).join('') + ']', 'g');
console.log(regex); 

let newText = text.replace(regex, '-');

console.log(newText); // Outputs: "Hello -world-. How are you- -100 is the cost. -JavaScript- -Regex- -bold-"
```

In this code, we're replacing all special characters with the dash character `-`. The `map()` function is used to add a `\` before each special character to escape it. The special characters include `$`, `(`, `)`, `.`, `*`, `+`, `?`, `[`, `]`, `{`, `}`, and `\\`.
  </div>
  </div>
</details>

---

### What does `\\` mean in a JavaScript regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a JavaScript regular expression, the `\\` sequence is used to escape the backslash character itself. This is necessary because `\` is the escape character in JavaScript strings.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example where `\\` is used to match a file path.

```javascript
let text = "C:\\Program Files\\Some Folder";
let regex = /\\/;
let result = text.split(regex);

console.log(result); // Outputs: [ 'C:', 'Program Files', 'Some Folder' ]
```

In this code, the `split()` method uses the regex `/\\/` (which matches a single backslash) to split the file path into different parts. Each `\\` in the string is treated as a single `\` due to the JavaScript string escaping, and the regex `/\\/` matches these single `\` characters.

  </div>
  </div>
</details>

---

### Does the escape character itself ('\') need to be escaped in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the escape character `\` itself needs to be escaped in JavaScript Regex. You escape it by using two backslashes `\\` to represent a single backslash in the pattern.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's a JavaScript code example:

```javascript
let text = "Hello\\World";
let regex = /\\/g;

let result = text.match(regex);

console.log(result); // Outputs: [ '\\' ]
```

In this code, the regex `/\\/` is used to match the single backslash (`\`) in the string "Hello\\World". Because `\` is an escape character, we use `\\` to represent a literal `\`.

  </div>
  </div>
</details>

---

### Can you escape the '.' character in JavaScript Regex? Why would you want to?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can escape the '.' character in JavaScript Regex, and there are situations where you'd want to. By default, '.' matches any character except newline. If you want to match the literal '.' character, you must escape it using `\\.`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "www.example.com";
let regex = /\./g;

let result = text.split(regex);

console.log(result); // Outputs: ['www', 'example', 'com']
```

In this code, the `split()` method uses the regex `/\./` (which matches a literal '.') to split the URL into different parts. Without escaping, '.' would match any character, splitting the string in undesired ways.

  </div>
  </div>
</details>

---

### Why do we escape the caret (^) character in a JavaScript regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The caret ^ is escaped because it's a special character in Regex that matches the start of input. To match a literal caret, you escape it.
  </div>
  </div>
</details>

---

### What is the role of the dollar sign ($) in JavaScript Regex and why would it need to be escaped?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript Regex, the dollar sign (`$`) is a special character that matches the end of the input. If you want to match the literal dollar sign character, you need to escape it using `\\$`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "The price is $100";
let regex = /\$.../g;

let result = text.match(regex);

console.log(result); // Outputs: ["$100"]
```

In this code, the regex `/\$/` is used to match the literal dollar sign (`$`) in the string. If `$` were not escaped, the regex would attempt to match the end of the input, not the dollar sign.

  </div>
  </div>
</details>

---

### How would you escape the asterisk (*) character in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The asterisk (*) is a special character in JavaScript Regex that means "zero or more" of the preceding element. If you want to match the literal asterisk character, you need to escape it using `\*`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "5 * 3 equals 15";
let regex = /\*/g;

let result = text.match(regex);

console.log(result); // Outputs: [ '*' ]
```

In this code, the regex `/\*/` is used to match the literal asterisk (`*`) in the string. If `*` were not escaped, it would act as a quantifier, not a literal character.

  </div>
  </div>
</details>

---

### Why would you escape the question mark (?) in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript Regex, ? is a special character that makes the preceding item optional. To match a literal question mark, you need to escape it using \?.
  </div>
  </div>
</details>

---

### What is the significance of escaping the pipe character (|) in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript Regex, the pipe character (|) signifies logical OR between expressions. To match a literal pipe, it needs to be escaped using a backslash, as \| .
  </div>
  </div>
</details>

---

### Can you explain the significance of \0 in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, \0 in a regex pattern represents the null character (ASCII 0). It's not often used, but it can match null characters if they are present in the text.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "Hello\0World";
let regex = /\0/g;

let result = text.split(regex);

console.log(result); // Outputs: [ 'Hello', 'World' ]
```

In this code, the `split()` method uses the regex `/\0/` to split the string into "Hello" and "World" at the null character (`\0`). Note that null characters are not typically found in regular text.

  </div>
  </div>
</details>

---

### Why is it necessary to escape square brackets ([ ]) in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript Regex, square brackets (`[ ]`) define a character set, matching any one character enclosed within the brackets. If you want to match the literal characters '[' or ']', you must escape them using `\\[`or `\\]`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let text = "Array elements: [1, 2, 3]";
let regex = /[\[\]]/g;

let result = text.match(regex);

console.log(result); // Outputs: [ '[', ']' ]
```

In this code, the regex `/[\[\]]/g` matches the literal characters '[' and ']' in the string. If they were not escaped, the regex would define a character set, not match the literal characters.

  </div>
  </div>
</details>

---

### How would you escape the plus sign (+) in JavaScript Regex and why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript Regex, you'd escape the plus sign (+) with a backslash, like \\+. This is done when you want to match a literal plus sign, as unescaped + means 'one or more' of the preceding element.
  </div>
  </div>
</details>

---

### How do you escape a special character in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can escape a special character in a regular expression by using a backslash (\) before the character. For example, to escape the dot (.) character, you would write '\.' in order to escape a period.
    </div><br/>
  <div><strong>Technical Details:</strong> To match a character having a special meaning in regex, you need to use an escape sequence prefix with a backslash (\). E.g., \. matches "."; regex \+ matches "+"; and regex \( matches "(". You also need to use regex \\ to match "\" (back-slash). Regex recognizes common escape sequences such as \n for newline, \t for tab, \r for carriage-return, \nnn for a up to 3-digit octal number, \xhh for a two-digit hex code, \uhhhh for a 4-digit Unicode, \uhhhhhhhh for a 8-digit Unicode.
    </div>
  </div>
</details>

---

### Is a forward slash “/” a special character in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A slash symbol `/` is not a special character, but in JavaScript, you use it to open and close the regexp: /...pattern.../, so we should escape it too when attempting to match it. On the other hand, if we are not using /.../, but create a regexp using the new RegExp, we do not need to escape it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('/'.match(/\//)); // '/'

// Using the RegExp Object
console.log('/'.match(new RegExp('/'))); // finds /
```

  </div>
  </div>
</details>

---

### When we are calling the new RegExp object, do we have to use the escape character in our regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  If we create a regular expression with the new RegExp, we do not have to escape /, but need to do other escaping like the `\d` flag. The reason that this happens is that strings consume backslashes when we use the RegExp object constructor. The approach we should use is an additional backslash to escape special flags like \d. Instead of \d, we need to use `\\d`.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Wrong Approach
let regexp = new RegExp('d.d');
console.log('Chapter 5.1'.match(regexp)); // null, when we want 5.1

// Correct Approach
let regexp = new RegExp('\\d.\\d');
console.log('Chapter 5.1'.match(regexp)); // returns 5.1
```

  </div>
  </div>
</details>

---
