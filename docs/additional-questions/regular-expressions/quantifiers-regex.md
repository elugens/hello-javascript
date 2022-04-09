---
title: Quantifiers
description: A quantifier is used to find the exact count in a sequence of digits. For example, if we are looking for a sequence of numbers like 123-456. We can used \d{3} which will return 123,456.
sidebar_position: 9
sidebar_label: Quantifiers
---

**Regular Expressions: Quantifiers**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a quantifier used for in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A quantifier is used to find the exact count in a sequence of digits. For example, if we are looking for a sequence of numbers like 123-456. We can used \d&#123;3&#125; which will return 123,456.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Sequence of digits
alert("I'm 12345 years old".match(/\d{5}/)); //  "12345"

// Range of digits
alert("I'm not 12, but 1234 years old".match(/\d{3,5}/)); // "1234"

// Omitting the upper range with \d{3,}
alert("I'm not 12, but 345678 years old".match(/\d{3,}/)); // "345678"

// Implementation on a range and omitting the upper range
let str = '+7(903)-123-45-67';

let numbers = str.match(/\d{1,}/g);

alert(numbers); // 7,903,123,45,67
```

  </div>
  </div>
</details>

---

### Are there any shorthand alias quantifiers in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are shorthands for most used quantifiers, like \d+ which looks for numbers and is a shorthand way for \d&#123;1,&#125;,. Quantifiers are used very often. They serve as the main “building block” of complex regular expressions. Using shorthand aliases can help reduce the amount of code necessary to implement an expression.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = '+7(903)-123-45-67';
alert(str.match(/\d+/g)); // 7,903,123,45,67

let str = 'Should I write color or colour?';
alert(str.match(/colou?r/g)); // color, colour

alert('100 10 1'.match(/\d0*/g)); // 100, 10, 1

alert('100 10 1'.match(/\d0+/g)); // 100, 10
// 1 not matched, as 0+ requires at least one zero
```

  </div>
  </div>
</details>

---
