---
title: Regex Sets / Ranges
description: In simple terms, a range in a regular is denoted or expression inside of square brackets. For instance, [a-z] denotes a range of lowercase letters.
sidebar_position: 8
sidebar_label: Sets / Ranges
keywords:
  - regex sets
  - regex ranges
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
  - regex sets
  - regex ranges
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/SetsRangesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Regex Sets / Ranges | Regular Expression Interview Questions</title>
</head>

**Regular Expressions: Regex Sets / Ranges**

<CloseAllAnswers />

---

### How do square brackets […] perform in regular expression sets?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Several characters or character classes inside square brackets […] mean to “search for any character among given”. For example, [eao] means any of the 3 characters: 'a', 'e', or 'o'. That is called a set in regex terminology. We use sets in a regular expressions along with recurring characters. We should note that although there are multiple characters in the set, they correspond to exactly one character in the match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// find [t or m], and then "op"
alert('Mop top'.match(/[tm]op/gi)); // "Mop", "top"

// Return null or no matches
// find "V", then [o or i], then "la"
alert('Voila'.match(/V[oi]la/)); // null, no matches
```

  </div>
  </div>
</details>

---

### Can you explain how range gets set in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, a range in a regular expression is denoted or expressed inside of square brackets. A range may be from [a-z] or [1-100]. These settings can be set based on your needs. We can also use character classes inside […]. For example, if we would like to look for a wordy character \w or a hyphen -, then the set is [\w-]. Combining multiple classes is also possible, e.g. [\s\d] means “a space character or a digit”.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g)); // xAF
```

  </div>
  </div>
</details>

---

### Is there a way to handle Han (Chinese) or Cyrillic in regexp ranges?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can write a universal pattern that looks for wordy characters in any language. That is easy; we would use the Unicode properties in regular expressions. You should note that Internet Explorer does not support Unicode properties, and if we need them, we can use library XRegExp for IE users.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;

let str = `Hi 你好 12`;

// finds all letters and digits:
alert(str.match(regexp)); // H,i,你,好,1,2
```

  </div>
  </div>
</details>

---

### How do you exclude a range of characters in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want to exclude a range of characters in a regular expression. We can place the caret ^ character at the start and match any character except the ones we are trying to match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('alice15@gmail.com'.match(/[^\d\sA-Z]/gi)); // returns @ and .
```

  </div>
  </div>
</details>

---

### Do we have to escape special characters in regex sets or ranges?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, there is no need to escape special characters in regex ranges or sets. The only characters that we escape are the caret ^ and the closing bracket, and they are not escaped in the technical sense but rather implicitly. This technicality does not mean we cannot escape characters, but it is not necessary in most cases.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// No need to escape
let regexp = /[-().^+]/g;

alert('1 + 2 - 3'.match(regexp)); // Matches +, -

// Escaped everything
let regexp = /[\-\(\)\.\^\+]/g;

alert('1 + 2 - 3'.match(regexp)); // also works: +, -
```

  </div>
  </div>
</details>

---

### What is the recommended way to match against surrogate pairs in a set or range?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If there are surrogate pairs in the set, flag u is required for them to work correctly. This requirement also applies to a range of surrogate pairs.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// SET: look for 𝒳
alert('𝒳'.match(/[𝒳𝒴]/u)); // returns 𝒳

// RANGE: look for characters from 𝒳 to 𝒵
alert('𝒴'.match(/[𝒳-𝒵]/u)); // returns 𝒴
```

  </div>
  </div>
</details>

---
