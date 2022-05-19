---
title: Greedy / Lazy Quantifiers
description: By default, quantifiers are Greedy. Greedy quantifiers try to match the longest text that matches given pattern. Regular Expressions Interview Questions
sidebar_position: 10
sidebar_label: Greedy / Lazy Quants
keywords:
  - greedy quantifiers
  - lazy quantifiers
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
  - greedy quantifiers
  - lazy quantifiers
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/GreedyLazySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Greedy / Lazy Quantifiers | HelloJavaScript.info</title>
</head>

**Regular Expressions: Greedy / Lazy Quantifiers**

<CloseAllAnswers />

---

### Can you explain the difference between greedy and lazy quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Quantifiers are Greedy by default. Greedy quantifiers seek the longest text that meets a particular pattern. Greedy quantifiers scan the whole string before attempting any match. If the full text does not match, delete the last character and try again until a match gets discovered. A lazy (also known as non-greedy or hesitant) quantifier always tries to repeat the sub-pattern as few times as feasible before expanding to longer matches. In general, a lazy pattern matches the smallest feasible string. To make quantifiers lazy, attach (?) to the current quantifier, for example, +?, &#123;0,5&#125;? We should emphasize that lazy quantifiers are capable of failing.<br /><br />The notion of greedy/lazy quantifiers only exists in backtracking regex engines. In non-backtracking regex engines or POSIX-compliant regex engines, quantifiers only specify the repetition's upper and lower bound without specifying how to find the match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Greedy Quantifier
let regexp = /".+"/g;
let str = 'a "witch" and her "broom" is one';
alert(str.match(regexp)); // "witch" and her "broom"

// Lazy Quantifier
let regexp = /".+?"/g;
let str = 'a "witch" and her "broom" is one';

alert(str.match(regexp)); // "witch", "broom"
```

  </div>
  </div>
</details>

---
