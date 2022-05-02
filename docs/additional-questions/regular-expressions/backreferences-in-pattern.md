---
title: Backreference Pattern
description: A backreference in a regular expression identifies a previously matched group and looks for the same text again. Regular Expressions Interview Questions
sidebar_position: 12
sidebar_label: Backreferences
keywords:
  - backreferences in patterns
  - regexp backreferences
  - backreference in a regular expressions
  - regular expressions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - backrefernces in patterns
  - regexp backreferences
  - backreference in a regular expressions
  - regular expressions
  - interview answers
  - interview questions
---

<head>
  <title>Backreference Pattern | Regular Expressions Questions</title>
</head>

**Regular Expressions: Backreference Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

**Regular expressions: Backreferences in pattern: \N and `\k<name>`**

### What is backreferencing in regular JavaScript expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When matching string patterns using regular expressions, we might wish to match the same piece of text more than once. When the pattern used to perform the first match includes non-literal elements, we can look for the repeated text using a backreference. A backreference in a regular expression identifies a previously matched group and looks for the exact text again.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Backreference by number: \N
let str = `He said: "She's the one!" "She's the one!".`;

let regexp = /(['"])(.*?)\1/g;

alert(str.match(regexp)); // "She's the one!"

// Backreference by name: \k<name>
let str = `He said: "She's the one!".`;

let regexp = /(?<quote>['"])(.*?)\k<quote>/g;

alert(str.match(regexp)); // "She's the one!"
```

  </div>
  </div>
</details>

---
