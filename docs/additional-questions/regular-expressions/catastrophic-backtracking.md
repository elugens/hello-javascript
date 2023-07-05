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

```javascript
const regex = /(\d+)+([a-z]+)+/i;
```

This will work in most cases, but because it has nested quantifiers, it might suffer from catastrophic backtracking if the string is long and doesn't match the pattern.

Here's how we can improve it:

**1. Remove unnecessary quantifiers**:

```javascript
const regex = /\d+[a-z]+/i;
```

In this case, we don't need the `+` after the groups, because `\d+` already matches one or more digits, and `[a-z]+` matches one or more letters.

**2. Simulating atomic grouping**:

Atomic groups are not supported in JavaScript, but can be simulated to some extent. If we know that once we have a match of numbers, there's no need to backtrack into it, we can use a positive lookahead to simulate an atomic group:

```javascript
const regex = /(?=\d+)(\d+)(?=[a-z]+)([a-z]+)/i;
```

In this case, `(?=\d+)` is a positive lookahead that asserts that what follows is one or more digits. Once this is satisfied, the engine won't backtrack into this group. The same applies to `(?=[a-z]+)`, which asserts that what follows is one or more letters.

**3. Simulating possessive quantifiers**:

Possessive quantifiers are also not natively supported in JavaScript. However, they can be simulated using a positive lookahead. A possessive quantifier, once it matches something, won't give it back. This can be useful to prevent backtracking:

```javascript
const regex = /(?=(\d+))\d+(?=(\d+))[a-z]+/i;
```

In this case, `(?=(\d+))\d+` is simulating a possessive quantifier: it matches one or more digits and doesn't allow backtracking into this group. The same does not apply to the letter group as it is not preceded by a lookahead.

Keep in mind these are complex solutions for problems that might be easier solved by simplifying and optimizing your regex pattern to your specific needs, so they should only be used when necessary.

---

:::note
**Note:** Please note, JavaScript doesn't natively support atomic groups, so in practical cases, you can use other strategies like replacing `*` with `*?` to make it non-greedy, or use lookahead and lookbehind assertions.
:::

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
