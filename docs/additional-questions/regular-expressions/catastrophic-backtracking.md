---
title: Catastrophic Backtracking
description: Catastrophic backtracking is a condition that can occur if you are checking a (usually long) string against a complex regular expression.
sidebar_position: 15
sidebar_label: Catastrophic Backtracking
keywords:
  - catastrophic backtracking
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
  - catastrophic backtracking
  - regular expressions
  - interview answers
  - interview questions
---

<head>
  <title>Catastrophic Backtracking | Regular Expressions Questions</title>
</head>

**Regular Expressions: Catastrophic Backtracking**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the meaning of catastrophic backtracking in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Catastrophic backtracking is a condition that can occur if you are checking a (usually long) string against a complex regular expression. The problem usually occurs if something towards the end of the string causes the string not to match. This problem is common in some browsers like Firefox and can happen on the server-side. We should note that catastrophic backtracking is a runaway regular expression.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example: Catastrophic Backtracking
let regexp = /^(\d+)*$/;

let str = '012345678901234567890123456789z';

// will take a very long time (careful!)
alert(regexp.test(str));
```

  </div>
  </div>
</details>

---

### How do you prevent catastrophic backtracking in the regex engine?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The solution is simple. When nesting repetition operators, ensure that there is only one way to match the exact match and prevent backtracking in these cases. The performance can sometimes improve by changing the greedy quantifiers into lazy ones, but that is not always the case. Another critical step is to attempt to debug your pattern to ensure it gets written correctly.
    </div>
  </div>
</details>

---
