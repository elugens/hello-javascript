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

### What is the function of the regular expression m flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We should use the "m" flag to specify that a multi-line input string should get treated as multiple lines. If we use the regex flag, the ^ and $ should match at the start or end of any line within the input string. Instead of the beginning or end of the whole string input, we are trying to search.
    </div>
  </div>
</details>

---

### How do Anchors (caret ^/ dollar sign $) behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the multiline mode, they match at the beginning and the end of the string and the start/end of a line. If we do not have the m flag, we search only the first line, and each additional line gets missed. This outcome is because, by default, a caret only matches at the beginning of the text. In multiline mode, at the beginning of any line.<br />You should note that “Start of a line” formally means “immediately after a line break”: the test ^ in multiline mode matches at all positions preceded by a newline character \n. And at the text start.<br />When we are dealing with the dollar sign $, it behaves similarly. The regular expression \d$ finds the last digit in all lines.
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
  <div><strong>Interview Response:</strong> To find a new line, we can use not only anchors ^ and $, but we can also use the newline character \n. The most notable behavior between the \n and ^$ is that the new line only returns values in new lines. This characteristic can lead to odd behaviors where a value does not return when it exists at the end of a line. So, a \n in the pattern gets used, we need newline characters in the result, while anchors are used to find something at the beginning/end of a line. Yes, this can be confusing, but we should be aware of it.
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
