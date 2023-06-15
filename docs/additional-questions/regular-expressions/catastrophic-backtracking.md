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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CatastrophicSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Catastrophic Backtracking | Regular Expressions Questions</title>
</head>

**Regular Expressions: Catastrophic Backtracking**

<CloseAllAnswers />

---

### What is the meaning of catastrophic backtracking in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Catastrophic backtracking in regular expressions occurs when the regex engine exhaustively explores all possible combinations in a string due to a complex pattern, causing performance issues.
    </div><br />
  <div><strong>Technical Response:</strong> Catastrophic backtracking is a condition that can occur if you are checking a (usually long) string against a complex regular expression. The problem usually occurs if something towards the end of the string causes the string not to match. This problem is common in some browsers like Firefox and can happen on the server-side. We should note that catastrophic backtracking is a runaway regular expression.
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

### What causes Catastrophic Backtracking in Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Catastrophic backtracking is caused by complex regular expressions with excessive, nested quantifiers, or ambiguous patterns, which force the regex engine to try and retry many matching paths, leading to severe performance issues.
  </div>
  </div>
</details>

---

### How can you detect Catastrophic Backtracking in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Detecting catastrophic backtracking in JavaScript can be challenging. Often, it manifests as significant slowdowns or freezing during regex execution, especially when matching against long strings with complex or ambiguous patterns.
  </div>
  </div>
</details>

---

### How do you prevent catastrophic backtracking in the regex engine?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To prevent catastrophic backtracking in regex, avoid using excessive or nested quantifiers and ambiguity in patterns. We can use possessive quantifiers or atomic grouping where appropriate. Implement non-capturing groups when capturing isn't necessary. It's also crucial to leverage lookahead and lookbehind assertions effectively.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript example that shows how to avoid catastrophic backtracking with atomic grouping:

```javascript
let regex = /^(?>\d+|[a-z]+|[@#]+)+$/;

let testString = '123abc@##';

if(regex.test(testString)) {
    console.log('Match found!');
} else {
    console.log('Match not found!');
}
```

**Note:** Please note, JavaScript doesn't natively support atomic groups, so in practical cases, you can use other strategies like replacing `*` with `*?` to make it non-greedy, or use lookahead and lookbehind assertions.

  </div>
  </div>
</details>

---

### What's the potential impact of Catastrophic Backtracking on a web application?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Catastrophic backtracking in a web application can cause significant performance issues, leading to slow response times, unresponsiveness, and even application crashes, negatively affecting user experience and scalability.
  </div>
  </div>
</details>

---

### Can you provide a typical problematic pattern that can lead to Catastrophic Backtracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A typical problematic pattern leading to catastrophic backtracking in JavaScript could be a nested quantifier like /(a+)*b/. If the string doesn't contain 'b', this can lead to excessive backtracking.
  </div>
  </div>
</details>

---

### How can you prevent Catastrophic Backtracking in Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To prevent catastrophic backtracking in JavaScript regex, avoid ambiguous patterns and excessive nested quantifiers. Use non-greedy quantifiers, lookahead and lookbehind assertions, and non-capturing groups appropriately.
  </div>
  </div>
</details>

---

### What's the difference between a greedy and a non-greedy quantifier in terms of backtracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Greedy quantifiers try to match as much as possible and backtrack if needed, while non-greedy ones match as little as possible, reducing backtracking.
  </div>
  </div>
</details>

---

### How can lookahead and lookbehind help avoid Catastrophic Backtracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookahead and lookbehind can assert what follows or precedes without consuming characters, providing more control and reducing unnecessary backtracking.
  </div>
  </div>
</details>

---

### What are the trade-offs of using more specific patterns to avoid Catastrophic Backtracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> More specific patterns can reduce backtracking but might also decrease the versatility of the regex, making it less general-purpose.
  </div>
  </div>
</details>

---
