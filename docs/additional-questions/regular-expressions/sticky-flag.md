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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StickyFlagSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Regex Sticky Flag | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Regex Sticky Flag**

<CloseAllAnswers />

---

### What is the purpose of the sticky flag in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'Y' flag, or sticky flag, makes a regex match only from the index it last matched, enabling sequential matching rather than searching the entire string. The flag 'y' makes regexp.exec(str) search strictly at position lastIndex, not “starting from” it. There is a critical performance gain when using flag y.
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

### How does the sticky flag differ from the global flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unlike the global flag (g), the sticky flag (y) doesn't search the whole string for matches but sticks to the "lastIndex" where the previous match ended.
  </div>
  </div>
</details>

---

### What does the "lastIndex" property represent in a Regex with a sticky flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "lastIndex" property represents the position at which to start the next match when using the sticky flag.
  </div>
  </div>
</details>

---

### Is the sticky flag compatible with all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As of 2021, all modern browsers support the sticky flag. However, it's not supported in Internet Explorer.
  </div>
  </div>
</details>

---

### Can you combine the sticky flag with other flags?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can combine the sticky flag with other flags such as 'g' for global, 'i' for case-insensitive, and m for multiline.
  </div>
  </div>
</details>

---

### What happens if the sticky flag doesn't find a match at the "lastIndex"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If no match is found at "lastIndex", the regex returns null and "lastIndex" is reset to 0.
  </div>
  </div>
</details>

---

### How does the sticky flag affect the "exec" method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> With the sticky flag, the "exec" method only finds a match starting exactly at "lastIndex", unlike without the flag.
  </div>
  </div>
</details>

---

### What does the sticky flag do with the "match" method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "match" method behaves the same way regardless of the sticky flag. The flag doesn't influence the "match" method's output.
  </div>
  </div>
</details>

---

### What is a common use case for the sticky flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A common use case for the sticky flag is when parsing strings token by token, as it continues matching from where the last match ended.
  </div>
  </div>
</details>

---

### How does the sticky flag impact performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It can improve performance when parsing long strings, as it doesn't need to scan the entire string after each match.
  </div>
  </div>
</details>

---
