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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AlternationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Alternation | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Alternation (OR) |**

<CloseAllAnswers />

---

### What is Alternation in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Alternation in a regular expression, represented by the pipe symbol (|), allows for matching one pattern or another, similar to a logical "OR" operation. It provides flexibility in searching for different patterns.
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

### How is alternation denoted in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions, alternation is denoted by the pipe symbol (|), which functions similarly to a logical "OR". For instance, in the regex "a|b", it matches either "a" or "b".
  </div>
  </div>
</details>

---

### Can you explain how Regex processes alternation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regex processes alternation from left to right. It attempts to match the pattern before the pipe (|) first. If that fails, it attempts the pattern after the pipe.
  </div>
  </div>
</details>

---

### Can Regex alternation match multiple patterns simultaneously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Regex alternation doesn't match multiple patterns simultaneously. It works on an "OR" basis, matching the first pattern that fits from left to right.

  </div>
  </div>
</details>

---

### What's the difference between character classes and alternation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Character classes, denoted by brackets [], match any single character within them, while alternation, denoted by |, matches any one of the complete patterns it separates.
  </div>
  </div>
</details>

---

### Can alternation be used in combination with other Regex operations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, alternation can be combined with other regex operations like grouping (parentheses), quantifiers (*, +, ?, &#123;&#125;), character classes ([]), and anchors (^, $).
  </div>
  </div>
</details>

---

### Is there any downside to using alternation excessively in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Excessive use of alternation in regex can lead to complex, hard-to-read patterns and potentially slower performance due to backtracking, especially with long strings.
  </div>
  </div>
</details>

---

### How does Regex handle non-matching alternatives?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a regex pattern includes non-matching alternatives, it simply ignores them and proceeds to the next alternative. If all alternatives fail, the entire pattern match fails.
  </div>
  </div>
</details>

---

### How is precedence determined in Regex alternation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regex alternation, precedence is determined by the order from left to right. It first tries to match the pattern on the left of the pipe (|), then proceeds to the right.
  </div>
  </div>
</details>

---

### Can you have an alternation with no alternatives?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, An alternation without any alternatives, represented as just a pipe symbol (|) in regex, matches nothing before and nothing after, effectively matching an empty string.
  </div>
  </div>
</details>

---

### How does alternation behave with empty strings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An empty string as an alternative in a regex alternation (|) will match at every position in the input string, effectively making it a successful, but zero-width, match.
  </div>
  </div>
</details>

---

### Can alternation be nested within a Regex pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, alternation can be nested within a regular expression pattern using parentheses for grouping. For example, in the regex "(a|(b|c))", alternation is nested.
  </div>
  </div>
</details>

---

### What's the impact of using grouping with alternation in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using grouping with alternation in regex allows the alternation to apply to a sequence of characters, rather than just single characters. It enhances pattern flexibility and precision.
  </div>
  </div>
</details>

---

### How does quantification work with alternation in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Quantification in regex applies to the pattern preceding it. When used with alternation, parentheses are often required to specify what the quantifier applies to, e.g., "(a|b)*" matches any sequence of "a"s and "b"s.
  </div>
  </div>
</details>

---

### Is Regex alternation greedy or lazy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regex alternation is neither greedy nor lazy. It simply tries to match the patterns from left to right and stops when it finds the first match. Greediness and laziness apply to quantifiers.
  </div>
  </div>
</details>

---
