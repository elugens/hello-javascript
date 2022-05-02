---
title: Alternation (OR) |
description: Alternation is the term in regular expression that is a simple “OR”. In a regular expression an “OR” is denoted with a vertical line character. Questions
sidebar_position: 13
sidebar_label: Alternation
keywords:
  - alternation
  - javascript alternation
  - regexp alternation
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
  - alternation
  - javascript alternation
  - regular expressions
  - interview answers
  - interview questions
---

<head>
  <title>Alternation | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Alternation (OR) |**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is Alternation in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Alternation is the term in a simple “OR” in a regular expression. In a regular expression, "OR” is denoted with a vertical line character |.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /html|php|css|java(script)?/gi; // Alternation |

let str = 'First HTML appeared, then CSS, then JavaScript';

alert(str.match(regexp)); // 'HTML', 'CSS', 'JavaScript'
```

  </div>
  </div>
</details>

---
