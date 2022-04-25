---
title: Lookahead / Lookbehind
description: The lookahead approach involves in catching a match based on a proceeding character or digit. The lookbehind approach involves in catching a match based on a preceding character or digit.
sidebar_position: 14
sidebar_label: Lookahead / Lookbehind
---

**Regular Expressions: Lookahead / Lookbehind**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the Lookahead approach in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sometimes, we need to find only those matches for a pattern that are followed or preceded by another pattern. The lookahead approach involves catching a match based on a proceeding character or digit. For example, the syntax is: X(?=Y), which means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y. Notably, the lookahead is merely a test. The contents of the parentheses do not get included in the result.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '1 turkey costs 30€';

alert(str.match(/\d+(?=€)/));
// 30, the number 1 is ignored, as it is not followed by €

// EXAMPLE: Negative Lookahead
let str = '2 turkeys cost 60€';

alert(str.match(/\d+\b(?!€)/g));
// 2 (the price is not matched)
```

  </div>
  </div>
</details>

---

### What is the difference between regex Lookahead and Lookbehind?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookahead allows us to add a condition for “what follows”. Lookbehind is similar, but it looks behind to find the target.
    </div>
  </div>
</details>

---

### Can you explain the Lookbehind approach in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lookbehind is like the lookahead approach. The difference is that they are the opposite, where lookahead value matches a value that proceeds it. While the lookbehind value matches the value proceeds it. It allows us to match a pattern only if the target value is before it. We can also use the negative lookbehind approach. The negative lookbehind approach allows us to set a test where the target should not be behind the pattern value. You should note that the contents inside lookbehind parentheses do not become a part of the result.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '1 turkey costs $30';

// the dollar sign is escaped \$
alert(str.match(/(?<=\$)\d+/)); // 30 (skipped the sole number)

let str = '2 turkeys cost $60';

alert(str.match(/(?<!\$)\b\d+/g)); // 2 (the price is not matched)
```

  </div>
  </div>
</details>

---

### Can you apply a capturing group to a lookaround in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, this is possible for both the lookahead and lookbehind (They are lookarounds) to apply the lookaround approach. The lookaround is zero-length making it Atomic. As soon as the lookaround condition is satisfied, the regex engine forgets about everything inside the lookaround, and it does not backtrack inside the lookaround to try different permutations.<br /><br />The only situation in which this makes any difference is when you use capturing groups inside the lookaround. Since the regex engine does not backtrack into the lookaround, it does not try different permutations of the capturing groups.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '1 turkey costs 30€';
let regexp = /\d+(?=(€|kr))/; // extra parentheses around €|kr

alert(str.match(regexp)); // 30, €
```

  </div>
  </div>
</details>

---
