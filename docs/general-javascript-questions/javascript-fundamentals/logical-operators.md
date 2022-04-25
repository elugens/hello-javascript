---
title: Logical Operators
description: Logical operators are used to combine conditional statements. Logical operators can be applied to values of any type; they are not limited to a Boolean type.
sidebar_position: 13
sidbar_label: Logical Operators
---

**JavaScript Fundamentals: Logical Operators**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What makes the logical || (OR), && (AND), ! (NOT) operators unique?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical operators get applied to values of any type; they are not limited to a Boolean type.</div>
  </div>
</details>

---

### If an operand is not a Boolean, what does the logical || OR do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an operand is not a Boolean, it converts to a Boolean for the evaluation. For instance, the number 1 gets treated as true, and the number 0 is false.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
/* Logical OR returns the first truthy value,
 *  or the last value if there are none
 */

console.log('1' || '0'); // returns 1

console.log(1 || 0); // returns 1

console.log(0 || 0); // returns 0
```

  </div>
  </div>
</details>

---

### How does logical OR “||” function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The OR || operator does the following:<br /><br />
  <ol>
    <li>Operands evaluate from left to right.</li>
    <li>Converts each operand to a Boolean value, and if the result is true, the program terminates and returns the operand's original value.</li>
    <li>Returns the final operand if all operands get evaluated (i.e., all were false).</li>
  </ol>

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(1 || 0); // 1 (1 is truthy)

alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)

alert(undefined || null || 0); // 0 (all falsy, returns the last value)
```

:::note
Logical OR “||” finds the first truthy value or the last value if there are none.
:::

  </div>
  </div>
</details>

---

### What is the definition of a short-circuit evaluation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When JavaScript evaluates an OR expression, JavaScript short-circuits by not proceeding to the second operand if the first operand is true.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
true || alert('not printed');
false || alert('printed');
```

  </div>
  </div>
</details>

---

### What does the Logical && (AND) return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical && (AND) returns true if both operands are truthy and false otherwise.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

  </div>
  </div>
</details>

---

### What type of conversion does the Logical && (AND) perform?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical && (AND) converts all operands to Boolean values, true or false.</div>
  </div>
</details>

---

### What steps get performed using the Logical && (AND) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The AND && operator performs the following functions:<br /><br />
  <ol>
    <li>Operands evaluate from left to right.</li>
    <li>Converts each operand to a Boolean value, and if the result is false, the program terminates and returns the operand's original value.</li>
    <li>It returns the final operand if all operands get evaluated (i.e., all were true).</li>
  </ol>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsie,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && 'no matter what'); // 0
```

  </div>
  </div>
</details>

---

### What are the differences between Logical || (OR) and && (AND) operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference is that AND returns the first falsie value while OR returns the first truthy.</div>
  </div>
</details>

---

### Which of the two, Logical || (OR) and && (AND) operators have the higher operator precedence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The AND operator has higher precedence than the OR operator.</div><br />
  <div><strong>Technical Response:</strong> The precedence of the AND && operator is greater than that of the OR || operator. As a result, the code a && b || c && d is effectively the same as if the && expressions were enclosed in parentheses: (a && b) (c && d).
  </div>
  </div>
</details>

---

### Can you replace conditional if with OR (||) or && (AND)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, Yes, but it is not recommended because it reduces readability.</div><br />
  <div><strong>Technical Response:</strong> Technically, we can do it, which goes against recommendations. Although the variant with && appears shorter, an if statement is more prominent and tends to be more readable.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let x = 1;

x > 0 && alert('Greater than zero!');

// the if example is cleaner and obvious

let x = 1;

if (x > 0) alert('Greater than zero!');
```

  </div>
  </div>
</details>

---

### What steps get performed using the Logical! (NOT) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The operator accepts a single argument, converts it to a Boolean, and returns the inverse value.</div><br />
  <div><strong>Technical Response:</strong> The operator accepts a single argument and does the following:<br /><br />
  <ol>
    <li>Converts the operand to a Boolean type: true/false.</li>
    <li>Returns the inverse value.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(!true); // false
alert(!0); // true
```

  </div>
  </div>
</details>

---

### What happens when we apply the !! (DOUBLE NOT) to a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The value is inverted twice, returning it to its original Boolean value.</div><br />
  <div><strong>Technical Response:</strong> The first NOT changes the value to Boolean and returns the inverse, whereas the second NOT reverses the process. Finally, we have a simple Value-to-Boolean translation (Boolean conversion).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(!!'non-empty string'); // true
alert(!!null); // false
```

  </div>
  </div>
</details>

---

### Is there a built-in object that performs in the same fashion as the !! (DOUBLE NOT) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Boolean object produces the same result as the double not.</div><br />
  <div><strong>Technical Response:</strong> The built-in Boolean object performs this in the same fashion as the !! (DOUBLE NOT) operator.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert(!!'non-empty string'); // true
alert(!!null); // false

// Example of the Boolean method
alert(Boolean('non-empty string')); // true
alert(Boolean(null)); // false
```

  </div>
  </div>
</details>

---

### What has the highest operator precedence over all the logical operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical NOT is the highest of all logical operators. It always executes first.</div><br />
  <div><strong>Technical Response:</strong> The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && (AND) or || (OR).
  </div>
  </div>
</details>

---
