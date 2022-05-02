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

<head>
  <title>Regex Sticky Flag | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Regex Sticky Flag**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does the regex flag ‘Y’ do in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The flag y allows us to perform the search at the given position in the source string. The flag y makes regexp.exec(str) search strictly at position lastIndex, not “starting from” it. There is a critical performance gain when using flag y.
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
