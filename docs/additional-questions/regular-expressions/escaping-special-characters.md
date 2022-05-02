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

<head>
  <title>Escaping Characters | Regular Expression Interview Questions</title>
</head>

**Regular Expressions: Escaping Characters**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How do you escape a special character in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match a character having a special meaning in regex, you need to use an escape sequence prefix with a backslash (\). E.g., \. matches "."; regex \+ matches "+"; and regex \( matches "(". You also need to use regex \\ to match "\" (back-slash). Regex recognizes common escape sequences such as \n for newline, \t for tab, \r for carriage-return, \nnn for a up to 3-digit octal number, \xhh for a two-digit hex code, \uhhhh for a 4-digit Unicode, \uhhhhhhhh for a 8-digit Unicode.
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
alert('/'.match(/\//)); // '/'

// Using the RegExp Object
alert('/'.match(new RegExp('/'))); // finds /
```

  </div>
  </div>
</details>

---

### When are calling the new RegExp object, do we have to use the escape character in our regular expressions?

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
alert('Chapter 5.1'.match(regexp)); // null, when we ant 5.1

// Correct Approach
let regexp = new RegExp('\\d.\\d');
alert('Chapter 5.1'.match(regexp)); // returns 5.1
```

  </div>
  </div>
</details>

---
