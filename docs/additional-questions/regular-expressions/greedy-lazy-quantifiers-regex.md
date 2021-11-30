---
title: Greedy / Lazy Quants
sidebar_position: 10
---

# Greedy / Lazy Quantifiers

**Regular Expressions: Greedy / Lazy Quantifiers**

<head>
  <title>Greedy / Lazy Quantifiers - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the difference between greedy and lazy quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, quantifiers are Greedy. Greedy quantifiers try to match the longest text that matches given pattern. Greedy quantifiers work by first reading the entire string before trying any match. If the entire text does not match, remove last character, and try again, repeating the process until a match is found. A lazy (also called non-greedy or reluctant) quantifier always attempts to repeat the sub-pattern as few times as possible, before exploring longer matches by expansion. Generally, a lazy pattern will match the shortest possible string. To make quantifiers lazy, just append (?) to the existing quantifier, e.g., +?, &#123;0,5&#125;?. It should be noted, that lazy quantifiers can fail to return.<br /><br />
  The notion of greedy/lazy quantifier only exists in backtracking regex engines. In non-backtracking regex engines or POSIX-compliant regex engines, quantifiers only specify the upper bound and lower bound of the repetition, without specifying how to find the match.
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
