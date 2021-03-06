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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WordBoundarySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Word Boundary | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Word Boundary**

<CloseAllAnswers />

---

### What is a word boundary \b in regular expressions (regexp)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A word boundary \b is a test, just like ^ and $. When the regexp engine (program module that implements searching for RegExp) comes across \b, it checks that the position in the string is a word boundary. Three different positions qualify as word boundaries in regular expressions. For instance, if the first string character is a word character \w. Also, between two characters in the string, where one is a word character \w, and the other is not, and at the string end if the last string character is a word character \w. We can use \b not only with words but also with digits.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Hello, Java!'.match(/\bJava\b/)); // Java
alert('Hello, JavaScript!'.match(/\bJava\b/)); // null

// More Examples

alert('Hello, Java!'.match(/\bHello\b/)); // Hello
alert('Hello, Java!'.match(/\bJava\b/)); // Java
alert('Hello, Java!'.match(/\bHell\b/)); // null (no match)
alert('Hello, Java!'.match(/\bJava!\b/)); // null (no match)

// Digit Boundaries
alert('1 23 456 78'.match(/\b\d\d\b/g)); // returns 23,78
alert('12,34,56'.match(/\b\d\d\b/g)); // returns 12,34,56
```

  </div>
  </div>
</details>

---

### Does a word boundary work on Non-Latin alphabets?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The word boundary test \b checks that there should be \w on the one side from the position and "not \w" ??? on the other side. But \w means a Latin letter a-z (or a digit or an underscore), so the test does not work for other characters, e.g., Cyrillic letters or Hieroglyphs.
    </div>
  </div>
</details>

---
