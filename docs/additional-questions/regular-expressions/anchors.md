---
title: Anchors
description: Anchors in regex are used to match the start and end of a string. They are used to match the start and end of a string.
sidebar_position: 4
sidebar_label: Anchors
---

**Regular Expressions: Anchors**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What do the caret ^ and dollar sign $ represent in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”. The caret ^ matches at the beginning of the text, and the dollar $ represents the end. You should note that we could use the startsWith and endsWith methods to perform the same task, which is the recommendation. We use regular expressions for more complex tests in JavaScript.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str1 = 'Mary had a little lamb';
alert(/^Mary/.test(str1)); // true

let str2 = "it's fleece was white as snow";
alert(/snow$/.test(str2)); // true
```

  </div>
  </div>
</details>

---

### What approach should we use to test for a full match in RegExp?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both anchors, caret, and dollar sign, together ^...$ often get used in testing whether a string fully matches the pattern. For instance, check if the user input is in the proper format.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let goodInput = '12:34';
let badInput = '12:345';

let regexp = /^\d\d:\d\d$/;
alert(regexp.test(goodInput)); // true
alert(regexp.test(badInput)); // false
```

  </div>
  </div>
</details>

---

### What does it mean that Anchors (caret/dollar sign) have zero width?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> They do not match a character but instead force the regexp engine to check the condition (text start/end).
    </div>
  </div>
</details>

---
